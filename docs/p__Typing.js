(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [7],
  {
    '+vpv': function (n, t, s) {
      n.exports = { gamesStatistics: 'gamesStatistics___30vUo' };
    },
    '9yjc': function (n, t, s) {
      n.exports = { gamesIntro: 'gamesIntro___61_5w' };
    },
    LL0g: function (n, t, s) {
      'use strict';
      s.r(t),
        s.d(t, 'default', function () {
          return a;
        });
      var c = s('9ZCH'),
        e = s('PqSP'),
        i = s('0Xgo'),
        r = s('nKUr');
      function a() {
        var n = {
            title: '\u8f93\u5165\u901f\u5ea6',
            desc: '\u770b\u770b\u4f60\u6253\u5b57\u6709\u591a\u5feb',
            icon: i['a'].Typing,
          },
          t = {
            pic: s('wEDs'),
            desc: '    \u8fd9\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u6253\u5b57\u901f\u5ea6\u6d4b\u8bd5\uff0c\u6d4b\u91cf\u6bcf\u5206\u949f\u5355\u8bcd\u6570\uff0c\u5373WPM(words per minute)\u3002\n\n    WPM\u7684\u6807\u51c6\u5ea6\u91cf\u662f\uff085*\u5b57\u7b26\u6570\uff09/\uff08\u6240\u7528\u65f6\u95f4\uff09\u3002\u6309\u7167\u8fd9\u4e2a\u6807\u51c6\uff0c\u201cquick brown fox\u201d\u662f15\u4e2a\u5b57\u7b26\uff0c\u5305\u62ec\u7a7a\u683c\u3002\n\n    \u8bb0\u5f55\u7684\u5206\u6570\u4e3aWPM*\u51c6\u786e\u5ea6\u3002',
          };
        return Object(r['jsxs'])('div', {
          children: [
            Object(r['jsx'])(c['a'], { intro: n }),
            Object(r['jsx'])(e['a'], { info: t }),
          ],
        });
      }
    },
    PqSP: function (n, t, s) {
      'use strict';
      s.d(t, 'a', function () {
        return p;
      });
      var c = s('TEY6'),
        e = s.n(c),
        i = s('+vpv'),
        r = s.n(i),
        a = s('nKUr');
      function o(n) {
        return Object(a['jsxs'])('div', {
          className: r.a.gamesStatistics,
          children: [
            Object(a['jsx'])('h2', { children: '\u7edf\u8ba1\u6570\u636e' }),
            Object(a['jsx'])('img', {
              src: n.pic,
              alt: '\u7edf\u8ba1\u6570\u636e',
            }),
          ],
        });
      }
      var j = s('9yjc'),
        u = s.n(j);
      function d(n) {
        return Object(a['jsxs'])('div', {
          className: u.a.gamesIntro,
          children: [
            Object(a['jsx'])('h2', {
              children: '\u5173\u4e8e\u672c\u6d4b\u8bd5',
            }),
            Object(a['jsx'])('p', { children: n.desc }),
          ],
        });
      }
      function p(n) {
        return Object(a['jsxs'])('div', {
          className: e.a.gamesInfo,
          children: [
            Object(a['jsx'])(o, { pic: n.info.pic }),
            Object(a['jsx'])(d, { desc: n.info.desc }),
          ],
        });
      }
    },
    TEY6: function (n, t, s) {
      n.exports = { gamesInfo: 'gamesInfo___2z8F2' };
    },
    wEDs: function (n, t, s) {
      n.exports = s.p + 'static/typing.a73ca0a1.png';
    },
  },
]);
