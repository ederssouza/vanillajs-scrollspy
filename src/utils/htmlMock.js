export function renderHTML() {
  return `
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
      </style>

      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="container">
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
  `
}
