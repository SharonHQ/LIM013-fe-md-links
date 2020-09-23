import { createInterface } from 'readline';
import { readFile } from 'fs';
import { extname } from 'path';
import pkg from 'marked';

const marked = pkg;

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
        console.log('Enter a markdown file path');
      } else {
        console.log('datos leídos');
        console.log(marked(data));
      }
    });
  }),
};

export default links;
