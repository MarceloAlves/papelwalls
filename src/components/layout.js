import React from 'react'
import PropTypes from 'prop-types'

import '../styles/default.css'

const Layout = ({ children }) => (
  <div
    style={{
      padding: '0 1rem',
    }}
  >
    <main>{children}</main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
