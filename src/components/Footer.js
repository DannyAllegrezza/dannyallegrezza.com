import React from 'react';
//import { Link } from 'gatsby'
import github from '../img/social/github.svg';

const Footer = class extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <div>Contact</div>
                            <p>This site was generated using <a href="https://www.gatsbyjs.org/">Gatsby.js</a></p>
                        </div>

                        <div className="column is-4 social">
                            <a title="github" href="https://github.com/DannyAllegrezza">
                                <img
                                    src={github}
                                    alt="Github Profile for Danny Allegrezza"
                                    style={{ width: '1em', height: '1em' }}
                                />
                            </a>
                        </div>

                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
