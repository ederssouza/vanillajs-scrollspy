window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function(callback){
            window.setTimeout(callback, 1000 / 60);
          };
})();


/**
 *  @param {number} scrollTargetY
 *  @param {number} [speed]  - scroll speed, default value 1500
 *  @param {string} [easing] - scroll type 'easeOutSine', 'easeInOutSine' or 'easeInOutQuint', default value easeInOutQuint
 */

function scrollToY(scrollTargetY, speed, easing) {

  var scrollY = window.scrollY || document.documentElement.scrollTop,
      currentTime = 0;

  scrollTargetY = scrollTargetY || 0;
  speed = speed || 2000;
  easing = easing || 'easeOutSine';

  var time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8));

  var easingEquations = {

    easeOutSine: function (pos) {
      return Math.sin(pos * (Math.PI / 2));
    },
    easeInOutSine: function (pos) {
      return (-0.5 * (Math.cos(Math.PI * pos) - 1));
    },
    easeInOutQuint: function (pos) {
      if ((pos /= 0.5) < 1) {
        return 0.5 * Math.pow(pos, 5);
      }
      return 0.5 * (Math.pow((pos - 2), 5) + 2);
    }
  };

  function tick() {

    currentTime += 1 / 60;

    var p = currentTime / time;
    var t = easingEquations[easing](p);

    if (p < 1) {
      requestAnimFrame(tick);
      window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));

    } else {
      window.scrollTo(0, scrollTargetY);
    }
  }

  tick();
}


/**
 *  @param {object} menu - menu selector
 */

function menuControl(menu) {

  var scrollPos = window.scrollY || document.documentElement.scrollTop,
      links     = menu.querySelectorAll('a[href^="#"]');

  for(var i = 0; i < links.length; i++) {

    var currLink   = links[i],
        refElement = document.querySelector(currLink.getAttribute('href'));

    if(refElement.offsetTop <= scrollPos && (refElement.offsetTop + refElement.clientHeight) > scrollPos) {
      currLink.classList.add('active');

    } else {
      currLink.classList.remove('active');
    }
  }
}


/**
 *  @param {object} menu     - menu selector
 *  @param {number} [speed]  - scroll speed, default value 1500
 *  @param {string} [easing] - scroll type 'easeOutSine', 'easeInOutSine' or 'easeInOutQuint', default value easeInOutQuint
 */

function animated(menu, speed, easing) {

  var i, links = menu.querySelectorAll('a[href^="#"]');

  function control(e) {

    e.preventDefault();

    var target = document.querySelector(this.hash);
    scrollToY(target.offsetTop, speed, easing);
  }

  for(i = 0; i < links.length; i++) {

    var link = links[i];
    link.addEventListener('click', control);
  }
}


/**
 *  @param {object} menu     - menu selector
 *  @param {number} [speed]  - scroll speed, default value 1500
 *  @param {string} [easing] - scroll type 'easeOutSine', 'easeInOutSine' or 'easeInOutQuint', default value easeInOutQuint
 */

function scrollSpy(menu, speed, easing) {

  animated(menu, speed, easing);

  document.addEventListener('scroll', function() {
    menuControl(menu);
  });
}