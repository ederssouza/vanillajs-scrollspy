'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fncAnimation = function fncAnimation(callback) {
  window.setTimeout(callback, 1000 / 60);
  return callback;
};

window.requestAnimFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || fncAnimation;
}();

var VanillaScrollspy = function () {
  function VanillaScrollspy(menu) {
    var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
    var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'easeOutSine';

    _classCallCheck(this, VanillaScrollspy);

    this.menu = menu;
    this.speed = speed;
    this.easing = easing;
  }

  _createClass(VanillaScrollspy, [{
    key: 'scrollToY',
    value: function scrollToY() {
      var _this = this;

      var targetY = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      var scrollTargetY = targetY;
      var scrollY = window.scrollY || document.documentElement.scrollTop;
      var currentTime = 0;
      var time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / this.speed, 0.8));

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

      var tick = function tick() {
        currentTime += 1 / 60;
        var p = currentTime / time;
        var t = easingEquations[_this.easing](p);

        if (p < 1) {
          window.requestAnimFrame(tick);
          window.scrollTo(0, scrollY + (scrollTargetY - scrollY) * t);
        } else {
          window.scrollTo(0, scrollTargetY);
        }
      };

      tick();
    }
  }, {
    key: 'menuControl',
    value: function menuControl() {
      var i = void 0;
      var currLink = void 0;
      var refElement = void 0;
      var links = this.menu.querySelectorAll('a[href^="#"]');
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
    }
  }, {
    key: 'animated',
    value: function animated() {
      var self = this;
      function control(e) {
        e.preventDefault();
        var target = document.querySelector(this.hash);
        self.scrollToY(target.offsetTop);
      }

      var i = void 0;
      var link = void 0;
      var links = this.menu.querySelectorAll('a[href^="#"]');

      for (i = 0; i < links.length; i += 1) {
        link = links[i];
        link.addEventListener('click', control);
      }
    }
  }, {
    key: 'init',
    value: function init() {
      var _this2 = this;

      this.animated();
      document.addEventListener('scroll', function () {
        _this2.menuControl();
      });
    }
  }]);

  return VanillaScrollspy;
}();

exports.default = VanillaScrollspy;