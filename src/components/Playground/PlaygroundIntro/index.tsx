import styles from './index.less'
import { IPlaygroundIntroProps } from '@/types'
import { Link } from 'umi'
import { useState } from 'react'
export default function PlaygroundIntro(props: IPlaygroundIntroProps) {
  const [isShownIntro, setIsShownIntro] = useState(true)
  return (
    <div>
      {props.icon({})}
      <h1 className={styles.title} > {props.title}</h1>
      <p className={styles.intro}>{props.desc}</p>
      {
        props.hideBtn ? null :
          props.link ?
            <Link to="/reactiontime" className={styles.startBtn}>立即开始</Link> :
            <button onClick={() => props.startGame && props.startGame()} className={styles.startBtn}>立即开始</button>
      }
    </div>
  )
}