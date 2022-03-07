import Playground from '@/components/Playground';
import GamesInfo from '@/components/GamesInfo';
import icons from '@/components/Icons';
export default function VisualMemory() {
  const playgroundIntro = {
    title: '瞬时视觉记忆',
    desc: '请记住接下来亮起的方块',
    icon: icons.Block,
  };
  const gamesInfo = {
    pic: require('@/static/images/statistics/visualmemory.png'),
    desc: `    这是一个对瞬时视觉残留记忆能力的测试。\n
    每一关都会有部分方块进行高亮展示，请记住它们的位置，然后重新找出它们。\n
    随着关卡的进行，需要记忆的方块会越来越多，而且矩阵也会变得越来越大。\n
    每一关有3次选错方块的机会，用完3次机会就会扣1点生命值。\n
    你有3点生命值，都用完的话就算游戏结束啦。`,
  };
  return (
    <div>
      <Playground intro={playgroundIntro}></Playground>
      <GamesInfo info={gamesInfo}></GamesInfo>
    </div>
  );
}
