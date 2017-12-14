
import React from 'react'
import PropTypes from 'prop-types'


const Hello = ({ name }) => {

  return (
    <div>
      <p>Hello {name}</p>
    </div>
  )
}

Label.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Hello
