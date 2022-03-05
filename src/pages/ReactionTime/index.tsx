import Playground from '@/components/Playground';
import GamesInfo from '@/components/GamesInfo';
export default function ReactionTime() {
  const gamesInfo = {
    pic: require('@/static/images/statistics/reactiontime.png'),
    desc: `    这个游戏可以测试你的反应速度。\n
    根据数据库显示，目前的平均（中位数）反应速度为273毫秒。\n
    需要注意的是：这个成绩除了跟你的反应速度有关，还受到你的电脑和显示器的延迟的影响。使用高帧率屏幕将有效提高你的分数。\n
    虽然人类的平均反应时间可能会在200-250毫秒之间，但你的设备可能会增加10-50毫秒。如果使用电视进行游戏，影响可能高达150毫秒。\n
    每次测试将由5轮组成，以消除偏差。
    `,
  };
  return (
    <div>
      <Playground></Playground>
      <GamesInfo info={gamesInfo}></GamesInfo>
    </div>
  );
}
