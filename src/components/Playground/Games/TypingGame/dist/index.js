'use strict';
var __spreadArrays =
  (this && this.__spreadArrays) ||
  function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
      s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  };
exports.__esModule = true;
var index_less_1 = require('./index.less');
var react_1 = require('react');
var Icons_1 = require('@/components/Icons');
function TypingGame(_a) {
  var restart = _a.restart;
  // 设定游戏状态
  var TYPING = 'typing';
  var RESULT = 'result';
  var _b = react_1.useState(TYPING),
    state = _b[0],
    setState = _b[1];
  // 随机挑选文章
  var articles = react_1.useMemo(function () {
    return [
      'From time to time I heard some vague account of his doings: of his summons to Odessa in the case of the Trepoff murder, of his clearing up of the singular tragedy of the Atkinson brothers at Trincomalee, and finally of the mission which he had accomplished so delicately and successfully for the reigning family of Holland.',
      'It was a smart little landau which rattled up to the door of Briony Lodge. As it pulled up, one of the loafing men at the corner dashed forward to open the door in the hope of earning a copper, but was elbowed away by another loafer, who had rushed up with the same intention. A fierce quarrel broke out, which was increased by the two guardsmen, who took sides with one of the loungers, and by the scissors-grinder, who was equally hot upon the other side.',
      'But this was too much. The wolf danced about with rage and swore he would come down the chimney and eat up the little pig for his supper. But while he was climbing on to the roof the little pig made up a blazing fire and put on a big pot full of water to boil. Then, just as the wolf was coming down the chimney,the little piggy pulled off the lid, and plop! In fell the wolf into the scalding water.',
      "Giraffes are the tallest animals on Earth, and their neck is the reason why. This beautiful part of their body has many different purposes, from spotting predators to reaching the sweetest leaves, even being used to duel with other giraffes.Neck fighting can be intense, going from gently rubbing against another male to establish who's in charge, to swinging heads like a mace and hitting hard. But it's all in good sport! Giraffes will make up after most fights, rarely getting hurt in a serious way.",
      "If you've never met a moose, it's hard to picture the sheer size of these animals. They're taller than a horse,even without their giant antlers. They can weigh over 1000 Ibs, and can run as fast as 35 miles per hour. Fortunately, they're not interested in humans! Leave them alone and they'll leave you alone, munching on weeds, branches, and any plant they can find in ponds and rivers. They're excellent swimmers, and can even eat underwater without any difficulty.",
      'Indeed, apart from the nature of the investigation which my friend had on hand,there was something in his masterly grasp of a situation, and his keen, incisive reasoning, which made it a pleasure to me to study his system of work, and to follow the quick, subtle methods by which he disentangled the most inextricable mysteries. So accustomed was I to his invariable success that the very possibility of his failing had ceased to enter into my head.',
      "It's impossible to think of flamingos without picturing a bright splash of pink. But where do they get their signature color? The answer lies in their diet. The flamingo feeds mainly on shrimps and insects, scraping them from the mud with its hook-shaped beak. These can contain a pigment that gives its feathers that particular shade of pink.Their shade changes depending on what they feed on, with the American flamingo being one of the brightest and flashiest.",
      "Once upon a time there was an old mother pig who had three little pigs and not enough food to feed them.So when they were old enough, she sent them out into the world to seek their fortunes. The first little pig was very lazy. He didn't want to work at all and he built his house out of straw. The second little pig worked a little bit harder but he was somewhat lazy too and he built his house out of sticks. Then, they sang and danced and played together the rest of the day.",
      'So he huffed and he puffed and he blew the house down! The wolf was greedy and he tried to catch both pigs at once, but he was too greedy and got neither! His big jaws clamped down on nothing but air and the two little pigs scrambled away as fast as their little hooves would carry them. The wolf chased them down the lane and he almost caught them. But they made it to the brick house and slammed the door closed before the wolf could catch them.',
      "The landlady informed me that he had left the house shortly after eight o'clock in the morning. I sat down beside the fire,however,with the intention of awaiting him, however long he might be. I was already deeply interested in his inquiry, for, though it was surrounded by none of the grim and strange features which were associated with the two crimes which I have already recorded, still, the nature of the case and the exalted station of his client gave it a  character of its own.",
      'The new boy went off brushing the dust from his clothes, sobbing, snuffling, and occasionally looking back and shaking his head and threatening what he would do to Tom the "next time he caught him out." To which Tom responded with jeers, and started off in high feather, and as soon as his back was turned the new boy snatched up a stone, threw it and hit him between the shoulders and then turned tail and ran like an antelope. Tom chased the traitor home, and thus found out where he lived.',
      'The summer evenings were long. It was not dark, yet. Presently Tom checked his whistle. A stranger was before him - a boy a shade larger than himself. A newcomer of any age or either gender was an impressive curiosity in the poor little shabby village of St. Petersburg. This boy was well dressed, too well dressed on a weekday. This was simply astounding. His cap was a dainty thing, his close-buttoned blue cloth roundabout was new and natty, and so were his pantaloons.',
      'The third little pig worked hard all day and built his house with bricks. It was a sturdy house complete with a fine fireplace and chimney. It looked like it could withstand the strongest winds. The next day, a wolf happened to pass by the lane where the three little pigs lived; and he saw the straw house, and he smelled the pig inside. He thought the pig would make a mighty fine meal and his mouth began to water.',
      'To Sherlock Holmes she is always the woman. I have seldom heard him mention her under any other name. In his eyes she eclipses and predominates the whole of her gender. It was not that he felt any emotion akin to love for Irene Adler. All emotions, and that one particularly, were abhorrent to his cold, precise but admirably balanced mind. He was, I take it, the most perfect reasoning and observing machine that the world has seen, but as a lover he would have placed himself in a false position.',
      "Water. Earth. Fire. Air.Long ago, the four nations lived together in harmony. Then everything changed when the Fire Nation attacked. Only the Avatar, master of all four elements, could stop them. But when the world needed him most, he vanished. A hundred years passed and my brother and I discovered the new Avatar, an airbender named Aang, and although his airbending skills are great, he still has a lot to learn before he's ready to save anyone. But I believe Aang can save the world.",
      'Whales are not fish, and they must regularly get back to the surface to breathe. There are many types of whales, each with their own characteristics and vastly different sizes. The most famous by far is the blue whale, the largest animal to have ever lived on this planet. Longer than a tennis court, it also holds the record for the most powerful call in the animal kingdom, which is louder than a jet engine.',
      "When someone thinks of Australia, they tend to picture hot deserts and dangerous animals. But the country is also home to some of the cutest creatures on the planet. The koala is one of them, a tiny, fluffy bear that looks like it wouldn't hurt a fly. It feeds entirely on leaves, and even though it chooses plants with a lot of proteins, it's still not enough for an active lifestyle. This is why koalas sleep up to twenty hours a day. They just don't have the energy to do anything else!",
    ];
  }, []);
  var _c = react_1.useState([]),
    currentArticleArr = _c[0],
    setCurrentArticleArr = _c[1];
  react_1.useEffect(function () {
    var randomNum = Math.floor(Math.random() * articles.length);
    var str = articles[randomNum];
    setCurrentArticleArr(str.split(''));
  }, []);
  // 记录最终Wpm成绩
  var _d = react_1.useState(0),
    resultWpm = _d[0],
    setResultWpm = _d[1];
  // 输入状态函数组件
  function Typing() {
    // 控制是否聚焦到输入框
    var _a = react_1.useState(true),
      focus = _a[0],
      setFocus = _a[1];
    // 记录用户输入数据
    var _b = react_1.useState([]),
      userInputArr = _b[0],
      setUserInputArr = _b[1];
    var userInputArrRef = react_1.useRef();
    var _c = react_1.useState(0),
      correctWordsCount = _c[0],
      setCorrectWordsCount = _c[1];
    userInputArrRef.current = userInputArr;
    var correctWordsCountRef = react_1.useRef(0);
    correctWordsCountRef.current = correctWordsCount;
    var inputAreaRef = react_1.useRef(null);
    // 成绩计算和计时器
    var _d = react_1.useState(0),
      wpm = _d[0],
      setWpm = _d[1];
    var wpmRef = react_1.useRef(0);
    wpmRef.current = wpm;
    var _e = react_1.useState(0),
      passedTime = _e[0],
      setPassedTime = _e[1];
    var passedTimeRef = react_1.useRef(0);
    passedTimeRef.current = passedTime;
    var timerRef = react_1.useRef();
    react_1.useEffect(function () {
      var _a;
      // 监听全局的keydown事件，判断用户输入内容
      var keyupHandler = function (e) {
        if (!focus || !userInputArrRef.current) return;
        // 输入第一个单词开始计时
        if (!timerRef.current) {
          timerRef.current = setInterval(function () {
            var currentTime = passedTimeRef.current + 250;
            setPassedTime(currentTime);
            var wpm = Math.round(
              (correctWordsCountRef.current / currentTime) * 12000,
            );
            setWpm(wpm);
          }, 250);
        }
        if (e.code === 'Space') {
          // 防止空格导致页面滚动
          e.preventDefault();
          setUserInputArr(__spreadArrays(userInputArrRef.current, [' ']));
          // 判断输入是否正确，并计算正确输入的单词数
          if (currentArticleArr[userInputArrRef.current.length - 1] === e.key)
            setCorrectWordsCount(correctWordsCountRef.current + 1);
          if (userInputArrRef.current.length + 1 === currentArticleArr.length) {
            setState(RESULT);
            setResultWpm(wpmRef.current);
          }
        } else if (e.code === 'Backspace') {
          var tempArr = __spreadArrays(userInputArrRef.current);
          tempArr.pop();
          if (userInputArrRef.current.length) {
            setUserInputArr(tempArr);
            if (
              userInputArrRef.current[userInputArrRef.current.length - 1] ===
              currentArticleArr[userInputArrRef.current.length - 1]
            ) {
              setCorrectWordsCount(correctWordsCountRef.current - 1);
            }
          }
        } else if (e.key.length === 1) {
          setUserInputArr(__spreadArrays(userInputArrRef.current, [e.key]));
          if (currentArticleArr[userInputArrRef.current.length - 1] === e.key)
            setCorrectWordsCount(correctWordsCountRef.current + 1);
          if (userInputArrRef.current.length + 1 === currentArticleArr.length) {
            setResultWpm(wpmRef.current);
            setState(RESULT);
          }
        }
      };
      // 控制是否聚焦到输入框
      function focusHandle(e) {
        e.stopPropagation();
        setFocus(true);
      }
      function defocusHandle(e) {
        console.log(e);
        setFocus(false);
      }
      document.addEventListener('keydown', keyupHandler);
      document.addEventListener('click', defocusHandle);
      (_a = inputAreaRef.current) === null || _a === void 0
        ? void 0
        : _a.addEventListener('click', focusHandle);
      // 清除计时器等副作用
      return function () {
        var _a;
        document.removeEventListener('keydown', keyupHandler);
        document.removeEventListener('click', defocusHandle);
        (_a = inputAreaRef.current) === null || _a === void 0
          ? void 0
          : _a.removeEventListener('click', focusHandle);
        timerRef.current && clearInterval(timerRef.current);
        setResultWpm(wpmRef.current);
      };
    }, []);
    // 计算每个单词的类名，追加相应样式
    function classNameComputed(index) {
      if (!userInputArrRef.current) return '';
      if (userInputArrRef.current.length === 0 && index === 0 && focus)
        return ' ' + index_less_1['default'].firstCursor;
      if (!userInputArrRef.current[index]) return '';
      var className = '';
      if (userInputArrRef.current[index] === currentArticleArr[index]) {
        className = '' + index_less_1['default'].correct;
      } else {
        className = '' + index_less_1['default'].wrong;
      }
      if (userInputArrRef.current.length - 1 === index && focus) {
        className = className + (' ' + index_less_1['default'].current);
      }
      return className;
    }
    // 格式化毫秒，转化为时分秒显示
    function timeFormat() {
      var totalS = Math.floor(passedTimeRef.current / 1000);
      var m = Math.floor(totalS / 60);
      var s = totalS % 60;
      var mt = m < 10 ? '0' + String(m) : m;
      var st = s < 10 ? '0' + String(s) : s;
      return mt + ' : ' + st;
    }
    return React.createElement(
      'div',
      { className: 'typing' },
      React.createElement('h1', null, wpm > 0 ? wpm : 0),
      React.createElement('h2', null, '\u5B57/\u6BCF\u5206\u949F'),
      React.createElement(
        'div',
        {
          className:
            index_less_1['default'].inputArea +
            ' ' +
            (focus ? index_less_1['default'].focus : ''),
          ref: inputAreaRef,
        },
        currentArticleArr.map(function (v, index) {
          return React.createElement(
            'span',
            { className: classNameComputed(index), key: index },
            v,
          );
        }),
      ),
      React.createElement(
        'p',
        { className: index_less_1['default'].time },
        timeFormat(),
      ),
    );
  }
  // 结果展示函数组件
  function Result() {
    return React.createElement(
      'div',
      { className: index_less_1['default'].result },
      Icons_1['default'].Typing(),
      React.createElement(
        'h2',
        null,
        '\u4F60\u7684\u8F93\u5165\u901F\u5EA6\u4E3A',
      ),
      React.createElement('h1', null, resultWpm > 0 ? resultWpm : 0),
      React.createElement('p', null, '\u5B57/\u5206\u949F'),
      React.createElement(
        'button',
        {
          className: 'tryAgainBtn',
          onClick: function () {
            return restart();
          },
        },
        '\u518D\u6765\u4E00\u6B21',
      ),
    );
  }
  return React.createElement(
    'div',
    { className: index_less_1['default'].playground + ' playground onlyPC' },
    state === TYPING
      ? React.createElement(Typing, null)
      : React.createElement(Result, null),
  );
}
exports['default'] = TypingGame;
