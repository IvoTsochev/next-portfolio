import React from 'react'
import { Link } from 'react-scroll'
import CtaSection from '../ctaSection/ctaSection'


const SubmitHandler = (e) => {
  e.preventDefault()
}

const Footer = (props) => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="wpo-site-footer">
      <CtaSection />
      <div className="upper-footer">
        <div className="container">
          <div className="row">
            <div className="col col-lg-4 col-md-6 col-12">
              <div className="widget about-widget">
                <div className="logo widget-title">
                  <Link className="site-logo" to="/"><img
                    src="images/logo.png" alt="" />Headless</Link>
                </div>
                <p>Welcome and open yourself to your truest love this year with us! With the Release
                  Process</p>
                <div className="social-icons">
                  <ul>
                    <li>
                      <a target="_blank" href="https://www.facebook.com/Headless.Team">
                        <i className="ti-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://www.linkedin.com/in/ivaylotsochev/">
                        <i className="ti-linkedin"></i>
                      </a>
                    </li>
                    {/* <li><Link><i className="ti-twitter-alt"></i></Link></li> */ }
                    {/* <li><Link to="/"><i className="ti-pinterest"></i></Link></li> */ }
                    {/* <li><Link to="/"><i className="ti-vimeo-alt"></i></Link></li> */ }
                  </ul>
                </div>
              </div>
            </div>
            <div className="col col-lg-2 col-md-6 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>Navigation</h3>
                  
                </div>
                <ul>
                  <li><Link to="about" spy={ true } smooth={ true } duration={ 500 }>About us</Link></li>
                  <li><Link to="contact" spy={ true } smooth={ true } duration={ 500 }>Contact us</Link></li>
                  <li><Link to="portfolio" spy={ true } smooth={ true } duration={ 500 }>Projects</Link></li>
                  <li><Link to="blog" spy={ true } smooth={ true } duration={ 500 }>Recent Post</Link></li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-12">
              <div className="widget link-widget service-link-widget">
                <div className="widget-title">
                  <h3>All Services</h3>
                </div>
                <ul>
                  <li><Link to="service" spy={ true } smooth={ true } duration={ 500 }>Shopify eCommerce Store</Link></li>
                  <li><Link to="service" spy={ true } smooth={ true } duration={ 500 }>WordPress Website</Link></li>
                  <li><Link to="service" spy={ true } smooth={ true } duration={ 500 }>ReactJS/NextJS</Link></li>
                  {/* <li><Link to="service" spy={ true } smooth={ true } duration={ 500 }>Digital Marketing</Link></li> */ }
                </ul>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-12">
              <div className="widget newsletter-widget">
                <div className="widget-title">
                  <h3>Newsletter</h3>
                </div>
                <p>Subscribe to my newsletter and get notified when new article is released.</p>
                <form onSubmit={ SubmitHandler }>
                  <div className="input-1">
                    <input type="email" className="form-control" placeholder="Email Address *" required />
                  </div>
                  <div className="submit clearfix">
                    <button type="submit"><i className="ti-email"></i></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-shape">
          <svg width="1319" height="1567" viewBox="0 0 1319 1567" fill="none">
            <g filter="url(#filter0_f_39_3833)">
              <circle cx="803" cy="803" r="303" fill="#59C378" fillOpacity="0.5" />
            </g>
            <defs>
              <filter id="filter0_f_39_3833" x="0" y="0" width="1606" height="1606"
                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_3832" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="lower-footer">
        <div className="container">
          <div className="row">
            <div className="separator"></div>
            <p className="copyright">Copyright &copy; { currentYear } Headless. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
