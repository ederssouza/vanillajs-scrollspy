import VanillaScrollspy from './index'
import { renderHTML } from '../utils/htmlMock'

const scrollToSpy = jest.fn()
window.scrollTo = scrollToSpy

describe('VanillaScrollspy', () => {
  let menu = null
  let $homeLink = null
  let $aboutLink = null

  beforeEach(() => {
    document.addEventListener = jest
      .fn()
      .mockImplementationOnce((event, callback) => {
        callback()
      })

    document.body.innerHTML = renderHTML()

    menu = document.querySelector('#navbar')
    $homeLink = document.querySelector('a[href="#home"]')
    $aboutLink = document.querySelector('a[href="#about"]')
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('should create an instance of VanillaScrollspy', () => {
    const scrollspy = VanillaScrollspy({ menu })

    scrollspy.init()

    expect(scrollToSpy).not.toHaveBeenCalled()
  })

  describe('when receiving `easing` param', () => {
    describe('and value is `easeOutSine`', () => {
      it('should call scroll event', () => {
        const scrollspy = VanillaScrollspy({
          menu,
          speed: 1000,
          easing: 'easeOutSine'
        })

        scrollspy.init()
        $homeLink.click()

        expect(scrollToSpy).toHaveBeenCalled()
        expect(document.addEventListener).toBeCalledWith(
          'scroll',
          expect.any(Function)
        )
      })
    })

    describe('and value is `easeInOutSine`', () => {
      it('should call scroll event', () => {
        const scrollspy = VanillaScrollspy({
          menu,
          speed: 1000,
          easing: 'easeInOutSine'
        })

        scrollspy.init()
        $homeLink.click()

        expect(scrollToSpy).toHaveBeenCalled()
        expect(document.addEventListener).toBeCalledWith(
          'scroll',
          expect.any(Function)
        )
      })
    })

    describe('and value is `easeInOutQuint`', () => {
      it('should call scroll event', () => {
        const scrollspy = VanillaScrollspy({
          menu,
          speed: 1000,
          easing: 'easeInOutQuint'
        })

        scrollspy.init()
        $aboutLink.click()

        expect(scrollToSpy).toHaveBeenCalled()
        expect(document.addEventListener).toBeCalledWith(
          'scroll',
          expect.any(Function)
        )
      })
    })
  })
})
