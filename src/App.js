import React from 'react'
import './style.css'
import singular from './singular'
import redux from './redux'
import children from './children'
import renderprops from './renderprops'

import CodeView from './CodeView'

function App() {
  return (
    <div className="wrapper">
      <div className="code-viewer">
        <CodeView src={redux.Redux2Src} />
      </div>
    </div>
  )
}

export default App
