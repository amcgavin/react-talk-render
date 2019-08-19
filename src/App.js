import React from 'react'
import './style.css'
import Singular from './singular'
import Redux from './redux'
import Children from './children'
import Renderprops from './renderprops'

import CodeView from './CodeView'

function App() {
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="code-viewer">
          <CodeView src={Redux.Redux2Src} />
        </div>
      </div>
      <div>
      <div className="example-wrapper">
        <Redux.Redux2 />
      </div>
      </div>
    </React.Fragment>
  )
}

export default App
