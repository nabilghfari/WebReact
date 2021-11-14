import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscript">
                <p className="footer-subscript-heading">
                    Join チンギスカン  And Become a Watamates
                </p>
                <p className="footer-subscript-text">
                    Any Time You Wish
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Input Your Email" className="footer-input"/>
                        <Button buttonStyle='btn--outline'>
                            Subscribe!
                        </Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Watame</h2>
                        <Link to='/'>Twitter</Link>
                        <Link to='/onlywatame' target='_blank'>Youtube</Link>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Twitch</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Only Watame</h2>
                        <Link to='/about'>How She Do It</Link>
                        <Link to='/archive'>Watch Her</Link>
                        <Link to='/about'>How She Do It</Link>
                        <Link to='/archive'>Watch Her</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Watame</h2>
                        <Link to='/'>Twitter</Link>
                        <Link to='/onlywatame' target='_blank'>Youtube</Link>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Twitch</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Only Watame</h2>
                        <Link to='/about'>How She Do It</Link>
                        <Link to='/archive'>Watch Her</Link>
                        <Link to='/about'>How She Do It</Link>
                        <Link to='/archive'>Watch Her</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            WTM <i className="fab fa-neos"/>
                        </Link>
                    </div>
                    <small className="website-rights">NEROGAMA © 2021</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                            to="/"
                            target="_blank"
                            aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f"/>
                        </Link>
                        <Link className="social-icon-link youtube"
                            to="/onlywatame"
                            target="_blank"
                            aria-label="Youtube"
                        >
                            <i className="fab fa-youtube"/>
                        </Link>
                        <Link className="social-icon-link twitter"
                            to="/"
                            target="_blank"
                            aria-label="Twitter"
                        >
                            <i className="fab fa-twitter"/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
