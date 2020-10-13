/* eslint-disable no-return-assign */
import fs from 'fs';
import path from 'path';
import jsdom from 'jsdom';
import pkg from 'marked';
import fetch from 'node-fetch';

const marked = pkg;
const { JSDOM } = jsdom;

export const exists = (route) => (fs.existsSync(route));

export const getAbsoluteRoute = (route) => (path.isAbsolute(route) ? (route) : path.resolve(route));

export const isMdFile = (route) => (path.extname(route) === '.md');

export const getMdFiles = (routeDir) => {
  let allMdFiles = [];
  const route = getAbsoluteRoute(routeDir);
  if (fs.lstatSync(route).isFile()) {
    if (isMdFile(route)) allMdFiles.push(route);
  } else {
    fs.readdirSync(route).forEach((file) => {
      const mdfile = getMdFiles(path.join(route, file));
      allMdFiles = allMdFiles.concat(mdfile);
    });
  }
  return allMdFiles;
};

const getMdLinks = (route) => {
  const mdFiles = getMdFiles(route);
  const linksObject = [];
  mdFiles.forEach((mdFile) => {
    const data = fs.readFileSync(mdFile, 'utf8');
    const htmlFile = marked(data);
    const dom = new JSDOM(htmlFile);
    const link = dom.window.document.querySelectorAll('a');
    link.forEach((element) => {
      linksObject.push({
        href: element.getAttribute('href'),
        text: element.textContent,
        file: mdFile,
      });
    });
  });
  return linksObject;
};

export const validateLinks = (route) => {
  const links = getMdLinks(route);
  // eslint-disable-next-line no-shadow
  const validateopt = links.map((link) => fetch(link.href)
    .then((res) => ({
      href: link.href,
      text: link.text,
      file: link.file,
      status: res.status,
      statusText: res.statusText,
    }))
    .catch(() => ({
      href: link.href,
      text: link.text,
      file: link.file,
      status: 500,
      statusText: 'FAIL',
    })));
  return Promise.all(validateopt);
};

export default getMdLinks;
