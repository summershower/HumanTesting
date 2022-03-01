import { Link } from 'umi'
import styles from './index.less'
import Playground from '@/components/Playground'
import icons from '@/components/Icons'


export default function MainIntro() {
  const title = "人类极限测试"
  const desc = "通过游戏来测试你的大脑和神经极限潜力吧！"
  const link = "/reactiontime"
  return (
    <div>
      <Playground icon={icons.HugeLighting} title={title} desc={desc} link={link}></Playground>
    </div>
  )
}