# VanillaJS ScrollSpy

[![Build Status](https://travis-ci.org/ederssouza/vanillajs-scrollspy.svg?branch=master)](https://travis-ci.org/ederssouza/vanillajs-scrollspy)

ScrollSpy in pure JavaScript.

## Installation

```bash
$ npm install vanillajs-scrollspy --save
```

## How to use

```javascript
const menu = document.querySelector('#navbar')
const scrollspy = VanillaScrollspy({ menu })
scrollspy.init()
```

- **menu:** menu selector (#id, .class, ...)
- **speed (optional):** scroll speed, default value `2000`
- **easing (optional):** scroll type `'easeOutSine'`, `'easeInOutSine'` or `'easeInOutQuint'`, default value `'easeOutSine'`

### ES6

```javascript
import VanillaScrollspy from 'vanillajs-scrollspy'

const menu = document.querySelector('#navbar')
const scrollspy = VanillaScrollspy({ menu })
scrollspy.init()
```

### CommonJS

```javascript
const VanillaScrollspy = require('vanillajs-scrollspy').default

const menu = document.querySelector('#navbar')
const scrollspy = VanillaScrollspy({ menu })
scrollspy.init()
```

### UMD in Browser

```html
<script src="./dist/vanillajs-scrollspy.min.js"></script>
```

After that the library will be available to the Global as `VanillaScrollspy`. Follow an example:

``` javascript
const menu = document.querySelector('#navbar')
const scrollspy = VanillaScrollspy({ menu })
scrollspy.init()
```

## Examples

### Basic template

Available in [`public/index.html`](public/index.html).

``` html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>VanillaJS ScrollSpy</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css">
    <style>
      html, body {
        height: 100%;
      }
      .navbar-brand > .navbar-item {
        font-size: 20px;
        font-weight: bold;
      }
      .navbar-menu .navbar-item {
        font-size: 14px;
        transition: background-color .26s, color .26s;
      }
      .navbar-menu .navbar-item.active {
        background-color: #222;
        color: red;
      }
      .page {
        height: 100%;
        padding: 80px 0;
        width: 100%;
      }
      .page:nth-child(odd) { background-color: #ddd; }
      .page:nth-child(even) { background-color: #fff; }
    </style>
  </head>

  <body>
    <nav class="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a title="VanillaJS ScrollSpy" class="navbar-item">VanillaJS ScrollSpy</a>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbar" class="navbar-menu navbar-scroll">
          <div class="navbar-start">
            <a href="#home" title="Home" class="navbar-item active">Home</a>
            <a href="#portfolio" title="Portfolio" class="navbar-item">Portfolio</a>
            <a href="#about" title="About" class="navbar-item">About</a>
            <a href="#contact" title="Contact" class="navbar-item">Contact</a>
          </div>
        </div>
      </div>
    </nav>

    <section id="home" class="page">
      <div class="container">
        <h2 class="title">Home</h2>
      </div>
    </section>

    <section id="portfolio" class="page">
      <div class="container">
        <h2 class="title">Portfolio</h2>
      </div>
    </section>

    <section id="about" class="page">
      <div class="container">
        <h2 class="title">About</h2>
      </div>
    </section>

    <section id="contact" class="page">
      <div class="container">
        <h2 class="title">Contact</h2>
      </div>
    </section>

    <script src="../dist/vanillajs-scrollspy.min.js"></script>
    <script>
      const menu = document.querySelector('#navbar')
      const scrollspy = VanillaScrollspy({ menu })
      scrollspy.init()
    </script>
  </body>
</html>
```

### Controlling the speed
Choose a number greater than or equal to 1.

``` javascript
const menu = document.querySelector('#navbar')
const scrollspy = VanillaScrollspy({ menu, speed: 1000 })
scrollspy.init()
```

### Changing scroll type

``` javascript
const menu = document.querySelector('#navbar')
const scrollspy = VanillaScrollspy({ menu, speed: 1000, easing: 'easeInOutQuint' })
scrollspy.init()
```

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/ederssouza/vanillajs-scrollspy/tags).

## Authors

See also the list of [contributors](https://github.com/ederssouza/vanillajs-scrollspy/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
