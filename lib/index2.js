'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var fncAnimation = function fncAnimation(callback) {
  window.setTimeout(callback, 1000 / 60);
};

window.requestAnimFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || fncAnimation;
}();

var scrollToY = function scrollToY() {
  var targetY = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var scrollSpeed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
  var easingScroll = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'easeOutSine';

  var scrollTargetY = targetY;
  var speed = scrollSpeed;
  var easing = easingScroll;

  var scrollY = window.scrollY || document.documentElement.scrollTop;
  var currentTime = 0;
  var time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8));

  var easingEquations = {
    easeOutSine: function easeOutSine(pos) {
      return Math.sin(pos * (Math.PI / 2));
    },
    easeInOutSine: function easeInOutSine(pos) {
      return -0.5 * (Math.cos(Math.PI * pos) - 1);
    },
    easeInOutQuint: function easeInOutQuint(pos) {
      /* eslint-disable-next-line */
      if ((pos /= 0.5) < 1) {
        return 0.5 * Math.pow(pos, 5);
      }
      return 0.5 * (Math.pow(pos - 2, 5) + 2);
    }
  };

  function tick() {
    currentTime += 1 / 60;
    var p = currentTime / time;
    var t = easingEquations[easing](p);

    if (p < 1) {
      window.requestAnimFrame(tick);
      window.scrollTo(0, scrollY + (scrollTargetY - scrollY) * t);
    } else {
      window.scrollTo(0, scrollTargetY);
    }
  }

  tick();
};

var menuControl = function menuControl(menu) {
  var i = void 0;
  var currLink = void 0;
  var refElement = void 0;
  var links = menu.querySelectorAll('a[href^="#"]');
  var scrollPos = window.scrollY || document.documentElement.scrollTop;

  for (i = 0; i < links.length; i += 1) {
    currLink = links[i];
    refElement = document.querySelector(currLink.getAttribute('href'));

    if (refElement.offsetTop <= scrollPos && refElement.offsetTop + refElement.clientHeight > scrollPos) {
      currLink.classList.add('active');
    } else {
      currLink.classList.remove('active');
    }
  }
};

var animated = function animated(menu, speed, easing) {
  function control(e) {
    e.preventDefault();
    var target = document.querySelector(this.hash);
    scrollToY(target.offsetTop, speed, easing);
  }

  var i = void 0;
  var link = void 0;
  var links = menu.querySelectorAll('a[href^="#"]');

  for (i = 0; i < links.length; i += 1) {
    link = links[i];
    link.addEventListener('click', control);
  }
};

var vanillaScrollspy = function vanillaScrollspy(menu, speed, easing) {
  animated(menu, speed, easing);
  document.addEventListener('scroll', function () {
    menuControl(menu);
  });
};

exports.default = vanillaScrollspy;