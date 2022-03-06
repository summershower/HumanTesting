'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
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
var icons_1 = require('@/components/icons');
function VisualMemoryGame(_a) {
  var restart = _a.restart;
  // 设置游戏状态
  var GAMING = 'gaming';
  var RESULT = 'result';
  var _b = react_1.useState(GAMING),
    state = _b[0],
    setState = _b[1];
  // 计算盒子行列数相关数据
  var _c = react_1.useState(3),
    n = _c[0],
    setN = _c[1];
  var _d = react_1.useState(3),
    boxQuantity = _d[0],
    setBoxQuantity = _d[1];
  var _e = react_1.useState(4),
    maxBoxQuantity = _e[0],
    setMaxBoxQuantity = _e[1];
  var _f = react_1.useState(3),
    diffValue = _f[0],
    setDiffValue = _f[1];
  var _g = react_1.useState([0, 0, 0]),
    addDiffTimesRecord = _g[0],
    setAddDiffTimesRecord = _g[1];
  // 生命值和当前关卡相关信息
  var _h = react_1.useState(0),
    failedQuantity = _h[0],
    setFailedQuantity = _h[1];
  var _j = react_1.useState(3),
    lifeQuantity = _j[0],
    setLifeQuantity = _j[1];
  var _k = react_1.useState([]),
    userClickedArr = _k[0],
    setUserClickedArr = _k[1];
  var _l = react_1.useState([]),
    userClickedRightArr = _l[0],
    setUserClickedRightArr = _l[1];
  var _m = react_1.useState(false),
    isAllowedHandle = _m[0],
    setIsAllowedHandle = _m[1];
  var _o = react_1.useState([]),
    randomNumberArr = _o[0],
    setRandomNumberArr = _o[1];
  var revealSoundRef = react_1.useRef(null);
  var backSoundRef = react_1.useRef(null);
  var boopSoundRef = react_1.useRef(null);
  function handleClick(index) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!isAllowedHandle) return [2 /*return*/, highlight(index)];
            if (userClickedArr.includes(index)) return [2 /*return*/];
            if (!randomNumberArr.includes(index)) return [3 /*break*/, 4];
            if (!(userClickedRightArr.length === boxQuantity - 1))
              return [3 /*break*/, 2];
            whiteGlitter();
            return [4 /*yield*/, sleep(500)];
          case 1:
            _a.sent();
            nextLevel();
            return [3 /*break*/, 3];
          case 2:
            setUserClickedArr(__spreadArrays(userClickedArr, [index]));
            setUserClickedRightArr(
              __spreadArrays(userClickedRightArr, [index]),
            );
            _a.label = 3;
          case 3:
            return [3 /*break*/, 5];
          case 4:
            if (failedQuantity === 2) {
              if (lifeQuantity === 1) {
                setState(RESULT);
              } else {
                setLifeQuantity(lifeQuantity - 1);
                redGlitter();
                retry();
              }
            } else {
              setFailedQuantity(failedQuantity + 1);
              setUserClickedArr(__spreadArrays(userClickedArr, [index]));
            }
            _a.label = 5;
          case 5:
            return [2 /*return*/];
        }
      });
    });
  }
  var arrRef = react_1.useRef([]);
  arrRef.current = randomNumberArr;
  function showTargetBox() {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, sleep(1200)];
          case 1:
            _a.sent();
            arrRef.current &&
              arrRef.current.forEach(function (v) {
                turnover(v);
              });
            return [4 /*yield*/, sleep(200)];
          case 2:
            _a.sent();
            setIsAllowedHandle(true);
            return [2 /*return*/];
        }
      });
    });
  }
  function retry() {
    if (isAllowedHandle) setIsAllowedHandle(false);
    setFailedQuantity(0);
    setUserClickedArr([]);
    setUserClickedRightArr([]);
    createRandomNumberArr();
  }
  function nextLevel() {
    setFailedQuantity(0);
    setUserClickedArr([]);
    setUserClickedRightArr([]);
    setBoxQuantity(boxQuantity + 1);
    if (boxQuantity + 1 > maxBoxQuantity) {
      if (
        addDiffTimesRecord[addDiffTimesRecord.length - 1] ===
        addDiffTimesRecord.length - 1
      ) {
        var arr = addDiffTimesRecord;
        arr[arr.length] = 1;
        setAddDiffTimesRecord(arr);
        setDiffValue(diffValue + 2);
        setMaxBoxQuantity(maxBoxQuantity + diffValue + 2);
      } else {
        var arr = addDiffTimesRecord;
        arr[arr.length - 1] = arr[arr.length - 1] + 1;
        setAddDiffTimesRecord(arr);
        setMaxBoxQuantity(maxBoxQuantity + diffValue);
      }
      setN(n + 1);
    }
    createRandomNumberArr(boxQuantity + 1);
    if (isAllowedHandle) setIsAllowedHandle(false);
  }
  // 休眠
  function sleep(ms) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [
          2 /*return*/,
          new Promise(function (resolve) {
            setTimeout(function () {
              resolve(true);
            }, ms);
          }),
        ];
      });
    });
  }
  // 更改背景颜色
  var playgroundRef = react_1.useRef(null);
  function whiteGlitter() {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            playgroundRef.current &&
              playgroundRef.current.classList.add(
                index_less_1['default'].highlight,
              );
            return [4 /*yield*/, sleep(200)];
          case 1:
            _a.sent();
            playgroundRef.current &&
              playgroundRef.current.classList.remove(
                index_less_1['default'].highlight,
              );
            return [2 /*return*/];
        }
      });
    });
  }
  function redGlitter() {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            playgroundRef.current &&
              playgroundRef.current.classList.add(index_less_1['default'].red);
            return [4 /*yield*/, sleep(200)];
          case 1:
            _a.sent();
            playgroundRef.current &&
              playgroundRef.current.classList.remove(
                index_less_1['default'].red,
              );
            return [2 /*return*/];
        }
      });
    });
  }
  function highlight(index) {
    return __awaiter(this, void 0, void 0, function () {
      var targetBox;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, sleep(1)];
          case 1:
            _a.sent();
            targetBox = document.querySelector('#box' + index);
            if (!targetBox) return [3 /*break*/, 3];
            targetBox.classList.add(index_less_1['default'].highlight);
            return [4 /*yield*/, sleep(200)];
          case 2:
            _a.sent();
            targetBox.classList.remove(index_less_1['default'].highlight);
            _a.label = 3;
          case 3:
            return [2 /*return*/];
        }
      });
    });
  }
  function turnover(index) {
    return __awaiter(this, void 0, void 0, function () {
      var targetBox;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, sleep(1)];
          case 1:
            _a.sent();
            targetBox = document.querySelector('#box' + index);
            console.log(targetBox);
            if (!targetBox) return [3 /*break*/, 3];
            revealSoundRef.current && revealSoundRef.current.play();
            targetBox.classList.add(index_less_1['default'].turnover);
            return [4 /*yield*/, sleep(200)];
          case 2:
            _a.sent();
            targetBox.classList.remove(index_less_1['default'].turnover);
            backSoundRef.current && backSoundRef.current.play();
            _a.label = 3;
          case 3:
            return [2 /*return*/];
        }
      });
    });
  }
  function shake(index) {
    return __awaiter(this, void 0, void 0, function () {
      var targetBox;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, sleep(1)];
          case 1:
            _a.sent();
            targetBox = document.querySelector('#box' + index);
            if (!targetBox) return [3 /*break*/, 3];
            targetBox.classList.add(index_less_1['default'].highlight);
            return [4 /*yield*/, sleep(200)];
          case 2:
            _a.sent();
            targetBox.classList.remove(index_less_1['default'].highlight);
            _a.label = 3;
          case 3:
            return [2 /*return*/];
        }
      });
    });
  }
  function createRandomNumberArr(quantity) {
    if (quantity === void 0) {
      quantity = boxQuantity;
    }
    var totalIndex = n * n - 1;
    var arr = [];
    while (arr.length < quantity) {
      var randomNumber = Math.round(Math.random() * totalIndex);
      if (arr.includes(randomNumber)) {
        continue;
      } else {
        arr.push(randomNumber);
      }
    }
    setRandomNumberArr(arr);
    showTargetBox();
  }
  react_1.useEffect(function () {
    createRandomNumberArr();
  }, []);
  function classNameComputed(index) {
    return (
      index_less_1['default'].eachBox +
      ' ' +
      (userClickedArr.includes(index)
        ? randomNumberArr.includes(index)
          ? index_less_1['default'].whiteBox
          : index_less_1['default'].wrongBox
        : '') +
      ' }'
    );
  }
  function Gaming() {
    return React.createElement(
      'div',
      { style: { height: '100%', width: '100%' } },
      React.createElement(
        'div',
        { className: index_less_1['default'].gameStatus },
        '\u5F53\u524D\u5173\u5361:',
        React.createElement('i', null, boxQuantity - 2),
        '\u751F\u547D\u503C: ',
        new Array(3).fill(null).map(function (v, index) {
          return React.createElement(
            'span',
            {
              className:
                lifeQuantity > index ? index_less_1['default'].alive : '',
            },
            icons_1['default'].Heart(),
          );
        }),
      ),
      React.createElement(
        'div',
        {
          className: index_less_1['default'].box,
          style: {
            gridTemplateRows: 'repeat(' + n + ',1fr)',
            gridTemplateColumns: 'repeat(' + n + ',1fr)',
          },
        },
        new Array(n * n).fill(null).map(function (v, index) {
          return React.createElement('div', {
            className: classNameComputed(index),
            key: index,
            id: 'box' + index,
            onClick: function () {
              return handleClick(index);
            },
          });
        }),
      ),
    );
  }
  function Result() {
    return React.createElement(
      'div',
      { className: index_less_1['default'].result },
      icons_1['default'].Block(),
      React.createElement('h1', null, '\u7B49\u7EA7\uFF1A', boxQuantity - 2),
      React.createElement(
        'button',
        {
          className: 'tryAgainBtn',
          onClick: function () {
            return restart();
          },
        },
        '\u518D\u6765\u4E00\u6B21',
      ),
    );
  }
  return React.createElement(
    'div',
    {
      className: index_less_1['default'].playground + ' playground',
      ref: playgroundRef,
    },
    state === GAMING
      ? React.createElement(Gaming, null)
      : React.createElement(Result, null),
    React.createElement('audio', {
      src: '/HumanTesting/audios/reveal.mp3',
      ref: revealSoundRef,
    }),
    React.createElement('audio', {
      src: '/HumanTesting/audios/back.mp3',
      ref: backSoundRef,
    }),
    React.createElement('audio', {
      src: '/HumanTesting/audios/boop.mp3',
      ref: boopSoundRef,
    }),
  );
}
exports['default'] = VisualMemoryGame;
