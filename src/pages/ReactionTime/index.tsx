import { useState } from 'react'
import styles from './index.less'
import Playground from '@/components/Playground'
import icons from "@/components/Icons"
export default function ReactionTime() {
  const title = "反应时间测试"
  const desc = "当红色的盒子变成绿色时，请用最快的速度点击屏幕。\r\n按下此处开始"

  const [state, setState] = useState('waiting')
  const WAITING = 'waiting'
  const PROCESSING = 'processing'
  const FINISHED = 'finished'
  const FAILED = 'failed'

  let timer = null
  let times = 0
  let randomWaitingTime = 0
  let timestramp = 0

  function createRandomTime() {
    let r = Math.random() * 10000
    if (r < 3000) r = r + 3000
    else if (r > 8000) r = r - 2000
    return Math.round(r)
  }
  function handle() {
    switch (state) {
      case WAITING:
        break;
      case PROCESSING:
        break;
      case FINISHED:
        break;
      case FAILED:
        break;
      default:
        break;
    }
  }
  return (
    <div>
      <Playground title={title} desc={desc} icon={icons.Lighting} hideBtn={true}></Playground>
      <div onClick={handle}></div>
    </div>
  )
}