'use strict';
exports.__esModule = true;
var index_less_1 = require('./index.less');
var umi_1 = require('umi');
var Icons_1 = require('@/components/Icons');
function Topbar() {
  return React.createElement(
    'div',
    { className: index_less_1['default'].topbar },
    React.createElement(
      'div',
      { className: index_less_1['default'].container },
      React.createElement(
        umi_1.Link,
        { to: '/' },
        Icons_1['default'].Lighting(),
        '\u4EBA\u7C7B\u6781\u9650\u6D4B\u8BD5',
      ),
    ),
  );
}
exports['default'] = Topbar;
