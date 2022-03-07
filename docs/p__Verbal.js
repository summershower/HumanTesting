(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [8],
  {
    '+vpv': function (n, t, c) {
      n.exports = { gamesStatistics: 'gamesStatistics___30vUo' };
    },
    '7Zai': function (n, t, c) {
      'use strict';
      c.r(t),
        c.d(t, 'default', function () {
          return a;
        });
      var e = c('9ZCH'),
        s = c('PqSP'),
        i = c('0Xgo'),
        r = c('nKUr');
      function a() {
        var n = {
            title: '\u5355\u8bcd\u8bb0\u5fc6',
            desc: '\u5c4f\u5e55\u4f1a\u4f9d\u6b21\u5c55\u793a\u5355\u8bcd\uff0c\u8bf7\u9009\u62e9\u672c\u8f6e\u662f\u5426\u51fa\u73b0\u8fc7\u8fd9\u4e2a\u5355\u8bcd',
            icon: i['a'].Number,
          },
          t = {
            pic: c('TIrG'),
            desc: '    \u8fd9\u4e2a\u6d4b\u8bd5\u4e3b\u8981\u662f\u8003\u5bdf\u4f60\u5728\u77ed\u65f6\u95f4\u5185\u80fd\u8bb0\u4f4f\u591a\u5c11\u4e2a\u5355\u8bcd\u3002\n\n    \u5c4f\u5e55\u4f1a\u4f9d\u6b21\u5c55\u793a\u4e00\u4e2a\u5355\u8bcd\uff0c\u4f60\u53ea\u9700\u8981\u544a\u8bc9\u7a0b\u5e8f\u8fd9\u4e2a\u5355\u8bcd\u662f\u5426\u51fa\u73b0\u8fc7\u5373\u53ef\u3002\n\n    \u4f60\u9700\u8981\u8bb0\u4f4f\u7684\u5355\u8bcd\u6570\u91cf\u4f1a\u4e0d\u65ad\u589e\u52a0\u3002\u6bcf\u8f6e\u6d4b\u8bd5\u4f60\u67093\u6b21\u72af\u9519\u7684\u673a\u4f1a\uff0c\u8bf7\u5c3d\u53ef\u80fd\u52aa\u529b\u5730\u8bb0\u5fc6\u5427\u3002\n\n    \u6700\u7ec8\u7684\u5206\u6570\u53d6\u51b3\u4e8e\u672c\u8f6e\u6d4b\u8bd5\u4e2d\u4e00\u5171\u51fa\u73b0\u4e86\u591a\u5c11\u4e2a\u5355\u8bcd\u3002',
          };
        return Object(r['jsxs'])('div', {
          children: [
            Object(r['jsx'])(e['a'], { intro: n }),
            Object(r['jsx'])(s['a'], { info: t }),
          ],
        });
      }
    },
    '9yjc': function (n, t, c) {
      n.exports = { gamesIntro: 'gamesIntro___61_5w' };
    },
    PqSP: function (n, t, c) {
      'use strict';
      c.d(t, 'a', function () {
        return f;
      });
      var e = c('TEY6'),
        s = c.n(e),
        i = c('+vpv'),
        r = c.n(i),
        a = c('nKUr');
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
      var j = c('9yjc'),
        u = c.n(j);
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
      function f(n) {
        return Object(a['jsxs'])('div', {
          className: s.a.gamesInfo,
          children: [
            Object(a['jsx'])(o, { pic: n.info.pic }),
            Object(a['jsx'])(d, { desc: n.info.desc }),
          ],
        });
      }
    },
    TEY6: function (n, t, c) {
      n.exports = { gamesInfo: 'gamesInfo___2z8F2' };
    },
    TIrG: function (n, t, c) {
      n.exports = c.p + 'static/verbal.6e34ffb4.png';
    },
  },
]);
