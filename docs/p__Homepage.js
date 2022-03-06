(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [3],
  {
    cK1G: function (i, n, t) {
      'use strict';
      t.r(n),
        t.d(n, 'default', function () {
          return b;
        });
      var e = t('9ZCH'),
        c = t('jvWd'),
        r = t.n(c),
        o = t('55Ip'),
        l = t('0Xgo'),
        a = t('nKUr');
      function s() {
        var i = [
          {
            icon: 'Lighting',
            title: '\u53cd\u5e94\u65f6\u95f4',
            intro: '\u6d4b\u8bd5\u4f60\u7684\u53cd\u5e94\u901f\u5ea6',
            link: '/reactiontime',
          },
          {
            icon: 'Block',
            title: '\u8fde\u7eed\u8bb0\u5fc6',
            intro:
              '\u8bb0\u4f4f\u4e00\u4e32\u9010\u6e10\u589e\u957f\u7684\u65b9\u5757\u987a\u5e8f',
            link: '/sequencememory',
          },
          {
            icon: 'Aim',
            title: '\u6253\u9776\u8bad\u7ec3\u573a',
            intro: '\u6d4b\u8bd5\u4f60\u6253\u9776\u7684\u901f\u5ea6',
            link: '/aimtrainer',
          },
          {
            icon: 'Number',
            title: '\u6570\u5b57\u8bb0\u5fc6',
            intro:
              '\u770b\u770b\u4f60\u80fd\u8bb0\u4f4f\u591a\u957f\u7684\u6570\u5b57',
            link: '/number',
          },
          {
            icon: 'Verbal',
            title: '\u5355\u8bcd\u8bb0\u5fc6',
            intro:
              '\u6d4b\u8bd5\u77ed\u671f\u7684\u80cc\u5355\u8bcd\u80fd\u529b',
            link: '/verbal',
          },
          {
            icon: 'Chimp',
            title: '\u9ed1\u7329\u7329\u6d4b\u8bd5',
            intro:
              '\u4e0d\u4f1a\u6709\u4eba\u6bd4\u5927\u7329\u7329\u8fd8\u7b28\u5427\uff1f',
            link: '/chimp',
          },
          {
            icon: 'Block',
            title: '\u89c6\u89c9\u6682\u7559\u6d4b\u8bd5',
            intro:
              '\u6d4b\u8bd5\u77ed\u671f\u7684\u89c6\u89c9\u6b8b\u7559\u8bb0\u5fc6\u80fd\u529b',
            link: '/visualmemory',
          },
          {
            icon: 'Typing',
            title: '\u8f93\u5165\u6d4b\u8bd5',
            intro:
              '\u6d4b\u8bd5\u6bcf\u5206\u949f\u7684\u8f93\u5165\u901f\u5ea6',
            link: '/typing',
          },
        ];
        return Object(a['jsx'])('div', {
          className: r.a.cubes,
          children: i.map((i) =>
            Object(a['jsxs'])(
              o['a'],
              {
                to: i.link,
                className: r.a.eachCube,
                children: [
                  l['a'][i.icon](),
                  Object(a['jsx'])('h2', { children: i.title }),
                  Object(a['jsx'])('p', { children: i.intro }),
                ],
              },
              i.title,
            ),
          ),
        });
      }
      var u = t('s2Hx');
      function b() {
        var i = {
          title: '\u4eba\u7c7b\u6781\u9650\u6d4b\u8bd5',
          desc: '\u901a\u8fc7\u76ca\u667a\u6e38\u620f\u6765\u6d4b\u8bd5\u4f60\u5927\u8111\u7684\u6781\u9650\u6f5c\u529b\uff01',
          link: '/reactiontime',
          icon: u['a'].HugeLighting,
        };
        return Object(a['jsxs'])('div', {
          children: [
            Object(a['jsx'])(e['a'], { intro: i }),
            Object(a['jsx'])(s, {}),
          ],
        });
      }
    },
    jvWd: function (i, n, t) {
      i.exports = { cubes: 'cubes___2a-uF', eachCube: 'eachCube___2mPCg' };
    },
  },
]);
