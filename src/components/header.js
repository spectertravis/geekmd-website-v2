import React from "react"
import GeekMDIcon from "./../images/logos/geek_md_icon.svg"

const Header = () => (
  <header className="header">
      <div className="header__content">
          <div className="header__icon-container">
              <img className="header__icon" src={GeekMDIcon} alt="GeekMD Icon"/>
          </div>
          <div className="header__cta-text">
              <h1 className="heading-primary font-code">
                  The Future of Health Information Technology is Open Source. We are better, together.
                  <span className="header__subtext">
                      <a
                          href="https://en.wikipedia.org/wiki/HTTP/2"
                          title="Link to HTTP/2 Wiki Entry">
                          HTTP/2
                      </a>{' | '}
                      <a
                          href="https://developers.google.com/protocol-buffers/"
                          title="Link to Protocol Buffers Page">
                          Protocol Buffers
                      </a>{' | '}
                      <a
                          href="https://grpc.io/"
                          title="Link to gRPC website">
                          gRPC
                      </a>
                  </span>
              </h1>
          </div>
      </div>
  </header>
)

export default Header
