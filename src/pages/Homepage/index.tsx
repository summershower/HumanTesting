import styles from './index.less';
import Playground from '@/components/Playground';
import Cubes from './Cubes';
import icons from '@/components/icons';

export default function IndexPage() {
  const playgroundIntro = {
    title: '人类极限测试',
    desc: '通过益智游戏来测试你大脑的极限潜力！',
    link: '/reactiontime',
    icon: icons.HugeLighting,
  };
  return (
    <div>
      <Playground intro={playgroundIntro}></Playground>
      <Cubes></Cubes>
    </div>
  );
}
