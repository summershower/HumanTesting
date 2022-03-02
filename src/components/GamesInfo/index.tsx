import styles from './index.less'
import GamesStatistics from '@/components/GamesInfo/GamesStatistics'
import GamesIntro from '@/components/GamesInfo/GamesIntro'
import { IGamesInfoProps } from '@/types'


export default function GamesInfo(props: IGamesInfoProps) {
  return (
    <div className={styles.gamesInfo}>
      <GamesStatistics pic={props.info.pic}></GamesStatistics>
      <GamesIntro desc={props.info.desc}></GamesIntro>
    </div >
  )
}