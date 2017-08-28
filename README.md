# VanillaJS ScrollSpy

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

  <script src="src/js/scrollspy.js"></script>
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