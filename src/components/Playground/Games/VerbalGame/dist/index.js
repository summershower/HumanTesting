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
function VerbalGame(_a) {
  var restart = _a.restart;
  var words = react_1.useMemo(function () {
    var wordTxt = require('@/static/words/wordsEn.txt');
    var wordsArr = wordTxt['default'].split('\r\n');
    return wordsArr;
  }, []);
  var GAMING = 'gaming';
  var RESULT = 'result';
  var _b = react_1.useState(GAMING),
    state = _b[0],
    setState = _b[1];
  var _c = react_1.useState(3),
    lifeQuantity = _c[0],
    setLifeQuantity = _c[1];
  var _d = react_1.useState(0),
    score = _d[0],
    setScore = _d[1];
  var _e = react_1.useState(''),
    currentWord = _e[0],
    setCurrentWord = _e[1];
  var _f = react_1.useState([]),
    currentWordsArr = _f[0],
    setCurrentWordsArr = _f[1];
  react_1.useEffect(function () {
    addANewWord();
  }, []);
  function addANewWord() {
    var randomIndex = Math.floor(Math.random() * 109185);
    var newWord = words[randomIndex];
    while (currentWordsArr.includes(newWord)) {
      randomIndex = Math.floor(Math.random() * 109185);
      newWord = words[randomIndex];
    }
    setCurrentWordsArr(__spreadArrays(currentWordsArr, [newWord]));
    setCurrentWord(newWord);
  }
  function selectAnOldWord() {
    var randomIndex = Math.floor(Math.random() * currentWordsArr.length);
    console.log(currentWordsArr.indexOf(currentWord), randomIndex);
    while (currentWordsArr.indexOf(currentWord) === randomIndex) {
      randomIndex = Math.floor(Math.random() * currentWordsArr.length);
    }
    setCurrentWord(currentWordsArr[randomIndex]);
  }
  function seen() {
    if (currentWordsArr.indexOf(currentWord) !== currentWordsArr.length - 1) {
      setScore(score + 1);
      next();
    } else {
      if (lifeQuantity > 1) {
        setLifeQuantity(lifeQuantity - 1);
        next();
      } else {
        setState(RESULT);
      }
    }
  }
  function haveNotSeen() {
    if (currentWordsArr.indexOf(currentWord) === currentWordsArr.length - 1) {
      setScore(score + 1);
      next();
    } else {
      if (lifeQuantity > 1) {
        setLifeQuantity(lifeQuantity - 1);
        next();
      } else {
        setState(RESULT);
      }
    }
  }
  function next() {
    if (currentWordsArr.length < 2) {
      addANewWord();
    } else {
      var randomNum = Math.random();
      if (randomNum > 0.4) {
        addANewWord();
      } else {
        selectAnOldWord();
      }
    }
  }
  function Gaming() {
    console.log(currentWordsArr);
    return React.createElement(
      'div',
      null,
      '\u751F\u547D\uFF1A',
      lifeQuantity,
      React.createElement('h1', null, currentWord),
      React.createElement('h1', null, score),
      React.createElement('button', { onClick: seen }, '\u770B\u8FC7\u4E86'),
      React.createElement(
        'button',
        { onClick: haveNotSeen },
        '\u83AB\u5F97\u770B\u8FC7',
      ),
    );
  }
  function Result() {
    return React.createElement(
      'div',
      null,
      React.createElement('h1', null, score, '\u4E2A\u5355\u8BCD'),
      React.createElement(
        'button',
        {
          onClick: function () {
            return restart();
          },
        },
        'remake',
      ),
    );
  }
  return React.createElement(
    'div',
    null,
    state === GAMING
      ? React.createElement(Gaming, null)
      : React.createElement(Result, null),
  );
}
exports['default'] = VerbalGame;
