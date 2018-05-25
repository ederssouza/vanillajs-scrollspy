/* eslint-disable */
import 'jsdom-global/register';
import { expect } from 'chai';
import VanillaScrollspy from '../src/index';

describe('vanillaScrollspy', () => {
  let scrollspy;
  let obj;
  const navbar = document.createElement('div');
  navbar.setAttribute('id', 'navbar')

  beforeEach(() => {
    scrollspy = new VanillaScrollspy();
  });

  describe('smoke tests', () => {
    it('should have scrollToY method', () => {
      expect(scrollspy.scrollToY).to.exist;
    });

    it('should have `menuControl` method', () => {
      expect(scrollspy.menuControl).to.exist;
    });

    it('should have `animated` method', () => {
      expect(scrollspy.animated).to.exist;
    });

    it('should have `init` method', () => {
      expect(scrollspy.init).to.exist;
    });

    it('should return default params when creating an instance', () => {
      scrollspy = new VanillaScrollspy(navbar);
      scrollspy.init()

      obj = { menu: navbar, speed: 2000, easing: 'easeOutSine' }
      expect(scrollspy).to.be.eql(obj);
    });

    it('should return `speed: 1000` when overwriting the `speed` param', () => {
      scrollspy = new VanillaScrollspy(navbar, 1000);
      scrollspy.init()

      obj = { menu: navbar, speed: 1000, easing: 'easeOutSine' }
      expect(scrollspy).to.be.eql(obj);
    });

    it('should return `speed: 1500` and `easing: easeInOutQuint` when overwriting the `speed` and `easing` params', () => {
      scrollspy = new VanillaScrollspy(navbar, 1500, 'easeInOutQuint');
      scrollspy.init()

      obj = { menu: navbar, speed: 1500, easing: 'easeInOutQuint' }
      expect(scrollspy).to.be.eql(obj);
    });
  });
});
