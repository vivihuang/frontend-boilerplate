import React, { PropTypes } from 'react'

const Footer = ({ count }) => (
  <footer>
    {count} total {count === 1 ? 'item' : 'items'}.
  </footer>
)

Footer.propTypes = {
  count: PropTypes.number.isRequired
}

export default Footer
