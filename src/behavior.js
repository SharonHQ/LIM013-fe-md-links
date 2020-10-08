// eslint-disable-next-line import/extensions
import mdLinks from './md-links.js';
// eslint-disable-next-line import/extensions
import stats from './stats.js';

const handler = (path, options) => {
  mdLinks(path, options)
    .then((links) => {
      const linkhref = [];
      let broken = 0;
      links.forEach((link) => {
        if (options.validate === undefined && options.stats === undefined) {
          console.log(link.file, link.href, link.text);
        }
        if (options.validate === true && options.stats === undefined) {
          console.log(link.file, link.href, link.statusText, link.status, link.text);
        }
        if (link.statusText === 'FAIL') {
          broken = +1;
        }
        return linkhref.push(link.href);
      });
      if (options.stats === true && options.validate === undefined) {
        console.log(stats(linkhref));
      }
      if (options.validate === true && options.stats === true) {
        console.log(stats(linkhref));
        console.log('Broken: ', broken);
      }
    });
};

export default handler;
