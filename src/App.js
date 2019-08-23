import React from 'react'
import './style.css'
import Singular from './singular'
import Redux from './redux'
import Children from './children'
import Renderprops from './renderprops'

import CodeView from './controls/CodeView'
import Navigation from './controls/Navigation'

const path = [
  { src: Singular.ComplexPropsSrc, component: Singular.ComplexProps, title: 'Complex Props' },
  {
    src: Singular.SimplePropsSrc,
    component: Singular.SimpleProps,
    title: 'Simple Props',
  },
  { src: Singular.NoPropsSrc, component: Singular.NoProps, title: 'No Props' },
  { src: Singular.FunctionsSrc, component: Singular.Functions, title: 'Functions' },
  { src: Singular.UseCallbackSrc, component: Singular.UseCallback, title: 'Use Callback' },
  { src: Children.ChildrenSrc, component: Children.Children, title: 'Children' },
  { src: Children.NestedChildrenSrc, component: Children.NestedChildren, title: 'Nested Children' },
  { src: Renderprops.RenderPropsSrc, component: Renderprops.RenderProps, title: 'Render Props' },
  {
    src: Renderprops.RenderProps2Src,
    component: Renderprops.RenderProps2,
    title: 'Render Props 2',
  },
  {
    src: Renderprops.RenderProps3Src,
    component: Renderprops.RenderProps2,
    title: 'Render Props 3',
  },
  {
    src: Renderprops.RenderProps4Src,
    component: Renderprops.RenderProps2,
    title: 'Render Props 4',
  },
  { src: Redux.ReduxSrc, component: Redux.Redux, title: 'Redux' },
  { src: Redux.Redux2Src, component: Redux.Redux2, title: 'Redux 2' },
  { src: Redux.Redux3Src, component: Redux.Redux3, title: 'Redux 3' },
]

function App() {
  const [step, dispatch] = React.useReducer((state, action) => {
    if (action === 'increment') return ++state
    if (action === 'decrement') return --state
    return state
  }, 0)
  const increment = React.useCallback(() => dispatch('increment'), [dispatch])
  const decrement = React.useCallback(() => dispatch('decrement'), [dispatch])

  const { src, component: Component, title } = path[step]
  return (
    <React.Fragment>
      <div className="wrapper">
        <Navigation next={increment} previous={decrement} title={title} />
        <div className="code-viewer">
          <CodeView src={src} />
        </div>
      </div>
      <div className="grid-center">
        <div></div>
        <div className="example-wrapper">
          <Component />
        </div>
        <div></div>
      </div>
    </React.Fragment>
  )
}

export default App
