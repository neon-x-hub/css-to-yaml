// src/converter.js

const fs = require('fs');
const yaml = require('yaml');

// Function to parse CSS content
function parseCSS(cssContent) {
  // Remove comments
  const cssWithoutComments = cssContent.replace(/\/\*[\s\S]*?\*\//g, '');

  const rules = {};
  const regex = /([^{]+)\{([^}]+)\}/g;
  let match;

  while ((match = regex.exec(cssWithoutComments)) !== null) {
    const selector = match[1].trim();
    const properties = match[2].trim().split(';').reduce((acc, prop) => {
      const [key, value] = prop.split(':').map(s => s.trim());
      if (key && value) {
        acc[key] = value;
      }
      return acc;
    }, {});
    rules[selector] = properties;
  }

  return rules;
}

// Function to convert CSS to YAML
function convertCSSToYAML(cssFilePath, yamlFilePath) {
  // Read the CSS file
  fs.readFile(cssFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading the CSS file: ${err}`);
      return;
    }

    // Parse the CSS content
    const cssData = parseCSS(data);

    // Convert the parsed data to YAML
    const yamlData = yaml.stringify(cssData);

    // Write the YAML content to a file
    fs.writeFile(yamlFilePath, yamlData, (err) => {
      if (err) {
        console.error(`Error writing the YAML file: ${err}`);
      } else {
        console.log(`YAML file has been saved: ${yamlFilePath}`);
      }
    });
  });
}

module.exports = {
  convertCSSToYAML
};
