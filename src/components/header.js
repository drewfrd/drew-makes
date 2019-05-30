import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import SocialLink from "./social-link"


const Header = ({ siteTitle }) => (
  <header>
    <div className="card-color" style={{ position: 'relative', margin: '1rem', padding: '1rem', borderRadius: '5px'}}>
      <div>
        <h1 style={{ margin: 0, marginBottom: '.6rem', fontSize: '1.7em', letterSpacing: '.02em' }}>
          <Link
            to="/"
            style={{
              color: `rgb(45, 45, 45)`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <p style={{marginBottom: '.5rem'}}>New <span role="img" aria-label="camera">📹</span><a href="https://www.youtube.com/channel/UCAFSQk3dz9O6abgVg2WaQEg?view_as=subscriber">videos</a> every week.
        </p>
        <ul style={{
          display: 'flex',
          margin: '0',
          marginLeft: '1rem',
          padding: '0'
          }}>
            <SocialLink href="https://www.youtube.com/channel/UCAFSQk3dz9O6abgVg2WaQEg/featured?view_as=subscriber" text="YouTube" emoji={{ symbol: "🤟", label: "rock-on"}} />
            <SocialLink href="https://twitter.com/_DrewMakes" text="Twitter" emoji={{ symbol: "👋", label: "wave"}} />
        </ul>
      </div>
      
      
    
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
