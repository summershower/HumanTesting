'use strict';
var __spreadArrays =
  (this && this.__spreadArrays) ||
  function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
      s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  };
exports.__esModule = true;
var index_less_1 = require('./index.less');
var react_1 = require('react');
var Icons_1 = require('@/components/Icons');
function ChimpGame(_a) {
  var restart = _a.restart;
  var GAMING = 'gaming';
  var FAILED = 'failed';
  var SUCCESS = 'success';
  var RESULT = 'result';
  var ENDING = 'ending';
  var _b = react_1.useState(GAMING),
    state = _b[0],
    setState = _b[1];
  var _c = react_1.useState(4),
    level = _c[0],
    setLevel = _c[1];
  var _d = react_1.useState(0),
    retryTimes = _d[0],
    setRetryTimes = _d[1];
  var _e = react_1.useState([]),
    sequenceArr = _e[0],
    setSequenceArr = _e[1];
  var _f = react_1.useState([]),
    userClickedArr = _f[0],
    setUserClickedArr = _f[1];
  function createRandomNumber(level) {
    var arr = [];
    console.log(level);
    while (arr.length < level) {
      var randomNumber = Math.floor(Math.random() * 40);
      if (arr.includes(randomNumber)) {
        continue;
      } else {
        arr.push(randomNumber);
      }
    }
    setSequenceArr(arr);
  }
  react_1.useEffect(function () {
    createRandomNumber(4);
  }, []);
  function handleClick(index) {
    var seqIndex = sequenceArr.indexOf(index);
    var userClickIndex = userClickedArr.length;
    if (userClickIndex === seqIndex) {
      if (userClickIndex === sequenceArr.length - 1) {
        if (level < 38) {
          setState(SUCCESS);
        } else {
          setState(ENDING);
        }
      } else {
        setUserClickedArr(__spreadArrays(userClickedArr, [index]));
      }
    } else {
      if (retryTimes < 2) {
        setRetryTimes(retryTimes + 1);
        setState(FAILED);
      } else {
        setState(RESULT);
      }
    }
  }
  function retry() {
    setUserClickedArr([]);
    createRandomNumber(level);
    setState(GAMING);
  }
  function nextLevel() {
    setRetryTimes(0);
    setUserClickedArr([]);
    setLevel(level + 1);
    createRandomNumber(level + 1);
    setState(GAMING);
  }
  function classNameComputed(index) {
    if (level === 4) {
      return (
        index_less_1['default'].eachBox +
        ' ' +
        (sequenceArr.includes(index) &&
          !userClickedArr.includes(index) &&
          index_less_1['default'].shownBox) +
        ' '
      );
    } else {
      if (userClickedArr.length) {
        return (
          index_less_1['default'].eachBox +
          ' ' +
          (sequenceArr.includes(index) &&
            !userClickedArr.includes(index) &&
            index_less_1['default'].whiteBox)
        );
      } else {
        return (
          index_less_1['default'].eachBox +
          ' ' +
          (sequenceArr.includes(index) && index_less_1['default'].shownBox)
        );
      }
    }
  }
  function boxContentComputed(index) {
    return (
      '' +
      (sequenceArr.indexOf(index) >= 0 ? sequenceArr.indexOf(index) + 1 : '')
    );
  }
  function Success() {
    return React.createElement(
      'div',
      { className: index_less_1['default'].success },
      React.createElement('h2', null, '\u6570\u91CF\uFF1A'),
      React.createElement('h1', null, level),
      React.createElement('h2', null, '\u751F\u547D\u503C\uFF1A'),
      React.createElement('h2', null, ' ', 3 - retryTimes, ' / 3'),
      React.createElement(
        'button',
        { className: 'continueBtn', onClick: nextLevel },
        '\u4E0B\u4E00\u5173',
      ),
    );
  }
  function Failed() {
    return React.createElement(
      'div',
      { className: index_less_1['default'].failed },
      React.createElement('h2', null, '\u6570\u91CF\uFF1A'),
      React.createElement('h1', null, level),
      React.createElement('h2', null, '\u751F\u547D\u503C\uFF1A'),
      React.createElement('h2', null, ' ', 3 - retryTimes, ' / 3'),
      React.createElement(
        'button',
        { className: 'tryAgainBtn', onClick: retry },
        '\u518D\u8BD5\u4E00\u6B21',
      ),
    );
  }
  function Gaming() {
    return React.createElement(
      'div',
      { className: index_less_1['default'].box },
      new Array(40).fill(null).map(function (v, index) {
        return React.createElement(
          'div',
          {
            className: classNameComputed(index),
            key: index,
            onClick: function () {
              handleClick(index);
            },
          },
          boxContentComputed(index),
        );
      }),
    );
  }
  function Result() {
    return React.createElement(
      'div',
      { className: index_less_1['default'].result },
      Icons_1['default'].Block(),
      React.createElement('h2', null, '\u6700\u7EC8\u6210\u7EE9:'),
      React.createElement('h1', null, level),
      React.createElement(
        'button',
        {
          className: 'tryAgainBtn',
          onClick: function () {
            return restart();
          },
        },
        '\u518D\u8BD5\u4E00\u6B21',
      ),
    );
  }
  function Ending() {
    return React.createElement(
      'div',
      { className: index_less_1['default'].result },
      React.createElement(
        'h1',
        null,
        '\u4F60\u5DF2\u7ECF\u5230\u8FBE\u5B87\u5B99\u5C3D\u5934',
      ),
      React.createElement(
        'button',
        {
          className: 'tryAgainBtn',
          onClick: function () {
            return restart();
          },
        },
        '\u518D\u8BD5\u4E00\u6B21\uFF1F',
      ),
    );
  }
  function render() {
    switch (state) {
      case GAMING:
        return React.createElement(Gaming, null);
      case SUCCESS:
        return React.createElement(Success, null);
      case FAILED:
        return React.createElement(Failed, null);
      case RESULT:
        return React.createElement(Result, null);
      case ENDING:
        return React.createElement(Ending, null);
      default:
        return null;
    }
  }
  return React.createElement(
    'div',
    { className: index_less_1['default'].playground + ' playground onlyPC' },
    render(),
  );
}
exports['default'] = ChimpGame;
