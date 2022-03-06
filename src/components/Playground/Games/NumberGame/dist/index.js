'use strict';
exports.__esModule = true;
var index_less_1 = require('./index.less');
var react_1 = require('react');
function NumberGame(_a) {
  var restart = _a.restart;
  var SHOWING = 'showing';
  var TYPING = 'typing';
  var PASSED = 'passed';
  var FAILED = 'failed';
  var _b = react_1.useState(SHOWING),
    state = _b[0],
    setState = _b[1];
  var _c = react_1.useState(1),
    level = _c[0],
    setLevel = _c[1];
  var _d = react_1.useState(''),
    num = _d[0],
    setNum = _d[1];
  var timerRef = react_1.useRef();
  var progressFluidRef = function (node) {
    return (
      node &&
      setTimeout(function () {
        return node.classList.add(index_less_1['default'].zero);
      }, 100)
    );
  };
  var inputDomRef = react_1.useRef();
  var inputRef = function (node) {
    if (node) {
      node.focus();
      inputDomRef.current = node;
    }
  };
  function createRandomNum(length) {
    if (length === void 0) {
      length = level;
    }
    var tempNum = '';
    for (var i = 1; i <= length; i++) {
      tempNum += Math.floor(Math.random() * 10);
    }
    setNum(tempNum);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(
      function () {
        setState(TYPING);
      },
      length + 2 < 4 ? 4000 : (length + 2) * 1000,
    );
  }
  function handleKeyup(e) {
    if (e.key === 'Enter') {
      if (e.target.value === num) {
        setState(PASSED);
      } else {
        setState(FAILED);
      }
    }
  }
  function submit() {
    if (inputDomRef.current) {
      if (inputDomRef.current.value === num) {
        setState(PASSED);
      } else {
        setState(FAILED);
      }
    }
  }
  function nextLevel() {
    setLevel(level + 1);
    setState(SHOWING);
    createRandomNum(level + 1);
  }
  react_1.useEffect(function () {
    createRandomNum();
  }, []);
  react_1.useEffect(function () {
    console.log(num);
  });
  function Showing() {
    return React.createElement(
      'div',
      { className: index_less_1['default'].progress },
      React.createElement('h1', null, num),
      React.createElement(
        'div',
        { className: index_less_1['default'].progressBar },
        React.createElement('div', {
          className: index_less_1['default'].progressFluid,
          ref: progressFluidRef,
          style: {
            transition:
              'all ' + (level + 2 < 4 ? 3.8 : level + 1.8) + 's linear',
          },
        }),
      ),
    );
  }
  function Typing() {
    return React.createElement(
      'div',
      { className: index_less_1['default'].typing },
      React.createElement(
        'h1',
        null,
        '\u8BF7\u8F93\u5165\u4F60\u770B\u5230\u7684\u6570\u5B57\uFF1A',
      ),
      React.createElement(
        'h2',
        null,
        '\u53EF\u4EE5\u6309Enter\u56DE\u8F66\u952E\u63D0\u4EA4',
      ),
      React.createElement('input', {
        className: index_less_1['default'].input,
        type: 'text',
        maxLength: level,
        ref: inputRef,
        onKeyUp: handleKeyup,
      }),
      React.createElement(
        'button',
        { onClick: submit, className: index_less_1['default'].nextBtn },
        '\u63D0\u4EA4',
      ),
    );
  }
  function Passed() {
    react_1.useEffect(function () {
      var keyup = function (e) {
        if (e.key === 'Enter') nextLevel();
      };
      document.addEventListener('keyup', keyup);
      return function () {
        document.removeEventListener('keyup', keyup);
      };
    }, []);
    return React.createElement(
      'div',
      { className: index_less_1['default'].passed },
      React.createElement('h3', null, '\u6B63\u786E\u7B54\u6848\uFF1A'),
      React.createElement('h2', null, num),
      React.createElement('h3', null, '\u4F60\u7684\u7B54\u6848\uFF1A'),
      React.createElement('h2', null, num),
      React.createElement(
        'h1',
        null,
        '\u5F53\u524D\u7B49\u7EA7\uFF1A',
        num.length,
      ),
      React.createElement('button', { onClick: nextLevel }, '\u7EE7\u7EED'),
    );
  }
  function Failed() {
    return React.createElement(
      'div',
      { className: index_less_1['default'].failed },
      React.createElement('h3', null, '\u6B63\u786E\u7B54\u6848\uFF1A'),
      React.createElement('h2', null, num),
      React.createElement('h3', null, '\u4F60\u7684\u7B54\u6848\uFF1A'),
      React.createElement('h2', null, num),
      React.createElement(
        'h1',
        null,
        '\u5F53\u524D\u7B49\u7EA7\uFF1A',
        num.length,
      ),
      React.createElement(
        'button',
        {
          className: 'tryAgainBtn',
          onClick: function () {
            return restart();
          },
        },
        '\u91CD\u65B0\u5F00\u59CB',
      ),
    );
  }
  function render() {
    switch (state) {
      case SHOWING:
        return React.createElement(Showing, null);
      case TYPING:
        return React.createElement(Typing, null);
      case PASSED:
        return React.createElement(Passed, null);
      case FAILED:
        return React.createElement(Failed, null);
      default:
        return null;
    }
  }
  return React.createElement('div', { className: 'playground' }, render());
}
exports['default'] = NumberGame;
