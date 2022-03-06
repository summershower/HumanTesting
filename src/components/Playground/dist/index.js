'use strict';
exports.__esModule = true;
var index_less_1 = require('./index.less');
var react_1 = require('react');
var umi_1 = require('umi');
var PlaygroundIntro_1 = require('@/components/Playground/PlaygroundIntro');
var ReactionTimeGame_1 = require('@/components/Playground/Games/ReactionTimeGame');
var SequenceMemoryGame_1 = require('@/components/Playground/Games/SequenceMemoryGame');
var AimTrainerGame_1 = require('@/components/Playground/Games/AimTrainerGame');
var ChimpGame_1 = require('@/components/Playground/Games/ChimpGame');
var VisualMemoryGame_1 = require('@/components/Playground/Games/VisualMemoryGame');
var NumberGame_1 = require('@/components/Playground/Games/NumberGame');
var TypingGame_1 = require('@/components/Playground/Games/TypingGame');
// import VerbalGame from '@/components/Playground/Games/VerbalGame';
var AsyncVerbalGame_1 = require('@/components/Playground/Games/AsyncVerbalGame');
function Playground(props) {
  var _a = react_1.useState(false),
    isGameStarted = _a[0],
    setIsGameStarted = _a[1];
  var pathname = umi_1.useLocation().pathname;
  var gamesRender = function () {
    if (isGameStarted || !props.intro) {
      switch (pathname) {
        case '/reactiontime':
          return React.createElement(ReactionTimeGame_1['default'], null);
        case '/sequencememory':
          return React.createElement(SequenceMemoryGame_1['default'], {
            restart: function () {
              return setIsGameStarted(false);
            },
          });
        case '/aimtrainer':
          return React.createElement(AimTrainerGame_1['default'], null);
        case '/number':
          return React.createElement(NumberGame_1['default'], {
            restart: function () {
              return setIsGameStarted(false);
            },
          });
        case '/verbal':
          return React.createElement(AsyncVerbalGame_1['default'], {
            restart: function () {
              return setIsGameStarted(false);
            },
          });
        case '/chimp':
          return React.createElement(ChimpGame_1['default'], {
            restart: function () {
              return setIsGameStarted(false);
            },
          });
        case '/visualmemory':
          return React.createElement(VisualMemoryGame_1['default'], {
            restart: function () {
              return setIsGameStarted(false);
            },
          });
        case '/typing':
          return React.createElement(TypingGame_1['default'], {
            restart: function () {
              return setIsGameStarted(false);
            },
          });
      }
    } else {
      return React.createElement(PlaygroundIntro_1['default'], {
        title: props.intro.title,
        desc: props.intro.desc,
        icon: props.intro.icon,
        link: props.intro.link || undefined,
        startGame: function () {
          return setIsGameStarted(true);
        },
      });
    }
  };
  return React.createElement(
    'div',
    {
      className: index_less_1['default'].playground,
      style: { cursor: !props.intro ? 'pointer' : 'default' },
      onClick: function () {
        !props.intro && setIsGameStarted(true);
      },
    },
    gamesRender(),
  );
}
exports['default'] = Playground;
