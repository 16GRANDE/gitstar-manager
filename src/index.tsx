import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './app'

if (module && module.hot) {
  module.hot.accept()
}

ReactDOM.render(<App name="vortesnail" age={25} />, document.querySelector('#root'))
