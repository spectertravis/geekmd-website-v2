import React from "react"
import GeekMDIcon from "./../images/logos/geek_md_icon.svg"
const Header = () => (
  <header className="header">
      <div className="header__content">
          <img className="header__icon" src={GeekMDIcon} alt="GeekMD Icon"/>
          <div className="header__cta-text">
              <h1 className="heading-primary">
                  The Future of Health Care is Open Source. We are better, together.
                  <span className="header__subtext">
                      HTTP/2 | gRPC | Protocol Buffers
                  </span>
              </h1>
          </div>
      </div>
  </header>
)

export default Header
