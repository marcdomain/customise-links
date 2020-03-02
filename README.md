# customise-links

Esures that all external links on your app opens in a new tab when the link is clicked.

## Installation

customise-links may be installed via npm with

```bash
  npm install customise-links --save
```

## Usage

```javascript
  const customiseLinks = require('customise-links');
```

Call the function in your codebase with: `customiseLinks()`

## What customiseLinks() will do

* Make external links to open in new tab, while internal links retain their default behaviour.
* Adds class `internalLink` and `externalLink` to internal and external links respectively, so you can do more customisation with your JavaScript and CSS.
* Adds HTML attribute `rel= "noopener"` to external links for security reason (prevents the newly opened page from having the ability to control the page that delivered the traffic).

[https://www.npmjs.com/package/customise-links](https://www.npmjs.com/package/customise-links)
