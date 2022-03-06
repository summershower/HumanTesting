(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [6],
  {
    '+vpv': function (n, t, c) {
      n.exports = { gamesStatistics: 'gamesStatistics___30vUo' };
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
        o = c('nKUr');
      function a(n) {
        return Object(o['jsxs'])('div', {
          className: r.a.gamesStatistics,
          children: [
            Object(o['jsx'])('h2', { children: '\u7edf\u8ba1\u6570\u636e' }),
            Object(o['jsx'])('img', {
              src: n.pic,
              alt: '\u7edf\u8ba1\u6570\u636e',
            }),
          ],
        });
      }
      var j = c('9yjc'),
        u = c.n(j);
      function d(n) {
        return Object(o['jsxs'])('div', {
          className: u.a.gamesIntro,
          children: [
            Object(o['jsx'])('h2', {
              children: '\u5173\u4e8e\u672c\u6d4b\u8bd5',
            }),
            Object(o['jsx'])('p', { children: n.desc }),
          ],
        });
      }
      function f(n) {
        return Object(o['jsxs'])('div', {
          className: s.a.gamesInfo,
          children: [
            Object(o['jsx'])(a, { pic: n.info.pic }),
            Object(o['jsx'])(d, { desc: n.info.desc }),
          ],
        });
      }
    },
    TEY6: function (n, t, c) {
      n.exports = { gamesInfo: 'gamesInfo___2z8F2' };
    },
    otOY: function (n, t, c) {
      n.exports = c.p + 'static/sequencememory.5b721ca8.png';
    },
    zX8f: function (n, t, c) {
      'use strict';
      c.r(t),
        c.d(t, 'default', function () {
          return o;
        });
      var e = c('9ZCH'),
        s = c('PqSP'),
        i = c('0Xgo'),
        r = c('nKUr');
      function o() {
        var n = {
            title: '\u8fde\u7eed\u8bb0\u5fc6\u6d4b\u8bd5',
            desc: '\u8bf7\u8bb0\u4f4f\u65b9\u5757\u4eae\u8d77\u7684\u987a\u5e8f',
            icon: i['a'].Block,
          },
          t = {
            pic: c('otOY'),
            desc: '\r\n    \u8fd9\u4e2a\u6e38\u620f\u4f1a\u68c0\u6d4b\u4f60\u7684\u8fde\u7eed\u8bb0\u5fc6\u80fd\u529b\u3002\n\n    \u6e38\u620f\u5f00\u59cb\u540e\uff0c\u4f1a\u5148\u5c55\u793a\u4e00\u6b21\u65b9\u5757\u4eae\u8d77\u7684\u987a\u5e8f\uff0c\u8bf7\u8bb0\u5728\u5fc3\u4e2d\uff0c\u7136\u540e\u6309\u987a\u5e8f\u6309\u4e0b\u3002\n\n    \u968f\u7740\u5173\u5361\u589e\u957f\uff0c\u65b9\u5757\u7684\u8fde\u7eed\u4eae\u8d77\u7684\u957f\u5ea6\u4f1a\u8d8a\u6765\u8d8a\u957f\u3002\n\n    \u6309\u9519\u4efb\u4f55\u4e00\u4e2a\u65b9\u5757\u7684\u987a\u5e8f\uff0c\u6d4b\u8bd5\u5c31\u5ba3\u544a\u7ed3\u675f\u3002\n    ',
          };
        return Object(r['jsxs'])('div', {
          children: [
            Object(r['jsx'])(e['a'], { intro: n }),
            Object(r['jsx'])(s['a'], { info: t }),
          ],
        });
      }
    },
  },
]);
