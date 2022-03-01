import styles from './index.less'
import { Link } from 'umi'
import Icons from './icons'
import { IIcon } from "@/types"

export default function Cubes() {
  const cubeData = [{
    icon: 'Lighting',
    title: '反应时间',
    intro: '测试你的视觉反应速度',
    link: '/reactiontime'
  }, {
    icon: 'Block',
    title: '连续记忆',
    intro: '测试你的视觉反应速度',
    link: '/sequencememory'
  }, {
    icon: 'Aim',
    title: '打靶测试',
    intro: '测试你打靶的速度捏',
    link: '/aimtrainer'
  }, {
    icon: 'Number',
    title: '数字记忆',
    intro: '测试你对数字的记忆能力',
    link: '/reactiontime'
  }, {
    icon: 'Verbal',
    title: '单词记忆',
    intro: '测试你对单词的记忆能力',
    link: '/reactiontime'
  }, {
    icon: 'Chimp',
    title: '黑猩猩测试',
    intro: '测试你的视觉反应速度',
    link: '/reactiontime'
  }, {
    icon: 'Block',
    title: '视觉暂留测试',
    intro: '测试你的视觉反应速度',
    link: '/reactiontime'
  }, {
    icon: 'Typing',
    title: '输入测试',
    intro: '测试你的打字速度',
    link: '/reactiontime'
  }]
  return (
    <div className={styles.cubes}>
      {cubeData.map(v => {
        return (
          <Link to={v.link} className={styles.eachCube} key={v.title}>
            {Icons[v.icon as IIcon]()}
            <h2>{v.title}</h2>
            <p>{v.intro}</p>
          </Link>
        )
      })}
    </div>
  )
}