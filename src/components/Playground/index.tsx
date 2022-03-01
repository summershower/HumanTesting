import styles from './index.less'
import { IPlaygroundProps } from '@/types'
import { Link } from 'umi'
import { useState } from 'react'
export default function Playground(props: IPlaygroundProps) {
  const [isShownIntro, setIsShownIntro] = useState(true)
  return (
    <div className={styles.playground}>
      {props.icon({})}
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.intro}>{props.desc}</p>
      {
        props.hideBtn ? null :
          props.link ?
            <Link to="/reactiontime" className={styles.startBtn}>立即开始</Link> :
            <button onClick={() => setIsShownIntro(false)} className={styles.startBtn}>立即开始</button>
      }
    </div>
  )
}