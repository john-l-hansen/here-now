import React from 'react'

import logoHereNow from '../assets/images/logo-here-now.svg'

class Header extends React.Component {
  render() {
    return (
      <section id="header">
        <div className="inner">
          <center>
            <span className="image fit logo">
              <img src={logoHereNow} alt="hereNOW logo" />
            </span>
          </center>
          {/* <span className="icon major fa-cloud"></span> */}
          <h1>
            We want to put the choice back in the <br /> hands of mental health
            clients.
          </h1>
          <p>
            We take the traditional setting of a client visit and bring it into
            the 21 st century by providing <br /> on-demand access to volunteers,
            counselors and mental health professionals.
          </p>
          <ul className="actions">
            <li>
              <a href="#one" className="button scrolly">
                Learn More
              </a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Header
