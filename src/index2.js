const fncAnimation = (callback) => {
  window.setTimeout(callback, 1000 / 60);
};

window.requestAnimFrame = (() =>
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  fncAnimation
)();

const scrollToY = (targetY = 0, scrollSpeed = 2000, easingScroll = 'easeOutSine') => {
  const scrollTargetY = targetY;
  const speed = scrollSpeed;
  const easing = easingScroll;

  const scrollY = window.scrollY || document.documentElement.scrollTop;
  let currentTime = 0;
  const time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8));

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

  function tick() {
    currentTime += 1 / 60;
    const p = currentTime / time;
    const t = easingEquations[easing](p);

    if (p < 1) {
      window.requestAnimFrame(tick);
      window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
    } else {
      window.scrollTo(0, scrollTargetY);
    }
  }

  tick();
};

const menuControl = (menu) => {
  let i;
  let currLink;
  let refElement;
  const links = menu.querySelectorAll('a[href^="#"]');
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
};

const animated = (menu, speed, easing) => {
  function control(e) {
    e.preventDefault();
    const target = document.querySelector(this.hash);
    scrollToY(target.offsetTop, speed, easing);
  }

  let i;
  let link;
  const links = menu.querySelectorAll('a[href^="#"]');

  for (i = 0; i < links.length; i += 1) {
    link = links[i];
    link.addEventListener('click', control);
  }
};

const vanillaScrollspy = (menu, speed, easing) => {
  animated(menu, speed, easing);
  document.addEventListener('scroll', () => {
    menuControl(menu);
  });
};

export default vanillaScrollspy;
