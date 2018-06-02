# Introduction

Include stylus-resources-loader to your project out of the box.

# Installation

```
vue add stylus-resources-loader
```

# Config

Define your resources under `pluginOptions` in vue.config.js.

Example

```js
const path = require('path')
module.exports = {
  pluginOptions: {
    'stylus-resources-loader': {
      'resources': [
        path.resolve(__dirname, 'src/styles/abstracts/variables.styl'),
        path.resolve(__dirname, 'src/styles/abstracts/mixins.styl'),
        path.resolve(__dirname, 'src/styles/abstracts/placeholders.styl')
      ]
    }
  }
}
```
