## CSS to YAML Converter

This project provides a command-line tool (CLI) for converting CSS files to equivalent YAML representations. 

### Features

* Converts CSS syntax to a well-structured YAML format
* Maintains readability and clarity of the original styles
* Simplifies configuration management for certain use cases

### Installation

**Prerequisites:**

* Node.js and npm (or yarn) installed on your system.

**Installation:**

1. Clone this repository:

```bash
git clone https://github.com/neon-x-hub/css-to-yaml.git
```

2. Navigate to the project directory:

```bash
cd css-to-yaml
```

3. Install dependencies:

```bash
npm install
```

### Usage

The project includes a CLI tool named `cssyaml`. 

**Basic Conversion:**

```bash
cssyaml input.css output.yaml
```

This command converts the `input.css` file to a YAML representation saved as `output.yaml`.

### Example


**CSS:**
```css
/* Basic CSS Example */
body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
  
  h1 {
    color: #333;
    font-size: 24px;
    text-align: center;
  }
  
  p {
    color: #666;
    font-size: 14px;
    line-height: 1.5;
  }
  
  .container {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
  }
  
  .button {
    background-color: #008CBA;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }
  
  .button:hover {
    background-color: #005f73;
  }

  #tst {
    color: red;
  }
```

**YAML:**
```yaml
body:
  margin: "0"
  padding: "0"
  font-family: Arial, sans-serif
h1:
  color: "#333"
  font-size: 24px
  text-align: center
p:
  color: "#666"
  font-size: 14px
  line-height: "1.5"
.container:
  width: 80%
  margin: 0 auto
  padding: 20px
.button:
  background-color: "#008CBA"
  border: none
  color: white
  padding: 10px 20px
  text-align: center
  text-decoration: none
  display: inline-block
  font-size: 16px
  margin: 4px 2px
  cursor: pointer
.button:hover:
  background-color: "#005f73"
"#tst":
  color: red
```

### Contributing

We welcome contributions to this project! Please refer to the `CONTRIBUTING.md` file for details on how to submit pull requests and report issues.

### License

This project is licensed under the MIT License. See the `LICENSE` file for more information.
