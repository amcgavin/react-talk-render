import Children from './Children'
import NestedChildren from './NestedChildren'

// eslint-disable-next-line import/no-webpack-loader-syntax
import ChildrenSrc from '!!raw-loader!./Children.js'
// eslint-disable-next-line import/no-webpack-loader-syntax
import NestedChildrenSrc from '!!raw-loader!./NestedChildren.js'

export default {
  Children,
  NestedChildren,
  ChildrenSrc,
  NestedChildrenSrc,
}
