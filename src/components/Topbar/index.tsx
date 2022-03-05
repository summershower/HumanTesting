import styles from './index.less';
import { Link } from 'umi';
export default function Topbar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.container}>
        <Link to="/">回到首页</Link>
      </div>
    </div>
  );
}
