import React from 'react'
import './style.css'
import singular from './singular'
import redux from './redux'
import children from './children'
import renderprops from './renderprops'

import CodeView from './CodeView'

function App() {
  return <CodeView src={singular.ComplexPropsSrc} />
}

export default App
