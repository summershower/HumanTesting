import styles from './index.less';
export default () => {
  return (
    <div className={styles.loading}>
      <img src={require('@/static/images/loading.gif')} alt="loading" />
    </div>
  );
};
