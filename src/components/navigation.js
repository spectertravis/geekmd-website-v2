import React from 'react';
import { Link } from 'gatsby';
import { GoMarkGithub, GoMail } from 'react-icons/go';
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const Navigation = () => {
    return (
        <nav className="navigation">
            <div className="navigation__container">
                <div className="navigation__logo-text">
                    <Link to="/" alt="Link to Home">
                        <span className="font-geekMd-logo">Geek</span>
                        <span className="font-geekMd-logo--accented">MD</span>
                    </Link>
                </div>
                <div className="navigation__menu">
                    <ul>
                        <li className="navigation__item">
                            <a
                                className="navigation__link"
                                href="mailto:travis@geekmd.io"
                                alt="Email Link">
                                <GoMail/>
                            </a>
                        </li>
                        <li className="navigation__item">
                            <a
                                className="navigation__link"
                                href="https://github.com/geekmdtravis"
                                alt="GeekMD GitHub Link">
                                <GoMarkGithub/>
                            </a>
                        </li>
                        <li className="navigation__item">
                            <a
                                className="navigation__link"
                                href="https://www.linkedin.com/in/travis-nesbit-953b70a4/"
                                alt="LinkedIn Profile">
                                <FaLinkedin/>
                            </a>
                        </li>
                        <li className="navigation__item">
                            <a
                                className="navigation__link"
                                href="https://twitter.com/geekmdio"
                                alt="Link to GeekMD Twitter">
                                <FaTwitter/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
