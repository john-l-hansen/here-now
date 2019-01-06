import React from 'react'

import logoHereNow from '../assets/images/logo-here-now.svg'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                <center><span className="image fit logo"><img src={logoHereNow} alt="hereNOW logo" /></span></center>
                    {/* <span className="icon major fa-cloud"></span> */}
                    <h1>We want to put the choice back in the <br /> hands of mental health clients.</h1>
                    <p>Accumsan feugiat mi commodo erat lorem ipsum, sed magna<br />
                    lobortis feugiat sapien sed etiam volutpat accumsan.</p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Learn More</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
