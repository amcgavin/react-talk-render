import Ticks from './Ticks'
import TicksMemo from './TicksMemo'
import OnClick from './OnClick'
import OnClickGood from './OnClickGood'

// eslint-disable-next-line import/no-webpack-loader-syntax
import TicksSrc from '!!raw-loader!./Ticks.js'
// eslint-disable-next-line import/no-webpack-loader-syntax
import TicksMemoSrc from '!!raw-loader!./TicksMemo.js'
// eslint-disable-next-line import/no-webpack-loader-syntax
import OnClickSrc from '!!raw-loader!./OnClick.js'
// eslint-disable-next-line import/no-webpack-loader-syntax
import OnClickGoodSrc from '!!raw-loader!./OnClickGood.js'

export default {
  Ticks,
  TicksMemo,
  OnClick,
  OnClickGood,
  TicksSrc,
  TicksMemoSrc,
  OnClickSrc,
  OnClickGoodSrc,
}
