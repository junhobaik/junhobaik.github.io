import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="copyright">
          <span>© 2018 Junho Baik</span>
          <a href="mailto:junhobaik@gmail.com">{`<junhobaik@gmail.com>`}</a>
        </div>
        <div className="submenu"/>
      </footer>
    )
  }
}

export default Footer
