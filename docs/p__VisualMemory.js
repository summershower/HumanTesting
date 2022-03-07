(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [9],
  {
    '+vpv': function (n, c, s) {
      n.exports = { gamesStatistics: 'gamesStatistics___30vUo' };
    },
    '9yjc': function (n, c, s) {
      n.exports = { gamesIntro: 'gamesIntro___61_5w' };
    },
    PqSP: function (n, c, s) {
      'use strict';
      s.d(c, 'a', function () {
        return f;
      });
      var t = s('TEY6'),
        e = s.n(t),
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
      function f(n) {
        return Object(a['jsxs'])('div', {
          className: e.a.gamesInfo,
          children: [
            Object(a['jsx'])(o, { pic: n.info.pic }),
            Object(a['jsx'])(d, { desc: n.info.desc }),
          ],
        });
      }
    },
    TEY6: function (n, c, s) {
      n.exports = { gamesInfo: 'gamesInfo___2z8F2' };
    },
    ViU9: function (n, c, s) {
      n.exports = s.p + 'static/visualmemory.d86c68b6.png';
    },
    mL7s: function (n, c, s) {
      'use strict';
      s.r(c),
        s.d(c, 'default', function () {
          return a;
        });
      var t = s('9ZCH'),
        e = s('PqSP'),
        i = s('0Xgo'),
        r = s('nKUr');
      function a() {
        var n = {
            title: '\u77ac\u65f6\u89c6\u89c9\u8bb0\u5fc6',
            desc: '\u8bf7\u8bb0\u4f4f\u63a5\u4e0b\u6765\u4eae\u8d77\u7684\u65b9\u5757',
            icon: i['a'].Block,
          },
          c = {
            pic: s('ViU9'),
            desc: '    \u8fd9\u662f\u4e00\u4e2a\u5bf9\u77ac\u65f6\u89c6\u89c9\u6b8b\u7559\u8bb0\u5fc6\u80fd\u529b\u7684\u6d4b\u8bd5\u3002\n\n    \u6bcf\u4e00\u5173\u90fd\u4f1a\u6709\u90e8\u5206\u65b9\u5757\u8fdb\u884c\u9ad8\u4eae\u5c55\u793a\uff0c\u8bf7\u8bb0\u4f4f\u5b83\u4eec\u7684\u4f4d\u7f6e\uff0c\u7136\u540e\u91cd\u65b0\u627e\u51fa\u5b83\u4eec\u3002\n\n    \u968f\u7740\u5173\u5361\u7684\u8fdb\u884c\uff0c\u9700\u8981\u8bb0\u5fc6\u7684\u65b9\u5757\u4f1a\u8d8a\u6765\u8d8a\u591a\uff0c\u800c\u4e14\u77e9\u9635\u4e5f\u4f1a\u53d8\u5f97\u8d8a\u6765\u8d8a\u5927\u3002\n\n    \u6bcf\u4e00\u5173\u67093\u6b21\u9009\u9519\u65b9\u5757\u7684\u673a\u4f1a\uff0c\u7528\u5b8c3\u6b21\u673a\u4f1a\u5c31\u4f1a\u62631\u70b9\u751f\u547d\u503c\u3002\n\n    \u4f60\u67093\u70b9\u751f\u547d\u503c\uff0c\u90fd\u7528\u5b8c\u7684\u8bdd\u5c31\u7b97\u6e38\u620f\u7ed3\u675f\u5566\u3002',
          };
        return Object(r['jsxs'])('div', {
          children: [
            Object(r['jsx'])(t['a'], { intro: n }),
            Object(r['jsx'])(e['a'], { info: c }),
          ],
        });
      }
    },
  },
]);
