import styles from './index.less';
import Playground from '@/components/Playground'
import Cubes from './Cubes'
import { useEffect, useRef, useState } from 'react'
import icons from '@/components/icons'

export default function IndexPage() {
  const [count, setCount] = useState(0)
  const playgroundIntro = {
    title: "人类极限测试",
    desc: "通过游戏来测试你的大脑和神经极限潜力吧！",
    link: "/reactiontime",
    icon: icons.HugeLighting
  }
  return (
    <div>
      <Playground intro={playgroundIntro}></Playground>
      <Cubes></Cubes>
    </div>
  );
}
