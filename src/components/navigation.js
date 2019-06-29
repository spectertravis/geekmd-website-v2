import React from 'react';
import { Link } from 'gatsby';

const Navigation = () => {
    return (
        <nav className="navigation">
            <div className="navigation__logo">
                GeekMD.IO Logo Here
            </div>
            <div className="navigation__menu">
                <ul>
                    <li className="navigation__item">
                        <Link className="navigation__link" to="/">Contact</Link>
                    </li>
                    <li className="navigation__item">
                        <Link className="navigation__link" to="/">GitHub</Link>
                    </li>
                    <li className="navigation__item">
                        <Link className="navigation__link" to="/">LinkedIn</Link>
                    </li>
                    <li className="navigation__item">
                        <Link className="navigation__link" to="/">Twitter</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
