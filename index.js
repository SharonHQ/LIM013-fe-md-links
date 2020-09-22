import { createInterface } from 'readline';
import { readFile } from 'fs';
import pkg from 'chalk';

const { red, green } = pkg;
const ext = /(.md)$/i;

const captureEntry = createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const links = {
  path: captureEntry.question('Enter your path: ', (url) => {
    readFile(url, { encoding: 'utf-8' }, (error, link) => {
      if (error) {
        console.log(red(`${error}`));
      } else if (!ext.exec(url)) {
        console.log(red('Enter a markdown file path'));
      } else {
        console.log('datos leídos');
        console.log(green(link));
      }
    });
  }),
};

export default links;
