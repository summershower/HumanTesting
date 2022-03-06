'use strict';
exports.__esModule = true;
var index_less_1 = require('./index.less');
var umi_1 = require('umi');
var umi_2 = require('umi');
function PlaygroundIntro(props) {
  var pathname = umi_2.useLocation().pathname;
  return React.createElement(
    'div',
    {
      className:
        'playground ' +
        index_less_1['default'].container +
        ' ' +
        (pathname === '/typing' || pathname === '/chimp' ? 'onlyPC' : ''),
    },
    props.icon({}),
    React.createElement(
      'h1',
      { className: index_less_1['default'].title },
      ' ',
      props.title,
    ),
    React.createElement(
      'p',
      { className: index_less_1['default'].intro },
      props.desc,
    ),
    props.link
      ? React.createElement(
          umi_1.Link,
          { to: '/reactiontime', className: index_less_1['default'].startBtn },
          '\u7ACB\u5373\u5F00\u59CB',
        )
      : React.createElement(
          'button',
          {
            onClick: function () {
              return props.startGame && props.startGame();
            },
            className: index_less_1['default'].startBtn,
          },
          '\u7ACB\u5373\u5F00\u59CB',
        ),
  );
}
exports['default'] = PlaygroundIntro;
