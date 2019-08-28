import Ticks from './Ticks'
import TicksMemo from './TicksMemo'
import OnClick from './OnClick'

// eslint-disable-next-line import/no-webpack-loader-syntax
import TicksSrc from '!!raw-loader!./Ticks.js'
// eslint-disable-next-line import/no-webpack-loader-syntax
import TicksMemoSrc from '!!raw-loader!./TicksMemo.js'
// eslint-disable-next-line import/no-webpack-loader-syntax
import OnClickSrc from '!!raw-loader!./OnClick.js'

export default {
  Ticks,
  TicksMemo,
  OnClick,
  TicksSrc,
  TicksMemoSrc,
  OnClickSrc,
}
