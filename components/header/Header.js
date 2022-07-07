import { useRef, useEffect } from 'react'
import { Link } from 'react-scroll'
import NavLink from 'next/link'
import MobileMenu from '../MobileMenu/MobileMenu'
import { gsap } from 'gsap';


const Header = (props) => {


  function animateNavBar () {
    gsap.timeline()
      .from('.menuItem', {
        yPercent: -100,
        opacity: 0,
        stagger: 0.1,
        ease: 'back(8)',
        duration: 0.5,
        delay: 0.5
      })
      .from('.site-logo', {
        scale: 0.5,
        opacity: 0,
        duration: 0.5,
        ease: 'back(8)',
        transformOrigin: 'center'
      }, 1)
      .from('.header-right', {
        scale: 0.5,
        opacity: 0,
        duration: 0.5,
        ease: 'back(8)',
        transformOrigin: 'center'
      }, 1)
  }



  useEffect(() => {
    animateNavBar();
  }, [])



  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }

  return (
    <header id="header" className="wpo-header-style-1">
      <div className="wpo-site-header">
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                <MobileMenu />
              </div>
              <div className="col-lg-2 col-md-6 col-6">
                <div className="navbar-header">
                  <Link onClick={ ClickHandler } className="navbar-brand site-logo" to="/">
                    <img src="images/logo.png" alt="" />
                    <span>Headless</span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-8 col-md-1 col-1">
                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                  <button className="menu-close"><i className="ti-close"></i></button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li className="menu-item-has-children">
                      <a href="/" className='menuItem'>Home</a>
                    </li>
                    <li>
                      <Link className='menuItem' activeClass="active" to="about" spy={ true } smooth={ true } duration={ 500 }>
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className='menuItem' activeClass="active" to="experience" spy={ true } smooth={ true } duration={ 500 }>
                        Experience
                      </Link>
                    </li>
                    <li>
                      <Link className='menuItem' activeClass="active" to="portfolio" spy={ true } smooth={ true } duration={ 500 } onClick={ ClickHandler }>
                        Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link className='menuItem' activeClass="active" to="contact" spy={ true } smooth={ true } duration={ 500 }>
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link className='menuItem' activeClass="active" to="blog" spy={ true } smooth={ true } duration={ 500 }>
                        Blog
                      </Link>
                    </li>
                  </ul>

                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-2">
                <div className="header-right">
                  <div className="header-btn">
                    <a onClick={ ClickHandler } className="theme-btn" download="Resume Ivaylo Tsochev" href="/Resume-Ivaylo-Tsochev.pdf"
                      title="ImageName">
                      <img className="hide-img" alt="ImageName" src="images/cv.jpg" />
                      Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;