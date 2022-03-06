'use strict';
exports.__esModule = true;
var Playground_1 = require('@/components/Playground');
var GamesInfo_1 = require('@/components/GamesInfo');
var Icons_1 = require('@/components/Icons');
function Number() {
  var playgroundIntro = {
    title: '数字记忆',
    desc: '请记住顺序',
    icon: Icons_1['default'].Number,
  };
  var gamesInfo = {
    pic: require('@/static/images/statistics/numbermemory.png'),
    desc: '\n    \u8FD9\u662F\u4E00\u4E2A\u8003\u5BDF\u4F60\u77ED\u671F\u6570\u5B57\u8BB0\u5FC6\u80FD\u529B\u7684\u6E38\u620F\u3002\n\n    \u666E\u901A\u4EBA\u4E00\u822C\u800C\u8A00\u53EA\u80FD\u53EF\u9760\u5730\u8BB0\u4F4F7\u4F4D\u6570\uFF0C\u4F46\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u53BB\u4E86\u89E3\u4E00\u4E9B\u8BB0\u5FC6\u6280\u5DE7\u548C\u65B9\u6CD5\uFF0C\u7ECF\u8FC7\u8BAD\u7EC3\u8FD9\u4E2A\u4E34\u65F6\u8BB0\u5FC6\u80FD\u529B\u4F1A\u6709\u663E\u8457\u63D0\u5347\u3002\n\n    \u5177\u4F53\u7684\u8BDD\u53EF\u4EE5\u81EA\u5DF1\u67E5\u627E\u767E\u5EA6~\n    ',
  };
  return React.createElement(
    'div',
    null,
    React.createElement(Playground_1['default'], { intro: playgroundIntro }),
    React.createElement(GamesInfo_1['default'], { info: gamesInfo }),
  );
}
exports['default'] = Number;
