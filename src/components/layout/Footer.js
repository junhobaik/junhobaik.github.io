import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div id="Footer">
        <div className="copyright">
          <span>© 2018 Junho Baik</span>
          <a href="mailto:junhobaik@gmail.com">{`<junhobaik@gmail.com>`}</a>
        </div>
      </div>
    )
  }
}

export default Footer
