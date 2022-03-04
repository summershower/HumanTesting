import Playground from '@/components/Playground'
import GamesInfo from '@/components/GamesInfo'
import icons from "@/components/Icons"
export default function ChimpTest() {
  const playgroundIntro = {
    title: "大猩猩测试",
    desc: "宁不会比大猩猩还蠢8？",
    icon: icons.Block
  }
  const gamesInfo = {
    pic: require("@/static/images/reactionTimeStatistics.png"),
    desc: `猩猩捏`
  }
  return (
    <div>
      <Playground intro={playgroundIntro}></Playground>
      <GamesInfo info={gamesInfo}></GamesInfo>
    </div>
  )
}