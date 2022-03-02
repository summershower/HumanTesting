import styles from './index.less'
import {IGamesIntroProps} from '@/types'
export default function GamesIntro(props:IGamesIntroProps) {
  return (
    <div className={styles.gamesIntro}>
      <h2>关于本测试</h2>
      <p>{props.desc}</p>
    </div>
  )
}