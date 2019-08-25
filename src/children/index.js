import Children from './Children'
import ChildrenNonJSX from './ChildrenNonJSX'
import NestedChildren from './NestedChildren'

// eslint-disable-next-line import/no-webpack-loader-syntax
import ChildrenSrc from '!!raw-loader!./Children.js'
// eslint-disable-next-line import/no-webpack-loader-syntax
import ChildrenNonJSXSrc from '!!raw-loader!./ChildrenNonJSX.js'
// eslint-disable-next-line import/no-webpack-loader-syntax
import NestedChildrenSrc from '!!raw-loader!./NestedChildren.js'

export default {
  Children,
  ChildrenNonJSX,
  NestedChildren,
  ChildrenSrc,
  ChildrenNonJSXSrc,
  NestedChildrenSrc,
}
