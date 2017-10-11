<img alt="Sushi.js" src="/example/assets/img/sushi_black_logo.png" height="48"> <img alt="Sushi.js" src="/example/assets/img/sushi.png" height="48"><img alt="Sushi.js" src="/example/assets/img/sushi.png" height="48"><img alt="Sushi.js" src="/example/assets/img/sushi.png" height="48">

A modular UI library for Vue.js

> Note: This is still an work in progress!

## Demo and Documentation
<a href="http://walraz.github.io/sushi.js/" target="_blank">Demo</a>

## Installation

Install Sushi.js through npm or yarn
``` bash
npm install --save sushi.js
yarn add sushi.js
```

In your applications main entry point add:

```javascript
import Vue from 'vue'
import 'sushi.js/dist/main.css';
import Sushi from 'sushi.js'

Vue.use(Sushi)
```

## Theme

In case of theme changes remove `import 'sushi.css'`
and use existing or create a new .scss file with this content.

```scss
$primary: limegreen; 
// Other overiding theme variables
@import '~sushi.js/core/styles/main.scss';
```

You have 2 options for import location, either your main `App.vue` or `app.js`

```javascript
import '/path/to/your/style.scss'
```

````html
<script lang="scss">
  @import '/path/to/your.scss';
</script>
```

## Contributing

🍣🍣🍣
