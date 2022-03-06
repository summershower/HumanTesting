'use strict';
exports.__esModule = true;
var index_less_1 = require('./index.less');
exports['default'] = function () {
  return React.createElement(
    'div',
    { className: index_less_1['default'].loading },
    React.createElement('img', {
      src: require('@/static/images/loading.gif'),
      alt: 'loading',
    }),
    React.createElement('p', null, '\u52A0\u8F7D\u4E2D...'),
  );
};
