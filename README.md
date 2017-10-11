![Sushi.js](/sushi_logo_git.png | height=50)
=========

![Sushi.js](/sushi_git.png?raw=true "Sushi.js")

A modular UI library for Vue.js

## Installation

  `npm install sushi.js`

## Usage

For Examples and documention go to: [walraz.github.io/sushi.js](http://walraz.github.io/sushi.js/)

## Install

In your applications main entry point add:

```javascript
import Vue from 'vue'
import 'sushi.js/dist/main.css';
import Sushi from 'sushi.js'

Vue.use(Sushi)
```


## Theme

  In case of theme changes

  1. remove `import 'sushi/core/styles/main.scss` from your applications main entry point
  2. in your root .vue instance (App.vue) add

  ```html
  <style lang="scss">
    $primary: limegreen;
    @import '~sushi.js/src/core/styles/main.scss';
  </style>
  ```
  or
  1. Create a .scss file with this content (The order of @import is important)
  ```scss
  $primary: red; 
  @import 'sushi/core/styles/main.scss';
  ```
  2. import your created .scss file BEFORE `import 'sushi.js/core/styles/main.scss'`


## Contributing

    ...
