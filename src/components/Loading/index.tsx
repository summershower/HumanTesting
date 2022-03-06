import styles from './index.less';
export default () => {
  return (
    <div className={styles.loading}>
      <img src={require('@/static/images/loading.gif')} alt="loading" />
      <p>加载中...</p>
    </div>
  );
};
