(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [12],
  {
    '0WYC': function (r, n, e) {
      'use strict';
      e.r(n),
        e.d(n, 'default', function () {
          return t;
        });
      var s = e('tJVT'),
        i = e('q1tI'),
        a = e('nKUr');
      function t(r) {
        var n = r.restart,
          t = Object(i['useMemo'])(() => {
            var r = e('LQTp'),
              n = r.default.split('\r\n');
            return n;
          }, []),
          o = 'gaming',
          l = 'result',
          c = Object(i['useState'])(o),
          d = Object(s['a'])(c, 2),
          u = d[0],
          g = d[1],
          p = Object(i['useState'])(3),
          m = Object(s['a'])(p, 2),
          h = m[0],
          b = m[1],
          y = Object(i['useState'])(0),
          f = Object(s['a'])(y, 2),
          v = f[0],
          k = f[1],
          w = Object(i['useState'])(''),
          z = Object(s['a'])(w, 2),
          x = z[0],
          j = z[1],
          q = Object(i['useState'])([]),
          O = Object(s['a'])(q, 2),
          M = O[0],
          S = O[1];
        function C() {
          var r = Math.floor(109185 * Math.random()),
            n = t[r];
          while (M.includes(n))
            (r = Math.floor(109185 * Math.random())), (n = t[r]);
          S([...M, n]), j(n);
        }
        function J() {
          var r = Math.floor(Math.random() * M.length);
          console.log(M.indexOf(x), r);
          while (M.indexOf(x) === r) r = Math.floor(Math.random() * M.length);
          j(M[r]);
        }
        function T() {
          M.indexOf(x) !== M.length - 1
            ? (k(v + 1), Q())
            : h > 1
            ? (b(h - 1), Q())
            : g(l);
        }
        function L() {
          M.indexOf(x) === M.length - 1
            ? (k(v + 1), Q())
            : h > 1
            ? (b(h - 1), Q())
            : g(l);
        }
        function Q() {
          if (M.length < 2) C();
          else {
            var r = Math.random();
            r > 0.4 ? C() : J();
          }
        }
        function E() {
          return (
            console.log(M),
            Object(a['jsxs'])('div', {
              children: [
                '\u751f\u547d\uff1a',
                h,
                Object(a['jsx'])('h1', { children: x }),
                Object(a['jsx'])('h1', { children: v }),
                Object(a['jsx'])('button', {
                  onClick: T,
                  children: '\u770b\u8fc7\u4e86',
                }),
                Object(a['jsx'])('button', {
                  onClick: L,
                  children: '\u83ab\u5f97\u770b\u8fc7',
                }),
              ],
            })
          );
        }
        function I() {
          return Object(a['jsxs'])('div', {
            children: [
              Object(a['jsxs'])('h1', { children: [v, '\u4e2a\u5355\u8bcd'] }),
              Object(a['jsx'])('button', {
                onClick: () => n(),
                children: 'remake',
              }),
            ],
          });
        }
        return (
          Object(i['useEffect'])(() => {
            C();
          }, []),
          Object(a['jsx'])('div', {
            children:
              u === o ? Object(a['jsx'])(E, {}) : Object(a['jsx'])(I, {}),
          })
        );
      }
    },
    LQTp: function (r, n, e) {
      'use strict';
      e.r(n),
        (n['default'] =
    },
  },
]);