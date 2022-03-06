import styles from './index.less';
import { Link } from 'umi';
import icons from '@/components/Icons';
export default function Topbar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.container}>
        <Link to="/">
          {icons.Lighting()}
          人类极限测试
        </Link>
      </div>
    </div>
  );
}
