import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__content font-geekMd-logo">
                    © {new Date().getFullYear()} GeekMD
                </div>
            </footer>
        );
    }
}

export default Footer;