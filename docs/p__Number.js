(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [4],
  {
    '+vpv': function (n, t, e) {
      n.exports = { gamesStatistics: 'gamesStatistics___30vUo' };
    },
    '9yjc': function (n, t, e) {
      n.exports = { gamesIntro: 'gamesIntro___61_5w' };
    },
    NLt9: function (n, t, e) {
      n.exports = e.p + 'static/numbermemory.e166444b.png';
    },
    PqSP: function (n, t, e) {
      'use strict';
      e.d(t, 'a', function () {
        return f;
      });
      var c = e('TEY6'),
        s = e.n(c),
        i = e('+vpv'),
        r = e.n(i),
        a = e('nKUr');
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
      var j = e('9yjc'),
        u = e.n(j);
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
    TEY6: function (n, t, e) {
      n.exports = { gamesInfo: 'gamesInfo___2z8F2' };
    },
    'f/SO': function (n, t, e) {
      'use strict';
      e.r(t),
        e.d(t, 'default', function () {
          return a;
        });
      var c = e('9ZCH'),
        s = e('PqSP'),
        i = e('0Xgo'),
        r = e('nKUr');
      function a() {
        var n = {
            title: '\u6570\u5b57\u8bb0\u5fc6',
            desc: '\u8bf7\u8bb0\u4f4f\u987a\u5e8f',
            icon: i['a'].Number,
          },
          t = {
            pic: e('NLt9'),
            desc: '\n    \u8fd9\u662f\u4e00\u4e2a\u8003\u5bdf\u4f60\u77ed\u671f\u6570\u5b57\u8bb0\u5fc6\u80fd\u529b\u7684\u6e38\u620f\u3002\n\n    \u666e\u901a\u4eba\u4e00\u822c\u800c\u8a00\u53ea\u80fd\u53ef\u9760\u5730\u8bb0\u4f4f7\u4f4d\u6570\uff0c\u4f46\u4f60\u53ef\u4ee5\u5c1d\u8bd5\u53bb\u4e86\u89e3\u4e00\u4e9b\u8bb0\u5fc6\u6280\u5de7\u548c\u65b9\u6cd5\uff0c\u7ecf\u8fc7\u8bad\u7ec3\u8fd9\u4e2a\u4e34\u65f6\u8bb0\u5fc6\u80fd\u529b\u4f1a\u6709\u663e\u8457\u63d0\u5347\u3002\n\n    \u5177\u4f53\u7684\u8bdd\u53ef\u4ee5\u81ea\u5df1\u67e5\u627e\u767e\u5ea6~\n    ',
          };
        return Object(r['jsxs'])('div', {
          children: [
            Object(r['jsx'])(c['a'], { intro: n }),
            Object(r['jsx'])(s['a'], { info: t }),
          ],
        });
      }
    },
  },
]);
