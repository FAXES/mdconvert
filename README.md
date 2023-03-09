<a href="https://github.com/FAXES/markdownconvert">
  <img width="60px" height="60px" src="https://weblutions.com/i/sevyTO.png" align="right" />
</a>

# Markdown Convert

Markdown convert is a conversion tool used to, you guessed it, convert markdown to HTML.

- 🐈 Markdown to HTML parser 
- ⚡Built different, for performance
- ⚖️ light-weight while also having custom markdown conversions built-in
- ♾️ Works in browsers, clients, servers, and (soon) command line interfaces (CLI)
- 🔥 Support for [HTTP request blocks](https://docs.weblutions.com/c/products/md-guide-http) to be rendered with custom Markdown

***Planned;** convert Markdown into regular string without Markdown formatting.*

## Installation
Get started by running the install command 😊
```
npm install markdownconvert
```

## Usage
Currently you can use markdownconvert in the following ways.

**Node.js**
```js
const mdconvert = require('markdownconvert');

let string = "This is some **cool** Markdown to **HTML**, generated by `markdownconvert` for ~~me~~ you.";

let converted = mdconvert.convert(string);
/* Output:
<p>This is some <strong>cool</strong> Markdown to <strong>HTML</strong>, generated by <code>markdownconvert</code> for <s>me</s> you.</p>
*/
```

**Browser**
```html
<script src="https://cdn.jsdelivr.net/npm/markdownconvert/index.min.js"></script>
<script>
    document.write(markdownconvert.convert("I **love** HTML don't *you*?"))
</script>
```

## Current Functions
```js
convert(string) // Converts Markdown to HTML
render(string) // Another function name, same as convert()

registerBlock(function) // Registers a block replacement that is executed, good for custom addons
registerInline(function) // Registers an in-line block replacement. Again, good for custom addons

getStyle(index) // Returns the registered style (class name) for the associated element
updateStyle(index, newProperty) // Create or overwrite existing style for the defined element
```

## Modifying Styles
Markdownconvert allows you to change the CSS properties of a tag to allow your own customisation. There's a list of [Default Styles](https://github.com/FAXES/markdownconvert/wiki/Default-Styles) available.

To update a style you can use the `updateStyle()` function.
```js
const mdconvert = require('markdownconvert');
mdconvert.updateStyle('contDanger', 'converterDangerCSS');

// To fetch this property you can use the `getStyle()` function
mdconvert.getStyle('contDanger');
```
*If `contDanger` wasn't found in the list, it would be created and added, perfect for adding your own rules with `registerBlock()` or `registerInline()`.*

## Combatibility

This works in modern broswers and in Node.js [current and LTS versions](https://nodejs.org/en/about/releases/).

## Authors
Markdownconvert is created by [Weblutions & FAXES](https://weblutions.com).

<a href="https://discord.gg/faxes" target="_blank">
    <img alt="Discord Invite" src="https://api.weblutions.com/discord/invite/faxes/light">
</a>
