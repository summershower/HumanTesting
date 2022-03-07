(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [1],
  {
    '+vpv': function (n, c, t) {
      n.exports = { gamesStatistics: 'gamesStatistics___30vUo' };
    },
    '9yjc': function (n, c, t) {
      n.exports = { gamesIntro: 'gamesIntro___61_5w' };
    },
    BcKz: function (n, c, t) {
      n.exports = t.p + 'static/aimtrainer.27dd1fdf.png';
    },
    PqSP: function (n, c, t) {
      'use strict';
      t.d(c, 'a', function () {
        return f;
      });
      var s = t('TEY6'),
        e = t.n(s),
        i = t('+vpv'),
        r = t.n(i),
        a = t('nKUr');
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
      var j = t('9yjc'),
        d = t.n(j);
      function u(n) {
        return Object(a['jsxs'])('div', {
          className: d.a.gamesIntro,
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
            Object(a['jsx'])(u, { desc: n.info.desc }),
          ],
        });
      }
    },
    Purn: function (n, c, t) {
      'use strict';
      t.r(c),
        t.d(c, 'default', function () {
          return r;
        });
      var s = t('9ZCH'),
        e = t('PqSP'),
        i = t('nKUr');
      function r() {
        var n = {
          pic: t('BcKz'),
          desc: '    \u8bf7\u5c3d\u53ef\u80fd\u5feb\u901f\u51c6\u786e\u5730\u70b9\u51fb\u9776\u5b50\u3002\n\n    \u8fd9\u4e2a\u6e38\u620f\u4e3b\u8981\u6d4b\u8bd5\u53cd\u5e94\u65f6\u95f4\u548c\u624b\u773c\u534f\u8c03\u80fd\u529b\u3002\n\n    \u6bcf\u8f6e\u6d4b\u8bd5\u9700\u8981\u51fb\u4e2d30\u4e2a\u76ee\u6807\uff0c\u6d4b\u8bd5\u5b8c\u6bd5\u5c06\u5c55\u793a\u4f60\u7684\u5e73\u5747\u53cd\u5e94\u65f6\u95f4\u3002\n\n    \u8fd9\u4e2a\u6d4b\u8bd5\u7684\u5206\u6570\u80af\u5b9a\u4f1a\u6bd4\u666e\u901a\u7684\u53cd\u5e94\u65f6\u95f4\u6d4b\u8bd5\u8981\u6162\uff0c\u56e0\u4e3a\u4f60\u770b\u5230\u76ee\u6807\u540e\u8fd8\u9700\u8981\u79fb\u52a8\u5149\u6807\u8fdb\u884c\u70b9\u51fb\u3002\n\n    \u8fd9\u9879\u6d4b\u8bd5\u6682\u65f6\u53ea\u652f\u6301\u7535\u8111\u548c\u5e73\u677f\u8fdb\u884c\uff0c\u624b\u673a\u7aef\u5c06\u6682\u4e0d\u53ef\u7528\u3002\n\n    ',
        };
        return Object(i['jsxs'])('div', {
          children: [
            Object(i['jsx'])(s['a'], {}),
            Object(i['jsx'])(e['a'], { info: n }),
          ],
        });
      }
    },
    TEY6: function (n, c, t) {
      n.exports = { gamesInfo: 'gamesInfo___2z8F2' };
    },
  },
]);
