# VanillaJS ScrollSpy

[![Build Status](https://travis-ci.org/ederssouza/vanillajs-scrollspy.svg?branch=master)](https://travis-ci.org/ederssouza/vanillajs-scrollspy)

ScrollSpy in pure JavaScript.

## How to use

``` javascript
scrollSpy(menu, speed, easing);
```

- **menu:** menu selector (#id, .class, ...)
- **speed (optional):** scroll speed, default value `1500`
- **easing (optional):** scroll type `'easeOutSine'`, `'easeInOutSine'` or `'easeInOutQuint'`, default value `'easeInOutQuint'`

## Examples

### Basic template

``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>VanillaJS ScrollSpy</title>
</head>

<body>
  <header class="header">
    <div class="container">
      <nav class="navbar">
        <ul>
          <li><a class="active" href="#home" title="Home">Home</a></li>
          <li><a href="#portfolio" title="Portfolio">Portfolio</a></li>
          <li><a href="#about" title="About">About</a></li>
          <li><a href="#contact" title="Contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <section id="home" class="page">
    <div class="container">
      <h2>Home</h2>
    </div>
  </section>

  <section id="portfolio" class="page">
    <div class="container">
      <h2>Portfolio</h2>
    </div>
  </section>

  <section id="about" class="page">
    <div class="container">
      <h2>About</h2>
    </div>
  </section>

  <section id="contact" class="page">
    <div class="container">
      <h2>Contact</h2>
    </div>
  </section>

  <script src="dist/js/scrollspy.min.js"></script>
  <script>
    var menu = document.querySelector('.navbar');
    scrollSpy(menu);
  </script>
</body>
</html>
```

### Controlling the speed
Choose a number greater than or equal to 1.

``` javascript
var menu = document.querySelector('.navbar');
scrollSpy(menu, 2000);
```

### Changing scroll type

``` javascript
var menu = document.querySelector('.navbar');
scrollSpy(menu, 2000, 'easeOutSine');
```

## Browser Support

![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) | ![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png)
--- | --- | --- | --- | ---
IE 10+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔
