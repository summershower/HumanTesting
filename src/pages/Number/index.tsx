import Playground from '@/components/Playground';
import GamesInfo from '@/components/GamesInfo';
import icons from '@/components/Icons';
export default function Number() {
  const playgroundIntro = {
    title: '数字记忆',
    desc: '请记住接下来出现的数字',
    icon: icons.Number,
  };
  const gamesInfo = {
    pic: require('@/static/images/statistics/numbermemory.png'),
    desc: `
    这是一个考察你短期数字记忆能力的游戏。\n
    普通人一般而言只能可靠地记住7位数，但你可以尝试去了解一些记忆技巧和方法，经过训练这个临时记忆能力会有显著提升。\n
    具体的话可以自己查找百度~
    `,
  };
  return (
    <div>
      <Playground intro={playgroundIntro}></Playground>
      <GamesInfo info={gamesInfo}></GamesInfo>
    </div>
  );
}
