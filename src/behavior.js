/* eslint-disable max-len */
import chalk from 'chalk';
// eslint-disable-next-line import/extensions
import mdLinks from './md-links.js';
// eslint-disable-next-line import/extensions
import stats from './stats.js';

const handler = (path, options) => {
  mdLinks(path, options)
    .then((links) => {
      const linkhref = [];
      let linkBroken = 0;
      links.forEach((link) => {
        if (link.status <= 500 || link.status > 400) linkBroken += 1;
        if (!options.validate && !options.stats) {
          console.log(chalk.magenta(link.file, link.href, link.text));
        }
        if (options.validate && !options.stats) {
          if (link.status === 200) console.log(chalk.green(link.file, link.href, link.statusText, link.status, link.text));
          if (link.status === 500) console.log(chalk.red(link.file, link.href, link.statusText, link.status, link.text));
          if (link.status === 404) console.log(chalk.yellow(link.file, link.href, link.statusText, link.status, link.text));
        }
        return linkhref.push(link.href);
      });
      if (options.stats && !options.validate) {
        console.log(chalk.bgBlue.black(stats(linkhref)));
      }
      if (options.validate && options.stats) {
        console.log(chalk.bgBlue.black(stats(linkhref)));
        console.log(chalk.bgRed.black('Broken:', linkBroken));
      }
    })
    .catch((err) => (err.code === 'ENOENT' ? console.log(chalk.bgRed.black('File not found!')) : err));
};

export default handler;
