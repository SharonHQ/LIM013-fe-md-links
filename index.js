import { createInterface } from 'readline';
import { readFile } from 'fs';
import { extname } from 'path';
import jsdom from 'jsdom';
import pkg from 'marked';

const marked = pkg;
const { JSDOM } = jsdom;

const captureEntry = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const links = {
  path: captureEntry.question('Enter your path: ', (directory) => {
    readFile(directory, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        console.log(`${err}`);
      } else if (extname(directory) !== '.md') {
        console.log('Enter a markdown file path please');
      } else {
        const htmlFile = marked(data);
        const dom = new JSDOM(htmlFile);
        const link = dom.window.document.querySelectorAll('a');
        for (let i = 0; i < link.length; i += 1) {
          console.log(link[i].getAttribute('href'));
        }
      }
    });
  }),
};

export default links;
