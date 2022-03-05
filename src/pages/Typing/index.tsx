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
    desc: `这是一个简单的工具来衡量你的反应时间

    根据目前收集的数据，平均（中位数）反应时间为273毫秒。
    
    
    除了测量你的反应时间，这个测试还受到你的电脑和显示器的延迟的影响。使用快速计算机和低延迟/高帧率监视器将提高你的分数。
    
    
    此测试中的分数比aim trainer测试快，因为您可以在不移动光标的情况下立即做出反应。
    
    
    这将在统计页面上进一步详细讨论。虽然人类的平均反应时间可能会在200-250毫秒之间，但你的电脑可能会增加10-50毫秒。一些现代电视加起来高达150毫秒！
    
    如果你愿意，你可以记录你的分数，并查看你反应时间的完整历史记录。
    
    只需执行至少5次单击，然后保存。`,
  };
  return (
    <div>
      <Playground intro={playgroundIntro}></Playground>
      <GamesInfo info={gamesInfo}></GamesInfo>
    </div>
  );
}
