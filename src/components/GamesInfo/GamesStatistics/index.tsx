import styles from './index.less'
import { IGamesStatisticsProps } from '@/types'
export default function GamesStatistics(props: IGamesStatisticsProps) {
  return (
    <div className={styles.gamesStatistics}>
      <h2>统计数据</h2>
      <img src={props.pic} alt="统计数据" />
    </div>
  )
}