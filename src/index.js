const fncAnimation = (callback) => {
  window.setTimeout(callback, 1000 / 60);
  return callback;
};

window.requestAnimFrame = (() =>
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  fncAnimation
)();

export default class VanillaScrollspy {
  constructor(menu, speed = 2000, easing = 'easeOutSine') {
    this.menu = menu;
    this.speed = speed;
    this.easing = easing;
  }
  scrollToY(targetY = 0) {
    const scrollTargetY = targetY;
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    let currentTime = 0;
    const time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / this.speed, 0.8));

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
      } else {
        window.scrollTo(0, scrollTargetY);
      }
    };

    tick();
  }
  menuControl() {
    let i;
    let currLink;
    let refElement;
    const links = this.menu.querySelectorAll('a[href^="#"]');
    const scrollPos = window.scrollY || document.documentElement.scrollTop;

    for (i = 0; i < links.length; i += 1) {
      currLink = links[i];
      refElement = document.querySelector(currLink.getAttribute('href'));

      if (
        refElement.offsetTop <= scrollPos &&
        (refElement.offsetTop + refElement.clientHeight) > scrollPos
      ) {
        currLink.classList.add('active');
      } else {
        currLink.classList.remove('active');
      }
    }
  }
  animated() {
    const self = this;
    function control(e) {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      self.scrollToY(target.offsetTop);
    }

    let i;
    let link;
    const links = this.menu.querySelectorAll('a[href^="#"]');

    for (i = 0; i < links.length; i += 1) {
      link = links[i];
      link.addEventListener('click', control);
    }
  }
  init() {
    this.animated();
    document.addEventListener('scroll', () => {
      this.menuControl();
    });
  }
}
