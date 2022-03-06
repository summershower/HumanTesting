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
          return r;
        });
      var c = s('9ZCH'),
        e = s('PqSP'),
        i = s('0Xgo'),
        a = s('nKUr');
      function r() {
        var n = {
            title: '\u8f93\u5165\u901f\u5ea6',
            desc: '\u8bf7\u8bb0\u4f4f\u987a\u5e8f',
            icon: i['a'].Typing,
          },
          t = {
            pic: s('wEDs'),
            desc: '\u8fd9\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u5de5\u5177\u6765\u8861\u91cf\u4f60\u7684\u53cd\u5e94\u65f6\u95f4\n\n    \u6839\u636e\u76ee\u524d\u6536\u96c6\u7684\u6570\u636e\uff0c\u5e73\u5747\uff08\u4e2d\u4f4d\u6570\uff09\u53cd\u5e94\u65f6\u95f4\u4e3a273\u6beb\u79d2\u3002\n    \n    \n    \u9664\u4e86\u6d4b\u91cf\u4f60\u7684\u53cd\u5e94\u65f6\u95f4\uff0c\u8fd9\u4e2a\u6d4b\u8bd5\u8fd8\u53d7\u5230\u4f60\u7684\u7535\u8111\u548c\u663e\u793a\u5668\u7684\u5ef6\u8fdf\u7684\u5f71\u54cd\u3002\u4f7f\u7528\u5feb\u901f\u8ba1\u7b97\u673a\u548c\u4f4e\u5ef6\u8fdf/\u9ad8\u5e27\u7387\u76d1\u89c6\u5668\u5c06\u63d0\u9ad8\u4f60\u7684\u5206\u6570\u3002\n    \n    \n    \u6b64\u6d4b\u8bd5\u4e2d\u7684\u5206\u6570\u6bd4aim trainer\u6d4b\u8bd5\u5feb\uff0c\u56e0\u4e3a\u60a8\u53ef\u4ee5\u5728\u4e0d\u79fb\u52a8\u5149\u6807\u7684\u60c5\u51b5\u4e0b\u7acb\u5373\u505a\u51fa\u53cd\u5e94\u3002\n    \n    \n    \u8fd9\u5c06\u5728\u7edf\u8ba1\u9875\u9762\u4e0a\u8fdb\u4e00\u6b65\u8be6\u7ec6\u8ba8\u8bba\u3002\u867d\u7136\u4eba\u7c7b\u7684\u5e73\u5747\u53cd\u5e94\u65f6\u95f4\u53ef\u80fd\u4f1a\u5728200-250\u6beb\u79d2\u4e4b\u95f4\uff0c\u4f46\u4f60\u7684\u7535\u8111\u53ef\u80fd\u4f1a\u589e\u52a010-50\u6beb\u79d2\u3002\u4e00\u4e9b\u73b0\u4ee3\u7535\u89c6\u52a0\u8d77\u6765\u9ad8\u8fbe150\u6beb\u79d2\uff01\n    \n    \u5982\u679c\u4f60\u613f\u610f\uff0c\u4f60\u53ef\u4ee5\u8bb0\u5f55\u4f60\u7684\u5206\u6570\uff0c\u5e76\u67e5\u770b\u4f60\u53cd\u5e94\u65f6\u95f4\u7684\u5b8c\u6574\u5386\u53f2\u8bb0\u5f55\u3002\n    \n    \u53ea\u9700\u6267\u884c\u81f3\u5c115\u6b21\u5355\u51fb\uff0c\u7136\u540e\u4fdd\u5b58\u3002',
          };
        return Object(a['jsxs'])('div', {
          children: [
            Object(a['jsx'])(c['a'], { intro: n }),
            Object(a['jsx'])(e['a'], { info: t }),
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
        a = s.n(i),
        r = s('nKUr');
      function o(n) {
        return Object(r['jsxs'])('div', {
          className: a.a.gamesStatistics,
          children: [
            Object(r['jsx'])('h2', { children: '\u7edf\u8ba1\u6570\u636e' }),
            Object(r['jsx'])('img', {
              src: n.pic,
              alt: '\u7edf\u8ba1\u6570\u636e',
            }),
          ],
        });
      }
      var j = s('9yjc'),
        u = s.n(j);
      function d(n) {
        return Object(r['jsxs'])('div', {
          className: u.a.gamesIntro,
          children: [
            Object(r['jsx'])('h2', {
              children: '\u5173\u4e8e\u672c\u6d4b\u8bd5',
            }),
            Object(r['jsx'])('p', { children: n.desc }),
          ],
        });
      }
      function p(n) {
        return Object(r['jsxs'])('div', {
          className: e.a.gamesInfo,
          children: [
            Object(r['jsx'])(o, { pic: n.info.pic }),
            Object(r['jsx'])(d, { desc: n.info.desc }),
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
