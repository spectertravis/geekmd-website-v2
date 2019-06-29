import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__content">
                    © {new Date().getFullYear()}, Built by <a href="https://github.com/geekmdtravis">@GeekMDTravis</a> with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </div>
            </footer>
        );
    }
}

export default Footer;