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
            desc: '\u8bf7\u6309\u6570\u5b57\u987a\u5e8f\u70b9\u51fb\u65b9\u5757',
            icon: i['a'].Block,
          },
          c = {
            pic: t('Uk/V'),
            desc: '    \u8fd9\u662f\u4e00\u9879\u5de5\u4f5c\u8bb0\u5fc6\u6d4b\u8bd5\u3002\u4f60\u53ef\u80fd\u597d\u5947\u4e3a\u4ec0\u4e48\u53eb\u505a\u5927\u7329\u7329\u6d4b\u8bd5\uff0c\u5176\u5b9e\u5728\u79d1\u5b66\u7814\u7a76\u4e2d\uff0c\u9ed1\u7329\u7329\u5728\u8fd9\u9879\u6d4b\u8bd5\u4e0a\u7684\u8868\u73b0\u4e00\u76f4\u4f18\u4e8e\u4eba\u7c7b\uff0c\u8fd9\u9879\u6d4b\u8bd5\u4ea6\u56e0\u6b64\u800c\u95fb\u540d\u3002\n\n    \u6839\u636e\u7814\u7a76\u62a5\u544a\u663e\u793a\uff0c\u9ed1\u7329\u7329\u572890%\u7684\u65f6\u95f4\u91cc\u80fd\u591f\u8bb0\u4f4f9\u4e2a\u6570\u5b57\u3002\n\n    \u8fd9\u4e2a\u6e38\u620f\u662f\u8fd9\u4e2a\u6d4b\u8bd5\u7684\u4e00\u4e2a\u53d8\u4f53\uff0c\u6e38\u620f\u9700\u8981\u8bb0\u5fc6\u7684\u6570\u5b57\u4f1a\u53d8\u5f97\u8d8a\u6765\u8d8a\u591a\u3002\u4ece4\u4f4d\u6570\u5f00\u59cb\uff0c\u6bcf\u6b21\u8fc7\u5173\u589e\u52a0\u4e00\u4f4d\u6570\u3002\n\n    \u597d\u6d88\u606f\u662f\uff0c\u6bcf\u4e00\u8f6e\u4f60\u90fd\u67093\u6b21\u673a\u4f1a\u91cd\u8bd5\uff0c\u5982\u679c\u4ecd\u7136\u65e0\u6cd5\u901a\u8fc7\u7684\u8bdd\uff0c\u90a3\u4f60\u7684\u6210\u7ee9\u5c31\u6b62\u6b65\u4e8e\u6b64\u3002',
          };
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
