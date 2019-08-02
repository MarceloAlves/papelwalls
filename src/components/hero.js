import React from 'react'
import PropTypes from 'prop-types'
import headerImage from '../images/header.png'
import CallToAction from './cta'

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      padding: '4rem 1rem',
    }}
  >
    <div
      style={{
        backgroundImage: `url(${headerImage})`,
        position: 'absolute',
        top: 0,
        zIndex: -5,
        height: '100vh',
        width: '100vw',
        opacity: 0.5,
      }}
    />
    <h1 style={{ textAlign: 'center' }}>Papel Walls</h1>
    <p style={{ textAlign: 'center', maxWidth: 440 }}>
      We're still working on bringing the shop up to speed. In the meantime
      sign up for our newsletter
    </p>
    <CallToAction />
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
