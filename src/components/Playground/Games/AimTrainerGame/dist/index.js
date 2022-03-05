'use strict';
exports.__esModule = true;
var index_less_1 = require('./index.less');
var react_1 = require('react');
var Icons_1 = require('@/components/Icons');
function AimTrainerGame() {
  var GUIDING = 'guiding';
  var GAMING = 'gaming';
  var RESULT = 'result';
  var _a = react_1.useState(GUIDING),
    state = _a[0],
    setState = _a[1];
  var _b = react_1.useState(30),
    hitCount = _b[0],
    setHitCount = _b[1];
  var _c = react_1.useState(0),
    score = _c[0],
    setScore = _c[1];
  var battlefieldRef = react_1.useRef(null);
  var _d = react_1.useState(0),
    startTimestramp = _d[0],
    setStartTimestramp = _d[1];
  var audioRef = react_1.useRef(null);
  // 创建随机坐标
  var _e = react_1.useState(0),
    x = _e[0],
    setX = _e[1];
  var _f = react_1.useState(0),
    y = _f[0],
    setY = _f[1];
  react_1.useEffect(function () {
    createRandomPosition();
  }, []);
  function createRandomPosition() {
    if (battlefieldRef.current) {
      var _a = battlefieldRef.current.getBoundingClientRect(),
        height = _a.height,
        width = _a.width;
      var randomX = 0,
        randomY = 0;
      while (randomX < 80 || randomX > width - 80) {
        randomX = Math.round(Math.random() * width);
      }
      while (randomY < 80 || randomY > height - 80) {
        randomY = Math.round(Math.random() * height);
      }
      setX(randomX);
      setY(randomY);
    }
  }
  function start() {
    setStartTimestramp(Date.now());
    setState(GAMING);
  }
  function restart() {
    setHitCount(30);
    setState(GUIDING);
  }
  function Aim() {
    return React.createElement('div', {
      className: index_less_1['default'].aim,
      onClick: hit,
      style: { left: x, top: y },
    });
  }
  function hit() {
    if (audioRef.current) {
      audioRef.current.play();
    }
    if (hitCount >= 1) {
      setHitCount(hitCount - 1);
      createRandomPosition();
    } else {
      setScore(Math.round((Date.now() - startTimestramp) / 30));
      setHitCount(hitCount - 1);
      setState(RESULT);
    }
  }
  function Guiding() {
    return React.createElement(
      'div',
      { className: index_less_1['default'].guiding },
      React.createElement('h1', null, '\u6253\u9776\u8BAD\u7EC3\u573A'),
      React.createElement(
        'div',
        {
          className: index_less_1['default'].icon,
          onClick: function () {
            state === GUIDING && start();
          },
        },
        Icons_1['default'].Aim(),
      ),
      React.createElement(
        'p',
        null,
        '\u8BF7\u7528\u6700\u5FEB\u7684\u901F\u5EA6\u51FB\u4E2D30\u4E2A\u9776\u5B50',
      ),
      React.createElement(
        'p',
        null,
        '\u70B9\u51FB\u4E0A\u65B9\u7684\u9776\u5B50\u5F00\u59CB\u6E38\u620F',
      ),
    );
  }
  function Gaming() {
    return React.createElement(
      'div',
      { className: index_less_1['default'].battlefield, ref: battlefieldRef },
      React.createElement(
        'h2',
        null,
        '\u5269\u4F59:',
        React.createElement('i', null, hitCount),
        '\u4E2A',
      ),
      React.createElement(Aim, null),
    );
  }
  function Result() {
    return React.createElement(
      'div',
      { className: index_less_1['default'].result },
      Icons_1['default'].Aim(),
      React.createElement(
        'p',
        null,
        '\u5E73\u5747\u6BCF\u4E2A\u9776\u5B50\u51FB\u4E2D\u65F6\u95F4',
      ),
      React.createElement('h1', null, score, 'ms'),
      React.createElement(
        'button',
        { className: 'tryAgainBtn', onClick: restart },
        '\u91CD\u65B0\u5F00\u59CB',
      ),
    );
  }
  function render() {
    switch (state) {
      case GUIDING:
        return React.createElement(Guiding, null);
      case GAMING:
        return React.createElement(Gaming, null);
      case RESULT:
        return React.createElement(Result, null);
      default:
        return null;
    }
  }
  return React.createElement(
    'div',
    { className: index_less_1['default'].playground + ' playground onlyPC' },
    render(),
    React.createElement('audio', {
      ref: audioRef,
      src: '/public/audios/shoot.mp3',
    }),
  );
}
exports['default'] = AimTrainerGame;
