(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [2],
  {
    '+vpv': function (n, c, t) {
      n.exports = { gamesStatistics: 'gamesStatistics___30vUo' };
    },
    '9yjc': function (n, c, t) {
      n.exports = { gamesIntro: 'gamesIntro___61_5w' };
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
    TEY6: function (n, c, t) {
      n.exports = { gamesInfo: 'gamesInfo___2z8F2' };
    },
    'Uk/V': function (n, c, t) {
      n.exports = t.p + 'static/chimp.f933dfad.png';
    },
    'rJ/3': function (n, c, t) {
      'use strict';
      t.r(c),
        t.d(c, 'default', function () {
          return a;
        });
      var s = t('9ZCH'),
        e = t('PqSP'),
        i = t('0Xgo'),
        r = t('nKUr');
      function a() {
        var n = {
            title: '\u5927\u7329\u7329\u6d4b\u8bd5',
            desc: '\u5b81\u4e0d\u4f1a\u6bd4\u5927\u7329\u7329\u8fd8\u88228\uff1f',
            icon: i['a'].Block,
          },
          c = { pic: t('Uk/V'), desc: '\u7329\u7329\u634f' };
        return Object(r['jsxs'])('div', {
          children: [
            Object(r['jsx'])(s['a'], { intro: n }),
            Object(r['jsx'])(e['a'], { info: c }),
          ],
        });
      }
    },
  },
]);
