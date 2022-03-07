import Playground from '@/components/Playground';
import GamesInfo from '@/components/GamesInfo';
import icons from '@/components/Icons';
export default function ChimpTest() {
  const playgroundIntro = {
    title: '大猩猩测试',
    desc: '请按数字顺序点击方块',
    icon: icons.Block,
  };
  const gamesInfo = {
    pic: require('@/static/images/statistics/chimp.png'),
    desc: `    这是一项工作记忆测试。你可能好奇为什么叫做大猩猩测试，其实在科学研究中，黑猩猩在这项测试上的表现一直优于人类，这项测试亦因此而闻名。\n
    根据研究报告显示，黑猩猩在90%的时间里能够记住9个数字。\n
    这个游戏是这个测试的一个变体，游戏需要记忆的数字会变得越来越多。从4位数开始，每次过关增加一位数。\n
    好消息是，每一轮你都有3次机会重试，如果仍然无法通过的话，那你的成绩就止步于此。`,
  };
  return (
    <div>
      <Playground intro={playgroundIntro}></Playground>
      <GamesInfo info={gamesInfo}></GamesInfo>
    </div>
  );
}
