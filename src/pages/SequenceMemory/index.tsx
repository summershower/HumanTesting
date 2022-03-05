import Playground from '@/components/Playground';
import GamesInfo from '@/components/GamesInfo';
import icons from '@/components/Icons';
export default function SequenceMemory() {
  const playgroundIntro = {
    title: '连续记忆测试',
    desc: '请记住方块亮起的顺序',
    icon: icons.Block,
  };
  const gamesInfo = {
    pic: require('@/static/images/statistics/sequencememory.png'),
    desc: `\r
    这个游戏会检测你的连续记忆能力。\n
    游戏开始后，会先展示一次方块亮起的顺序，请记在心中，然后按顺序按下。\n
    随着关卡增长，方块的连续亮起的长度会越来越长。\n
    按错任何一个方块的顺序，测试就宣告结束。
    `,
  };
  return (
    <div>
      <Playground intro={playgroundIntro}></Playground>
      <GamesInfo info={gamesInfo}></GamesInfo>
    </div>
  );
}
