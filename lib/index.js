"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = vanillaScrollspy;

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var fncAnimation = function fncAnimation(callback) {
  window.setTimeout(callback, 1000 / 60);
  return callback;
};

window.requestAnimFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || fncAnimation;
}();

var VanillaScrollspy = /*#__PURE__*/function () {
  function VanillaScrollspy(menu) {
    var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
    var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'easeOutSine';

    _classCallCheck(this, VanillaScrollspy);

    this.$menu = menu;
    this.speed = speed;
    this.easing = easing;
  }

  _createClass(VanillaScrollspy, [{
    key: "scrollToY",
    value: function scrollToY() {
      var _this = this;

      var targetY = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var scrollTargetY = targetY;
      var scrollY = window.scrollY || document.documentElement.scrollTop;
      var time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / this.speed, 0.8));
      var currentTime = 0;
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
          return;
        }

        window.scrollTo(0, scrollTargetY);
      };

      tick();
    }
  }, {
    key: "menuControl",
    value: function menuControl() {
      var $links = this.$menu.querySelectorAll('a[href^="#"]');
      var scrollPos = window.scrollY || document.documentElement.scrollTop;
      Array.from($links).forEach(function (link) {
        var $elem = document.querySelector(link.getAttribute('href'));
        return $elem.offsetTop <= scrollPos && $elem.offsetTop + $elem.clientHeight > scrollPos ? link.classList.add('active') : link.classList.remove('active');
      });
    }
  }, {
    key: "animated",
    value: function animated() {
      var self = this;

      function control(e) {
        e.preventDefault();
        var $target = document.querySelector(this.hash);
        self.scrollToY($target.offsetTop);
      }

      var $links = this.$menu.querySelectorAll('a[href^="#"]');
      Array.from($links).forEach(function (link) {
        return link.addEventListener('click', control);
      });
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      this.animated();
      document.addEventListener('scroll', function () {
        return _this2.menuControl();
      });
    }
  }]);

  return VanillaScrollspy;
}();

function vanillaScrollspy() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return _construct(VanillaScrollspy, args);
}