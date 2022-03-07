import Playground from '@/components/Playground';
import GamesInfo from '@/components/GamesInfo';
import icons from '@/components/Icons';
export default function Verbal() {
  const playgroundIntro = {
    title: '单词记忆',
    desc: '屏幕会依次展示单词，请选择本轮是否出现过这个单词',
    icon: icons.Number,
  };
  const gamesInfo = {
    pic: require('@/static/images/statistics/verbal.png'),
    desc: `    这个测试主要是考察你在短时间内能记住多少个单词。\n
    屏幕会依次展示一个单词，你只需要告诉程序这个单词是否出现过即可。\n
    你需要记住的单词数量会不断增加。每轮测试你有3次犯错的机会，请尽可能努力地记忆吧。\n
    最终的分数取决于本轮测试中一共出现了多少个单词。`,
  };
  return (
    <div>
      <Playground intro={playgroundIntro}></Playground>
      <GamesInfo info={gamesInfo}></GamesInfo>
    </div>
  );
}
