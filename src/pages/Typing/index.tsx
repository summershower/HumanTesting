import Playground from '@/components/Playground';
import GamesInfo from '@/components/GamesInfo';
import icons from '@/components/Icons';
export default function Typing() {
  const playgroundIntro = {
    title: '输入速度',
    desc: '请记住顺序',
    icon: icons.Typing,
  };
  const gamesInfo = {
    pic: require('@/static/images/statistics/typing.png'),
    desc: `    这是一个简单的打字速度测试，测量每分钟单词数，即WPM(words per minute)。\n
    WPM的标准度量是（5*字符数）/（所用时间）。按照这个标准，“quick brown fox”是15个字符，包括空格。\n
    记录的分数为WPM*准确度。`,
  };
  return (
    <div>
      <Playground intro={playgroundIntro}></Playground>
      <GamesInfo info={gamesInfo}></GamesInfo>
    </div>
  );
}
