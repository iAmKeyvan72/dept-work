import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footerLinks">
          <a href="/" title="Dept" className="onlyDesktop">
            <img
              src={require('../../../../assets/images/logos/Tomtom_logo_zwart.jpg')}
              alt="Dept"
            />
          </a>
          <ul className="siteLinks">
            <li>
              <a href="/work" title="work">
                Work
              </a>
            </li>
            <li>
              <a href="/work" title="work">
                Work
              </a>
            </li>
            <li>
              <a href="/work" title="work">
                Work
              </a>
            </li>
            <li>
              <a href="/work" title="work">
                Work
              </a>
            </li>
            <li>
              <a href="/work" title="work">
                Work
              </a>
            </li>
            <li>
              <a href="/work" title="work">
                Work
              </a>
            </li>
          </ul>
          <ul className="socialLinks">
            <li>
              <a href="/work" title="work">
                twitter
              </a>
            </li>
            <li>
              <a href="/work" title="work">
                twitter
              </a>
            </li>
            <li>
              <a href="/work" title="work">
                twitter
              </a>
            </li>
          </ul>
        </div>
        <div className="footerInfo">
          <ul>
            <li>Chamber of Commerce: 63464101</li>
            <li>VAT: NL 8552.47.502.B01</li>
            <li>
              <a href="#" title="Terms and conditions">
                Terms and conditions
              </a>
            </li>
          </ul>
          <p className="copyright">© 2018 Dept Agency</p>
        </div>
      </div>
      <div className="goTopContainer onlyDesktop">
        <button className="goTop">TOP</button>
      </div>
    </footer>
  );
};

export default Footer;
