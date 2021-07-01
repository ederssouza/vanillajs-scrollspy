const fncAnimation = (callback) => {
  window.setTimeout(callback, 1000 / 60);
  return callback;
};

window.requestAnimFrame = (() => window.requestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.mozRequestAnimationFrame
  || fncAnimation
)();

class VanillaScrollspy {
  constructor(menu, speed = 2000, easing = 'easeOutSine') {
    this.$menu = menu;
    this.speed = speed;
    this.easing = easing;
  }

  scrollToY(targetY = 0) {
    const scrollTargetY = targetY;
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / this.speed, 0.8));
    let currentTime = 0;

    const easingEquations = {
      easeOutSine(pos) {
        return Math.sin(pos * (Math.PI / 2));
      },

      easeInOutSine(pos) {
        return (-0.5 * (Math.cos(Math.PI * pos) - 1));
      },

      easeInOutQuint(pos) {
        /* eslint-disable-next-line */
        if ((pos /= 0.5) < 1) {
          return 0.5 * (pos ** 5);
        }
        return 0.5 * (((pos - 2) ** 5) + 2);
      },
    };

    const tick = () => {
      currentTime += 1 / 60;

      const p = currentTime / time;
      const t = easingEquations[this.easing](p);

      if (p < 1) {
        window.requestAnimFrame(tick);
        window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
        return;
      }

      window.scrollTo(0, scrollTargetY);
    };

    tick();
  }

  menuControl() {
    const $links = this.$menu.querySelectorAll('a[href^="#"]');
    const scrollPos = window.scrollY || document.documentElement.scrollTop;

    Array.from($links).forEach((link) => {
      const $elem = document.querySelector(link.getAttribute('href'));

      return $elem.offsetTop <= scrollPos && ($elem.offsetTop + $elem.clientHeight) > scrollPos
        ? link.classList.add('active')
        : link.classList.remove('active');
    });
  }

  animated() {
    const self = this;

    function control(e) {
      e.preventDefault();
      const $target = document.querySelector(this.hash);
      self.scrollToY($target.offsetTop);
    }

    const $links = this.$menu.querySelectorAll('a[href^="#"]');
    Array.from($links).forEach((link) => link.addEventListener('click', control));
  }

  init() {
    this.animated();
    document.addEventListener('scroll', () => this.menuControl());
  }
}

export default function vanillaScrollspy(...args) {
  return new VanillaScrollspy(...args);
}
