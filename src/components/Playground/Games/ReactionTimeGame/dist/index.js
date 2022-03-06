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
var react_1 = require('react');
var index_less_1 = require('./index.less');
var icons_1 = require('@/components/icons');
function ReactionTimeGame() {
  // 设定游戏状态常量
  var GUIDING = 'guiding';
  var WAITING = 'waiting';
  var COUNTDOWN = 'countdown';
  var SUCCESS = 'success';
  var FAILED = 'failed';
  var OVERTIME = 'overtime';
  var FINISHED = 'finished';
  var _a = react_1.useState(GUIDING),
    state = _a[0],
    setState = _a[1];
  // 设定背景颜色
  var BLUE = 'var(--themeBlue)';
  var GREEN = 'rgb(75,219,109)';
  var RED = 'rgb(206,38,54)';
  var _b = react_1.useState(BLUE),
    bgColor = _b[0],
    setBgColor = _b[1];
  // 设定计时器
  var timerRef = react_1.useRef();
  var overTimerRef = react_1.useRef();
  var _c = react_1.useState(false),
    countState = _c[0],
    setCountState = _c[1];
  var _d = react_1.useState(0),
    startTimestramp = _d[0],
    setStartTimestramp = _d[1];
  var _e = react_1.useState(0),
    currentScore = _e[0],
    setCurrentScore = _e[1];
  var _f = react_1.useState(1),
    times = _f[0],
    setTimes = _f[1];
  var _g = react_1.useState([]),
    scoresRecord = _g[0],
    setScoresRecord = _g[1];
  function createRandomSeconds() {
    var r = Math.random() * 10000;
    if (r < 3000) r = r + 2000;
    else if (r > 6000) r = r - 2000;
    return Math.round(r);
  }
  function startCount() {
    var seconds = createRandomSeconds();
    timerRef.current = setTimeout(function () {
      setCountState(true);
      startOvertimer();
      setBgColor(GREEN);
      setState(COUNTDOWN);
    }, seconds);
    setBgColor(RED);
  }
  // 当页面渲染成绿色后才开始计算时间
  react_1.useEffect(function () {
    var now = Date.now();
    if (
      bgColor === GREEN &&
      countState &&
      state === COUNTDOWN &&
      startTimestramp === 0
    ) {
      setStartTimestramp(now);
    }
  });
  function startOvertimer() {
    overTimerRef.current = setTimeout(function () {
      resetCount();
      setBgColor(BLUE);
      setState(OVERTIME);
    }, 3000);
  }
  function resetCount() {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (overTimerRef.current) clearTimeout(overTimerRef.current);
    setBgColor(BLUE);
    setCountState(false);
    setStartTimestramp(0);
    setCurrentScore(0);
  }
  // 进行成绩判定
  function judge() {
    var score = Date.now() - startTimestramp;
    if (countState) {
      setTimes(times + 1);
      setCurrentScore(score);
      setScoresRecord(__spreadArrays(scoresRecord, [score]));
      if (overTimerRef.current) clearTimeout(overTimerRef.current);
      setBgColor(BLUE);
      setState(SUCCESS);
    } else {
      resetCount();
      setBgColor(BLUE);
      setState(FAILED);
    }
    if (times === 5) {
      setTimes(1);
      setBgColor(BLUE);
      setState(FINISHED);
    }
  }
  //  点击屏幕
  function handle() {
    switch (state) {
      case GUIDING:
        startCount();
        setState(WAITING);
        break;
      case WAITING:
        judge();
        break;
      case COUNTDOWN:
        judge();
        break;
      case SUCCESS:
        resetCount();
        setState(WAITING);
        startCount();
        break;
      case OVERTIME:
        resetCount();
        startCount();
        setState(WAITING);
        break;
      case FAILED:
        resetCount();
        startCount();
        setState(WAITING);
        break;
      case FINISHED:
        break;
      default:
        break;
    }
  }
  // 获取最终成绩
  function getAveragedScore() {
    var sum = scoresRecord.reduce(function (total, current) {
      return total + current;
    }, 0);
    return Math.round(sum / 5);
  }
  function restart() {
    setScoresRecord([]);
    resetCount();
    setState(GUIDING);
    setBgColor(BLUE);
  }
  // 各个状态的函数组件
  function Guide() {
    return React.createElement(
      'div',
      { className: index_less_1['default'].guide },
      icons_1['default'].HugeLighting(),
      React.createElement(
        'h1',
        { className: index_less_1['default'].title },
        '\u53CD\u5E94\u65F6\u95F4\u6D4B\u8BD5 ',
      ),
      React.createElement(
        'p',
        { className: index_less_1['default'].intro },
        '\u5F53\u5C4F\u5E55\u7531\u7EA2\u8272\u53D8\u6210\u7EFF\u8272\u65F6\uFF0C\u8BF7\u7528\u6700\u5FEB\u7684\u901F\u5EA6\u6309\u4E0B\u5C4F\u5E55\u3002',
      ),
      React.createElement(
        'p',
        { className: index_less_1['default'].startIntro },
        '\u6309\u4E0B\u4EFB\u610F\u4F4D\u7F6E\u5F00\u59CB\u6E38\u620F',
      ),
    );
  }
  function Waiting() {
    return React.createElement(
      'div',
      { className: index_less_1['default'].waiting },
      React.createElement(
        'p',
        { className: index_less_1['default'].intro },
        '......',
      ),
      React.createElement(
        'p',
        { className: index_less_1['default'].intro },
        '\u8BF7\u7B49\u5F85\u5C4F\u5E55\u53D8\u7EFF\u8272',
      ),
    );
  }
  function Countdown() {
    return React.createElement(
      'div',
      { className: index_less_1['default'].countdown },
      React.createElement(
        'p',
        { className: index_less_1['default'].intro },
        '......',
      ),
      React.createElement(
        'p',
        { className: index_less_1['default'].intro },
        '\u8BF7\u70B9\u51FB\uFF01',
      ),
    );
  }
  function Success() {
    return React.createElement(
      'div',
      { className: index_less_1['default'].success },
      icons_1['default'].Clock(),
      React.createElement(
        'p',
        { className: index_less_1['default'].score },
        currentScore,
        'ms',
      ),
      React.createElement(
        'p',
        { className: index_less_1['default'].startIntro },
        '\u6309\u4E0B\u4EFB\u610F\u4F4D\u7F6E\u7EE7\u7EED',
      ),
    );
  }
  function Failed() {
    return React.createElement(
      'div',
      { className: index_less_1['default'].failed },
      React.createElement(
        'p',
        { className: index_less_1['default'].intro },
        '\u592A\u5FEB\u4E86\uFF01\u8FD8\u6CA1\u53D8\u8272\u5462',
      ),
      React.createElement(
        'p',
        { className: index_less_1['default'].startIntro },
        '\u6309\u4E0B\u4EFB\u610F\u4F4D\u7F6E\u91CD\u8BD5',
      ),
    );
  }
  function Overtime() {
    return React.createElement(
      'div',
      { className: index_less_1['default'].overtime },
      React.createElement(
        'p',
        { className: index_less_1['default'].intro },
        '\u8D85\u65F6\u4E86\u54E6\uFF0C\u8BF7\u96C6\u4E2D\u7CBE\u795E',
      ),
      React.createElement(
        'p',
        { className: index_less_1['default'].startIntro },
        '\u6309\u4E0B\u4EFB\u610F\u4F4D\u7F6E\u91CD\u8BD5',
      ),
    );
  }
  function Finished() {
    return React.createElement(
      'div',
      { className: index_less_1['default'].finished, onClick: restart },
      icons_1['default'].Lighting(),
      React.createElement(
        'h2',
        null,
        '\u4F60\u7684\u53CD\u5E94\u65F6\u95F4\u4E3A\uFF1A',
      ),
      React.createElement('h1', null, getAveragedScore(), 'ms'),
      React.createElement(
        'p',
        null,
        '\u6309\u4E0B\u4EFB\u610F\u4F4D\u7F6E\u91CD\u65B0\u6D4B\u8BD5',
      ),
    );
  }
  var stateRender = function () {
    switch (state) {
      case GUIDING:
        return React.createElement(Guide, null);
        break;
      case WAITING:
        return React.createElement(Waiting, null);
        break;
      case COUNTDOWN:
        return React.createElement(Countdown, null);
        break;
      case SUCCESS:
        return React.createElement(Success, null);
        break;
      case FAILED:
        return React.createElement(Failed, null);
        break;
      case OVERTIME:
        return React.createElement(Overtime, null);
        break;
      case FINISHED:
        return React.createElement(Finished, null);
        break;
      default:
        return null;
        break;
    }
  };
  return React.createElement(
    'div',
    {
      className: index_less_1['default'].playground + ' playground',
      style: { backgroundColor: bgColor },
      onClick: handle,
    },
    stateRender(),
  );
}
exports['default'] = ReactionTimeGame;
