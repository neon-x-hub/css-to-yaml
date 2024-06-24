#!/usr/bin/env node


const { Command } = require('commander');
const {convertCSSToYAML} = require('../src/converter');
const path = require('path');
const program = new Command();

// Configure the CLI
program
  .version('1.0.0')
  .name('cssyaml')
  .description('Convert CSS file to YAML file')
  .argument('<cssFile>', 'CSS file to convert')
  .argument('<yamlFile>', 'Output YAML file')
  .action((cssFile, yamlFile) => {
    const cssFilePath = path.resolve(cssFile);
    const yamlFilePath = path.resolve(yamlFile);

    convertCSSToYAML(cssFilePath, yamlFilePath);
  });

program.parse(process.argv);