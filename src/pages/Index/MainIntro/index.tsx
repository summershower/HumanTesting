import { Link } from 'umi'
import styles from './index.less'

function Lighting() {
  return (
    <svg width="100" height="128" viewBox="0 0 100 128" fill="currentcolor" xmlns="http://www.w3.org/2000/svg"><path d="M0.719527 59.616L32.8399 2.79148C33.8149 1.06655 35.6429 0 37.6243 0H94.4947C98.9119 0 101.524 4.94729 99.0334 8.59532L71.201 49.357C68.7101 53.0051 71.3225 57.9524 75.7397 57.9524H82.2118C87.3625 57.9524 89.6835 64.4017 85.7139 67.6841L14.34 126.703C9.85287 130.413 3.43339 125.513 5.82845 120.206L25.9709 75.5735C27.6125 71.936 24.9522 67.8166 20.9615 67.8166H5.50391C1.29539 67.8166 -1.35146 63.2798 0.719527 59.616Z" fill="currentcolor"></path></svg>
  )
}
export default function MainIntro() {
  return (
    <div className={styles.mainIntro}>
      {Lighting()}
      <h1 className={styles.title}>人类极限测试</h1>
      <p className={styles.intro}>通过游戏来测试你的大脑和神经极限潜力吧！</p>
      <Link to="/reactiontime" className={styles.startBtn}>立即开始</Link>
    </div>
  )
}