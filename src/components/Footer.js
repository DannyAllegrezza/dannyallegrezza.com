import React from 'react'
import { Link } from 'gatsby'

// import logo from '../img/logo.svg'
// import facebook from '../img/social/facebook.svg'
// import instagram from '../img/social/instagram.svg'
// import twitter from '../img/social/twitter.svg'
// import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
          <div className="container">
            <div className="columns">
                <div className="column">
                    <a>Github</a>
                </div>

                <div className="column">
                    <a>LinkedIn</a>
                </div>
            </div>
          </div>
      </footer>
    )
  }
}

export default Footer
