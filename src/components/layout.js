import React from 'react'
import { Link } from 'gatsby'
import Navigation from './navigation'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <Navigation />
        {children}
      </div>
    )
  }
}

export default Template
