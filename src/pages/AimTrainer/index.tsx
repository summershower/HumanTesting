import Playground from '@/components/Playground';
import GamesInfo from '@/components/GamesInfo';
export default function AimTrainer() {
  const gamesInfo = {
    pic: require('@/static/images/statistics/aimtrainer.png'),
    desc: `    请尽可能快速准确地点击靶子。\n
    这个游戏主要测试反应时间和手眼协调能力。\n
    每轮测试需要击中30个目标，测试完毕将展示你的平均反应时间。\n
    这个测试的分数肯定会简单的反应时间测试慢，因为你看到目标后还需要移动光标进行点击。\n
    这项测试暂时只支持电脑和平板进行，手机端将暂不可用。\n
    `,
  };
  return (
    <div>
      <Playground></Playground>
      <GamesInfo info={gamesInfo}></GamesInfo>
    </div>
  );
}
