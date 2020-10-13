#!/usr/bin/env node
import program from 'commander';
// eslint-disable-next-line import/extensions
import handler from './behavior.js';

program.version('0.0.1');

// Commands
program
  .command('md-links <path>')
  .description('Show links of markdown file')
  .option('-v, --validate [type]', 'Show message')
  .option('-s,--stats', 'Show basic stats of links')
  .action((path, options) => {
    handler(path, options);
  });

program.parse(process.argv);
