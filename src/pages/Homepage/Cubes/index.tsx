import styles from './index.less';
import { Link } from 'umi';
import Icons from '../../../components/Icons';
import { IIcon } from '@/types';

export default function Cubes() {
  const cubeData = [
    {
      icon: 'Lighting',
      title: '反应时间',
      intro: '测试你的反应速度',
      link: '/reactiontime',
    },
    {
      icon: 'Block',
      title: '连续记忆',
      intro: '记住一串逐渐增长的方块顺序',
      link: '/sequencememory',
    },
    {
      icon: 'Aim',
      title: '打靶训练场',
      intro: '测试你打靶的速度',
      link: '/aimtrainer',
    },
    {
      icon: 'Number',
      title: '数字记忆',
      intro: '看看你能记住多长的数字',
      link: '/number',
    },
    {
      icon: 'Verbal',
      title: '单词记忆',
      intro: '测试短期的背单词能力',
      link: '/verbal',
    },
    {
      icon: 'Chimp',
      title: '黑猩猩测试',
      intro: '不会有人比大猩猩还笨吧？',
      link: '/chimp',
    },
    {
      icon: 'Block',
      title: '视觉暂留测试',
      intro: '测试短期的视觉残留记忆能力',
      link: '/visualmemory',
    },
    {
      icon: 'Typing',
      title: '输入测试',
      intro: '测试每分钟的输入速度',
      link: '/typing',
    },
  ];
  return (
    <div className={styles.cubes}>
      {cubeData.map((v) => {
        return (
          <Link to={v.link} className={styles.eachCube} key={v.title}>
            {Icons[v.icon as IIcon]()}
            <h2>{v.title}</h2>
            <p>{v.intro}</p>
          </Link>
        );
      })}
    </div>
  );
}
