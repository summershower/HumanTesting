import Playground from '@/components/Playground'
import GamesInfo from '@/components/GamesInfo'
import icons from "@/components/Icons"
export default function AimTrainer() {

  const gamesInfo = {
    pic: require("@/static/images/aimStatistics.png"),
    desc: `尽可能快速准确地点击目标。

    这测试反射和手眼协调。
    
    单击30个目标后，将显示您的分数和每个目标的平均时间。
    
    这个测试的分数比简单的反应时间测试慢，因为你必须做出反应，然后移动光标。
    
    这项测试最好用鼠标或平板电脑屏幕进行。轨迹板很难得分。`
  }
  return (
    <div>
      <Playground ></Playground>
      <GamesInfo info={gamesInfo}></GamesInfo>
    </div>
  )
}