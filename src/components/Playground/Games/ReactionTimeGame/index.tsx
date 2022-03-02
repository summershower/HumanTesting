import { useState, useRef } from 'react'
import styles from './index.less'
import icons from '@/components/icons'

export default function ReactionTimeGame() {
  // 设定游戏状态
  const GUIDING = 'guiding'
  const WAITING = 'waiting'
  const COUNTDOWN = 'countdown'
  const SUCCESS = 'success'
  const FAILED = 'failed'
  const OVERTIME = 'overtime'
  const FINISHED = 'finished'
  const [state, setState] = useState(GUIDING)

  // 设定背景颜色
  const BLUE = "rgb(43, 135, 209)"
  const GREEN = "rgb(75,219,109)"
  const RED = "rgb(206,38,54)"
  const [bgColor, setBgColor] = useState(BLUE)

  // 设定计时器
  let timerRef = useRef<null | ReturnType<typeof setTimeout>>()
  let overTimerRef = useRef<null | ReturnType<typeof setTimeout>>()
  const [countState, setCountState] = useState(false)
  const [startTimestramp, setStartTimestramp] = useState(0)
  const [currentScore, setCurrentScore] = useState(0)
  const [times, setTimes] = useState(1)
  const [scoresRecord, setScoresRecord] = useState<number[]>([])

  function createRandomSeconds() {
    let r = Math.random() * 10000
    if (r < 3000) r = r + 3000
    else if (r > 8000) r = r - 2000
    return Math.round(r)
  }
  function startCount() {
    const seconds = createRandomSeconds()
    timerRef.current = setTimeout(() => {
      setStartTimestramp(Date.now())
      setCountState(true)
      startOvertimer()
      setBgColor(GREEN)
      setState(COUNTDOWN)
    }, seconds)
    setBgColor(RED)
  }
  function startOvertimer() {
    overTimerRef.current = setTimeout(() => {
      resetCount()
      setState(OVERTIME)
      setBgColor(BLUE)
    }, 3000)
  }
  function resetCount() {
    if (timerRef.current) clearTimeout(timerRef.current)
    if (overTimerRef.current) clearTimeout(overTimerRef.current)
    setCountState(false)
    setStartTimestramp(0)
    setCurrentScore(0)
    setBgColor(BLUE)
  }


  // 进行成绩判定
  function judge() {
    if (countState) {
      const score = Date.now() - startTimestramp
      setTimes(times + 1)
      setCurrentScore(score)
      setScoresRecord([...scoresRecord, score])
      if (overTimerRef.current) clearTimeout(overTimerRef.current)
      setState(BLUE)
      setState(SUCCESS)
    } else {
      resetCount()
      setState(BLUE)
      setState(FAILED)
    }
    if (times === 5) {
      setTimes(1)
      setState(FINISHED)
    }
  }

  //  点击屏幕
  function handle() {
    switch (state) {
      case GUIDING:
        startCount()
        setState(WAITING)
        break;
      case WAITING:
        judge()
        break;
      case COUNTDOWN:
        judge()
        break;
      case SUCCESS:
        resetCount()
        setState(WAITING)
        startCount()
        break;

      case OVERTIME:
        resetCount()
        startCount()
        setState(WAITING)
        break;
      case FAILED:
        resetCount()
        startCount()
        setState(WAITING)
        break;
      case FINISHED:

        break;
      default:
        break;
    }
  }

  function getAveragedScore() {
    const sum = scoresRecord.reduce((total, current) => total + current, 0)
    return sum / 5
  }

  function restart() {
    setScoresRecord([])
    resetCount()
    setState(GUIDING)
    setBgColor(BLUE)
  }


  // 各个状态的函数组件
  function Guide() {
    return (
      <div className={styles.guide}>
        {icons.HugeLighting()}
        <h1 className={styles.title} >反应时间测试 </h1>
        <p className={styles.intro}>当屏幕由红色变成绿色时，请用最快的速度按下鼠标左键。</p>
        <p className={styles.intro}>按下任意位置开始游戏。</p>

      </div>
    )
  }
  function Waiting() {
    return (
      <div className={styles.waiting} >
        <p className={styles.intro}>。。。</p>
        <p className={styles.intro}>请等待屏幕变绿色</p>
      </div>
    )
  }
  function Countdown() {
    return (
      <div className={styles.countdown} >
        <p className={styles.intro}>快点我啊</p>
      </div>
    )
  }
  function Success() {
    return (
      <div className={styles.success}>
        <p className={styles.intro}>成功捏</p>
        <p className={styles.intro}>成绩为：{currentScore}ms</p>
      </div>
    )
  }
  function Failed() {
    return (
      <div className={styles.failed} >
        <p className={styles.intro}>没到你点什么</p>
      </div>
    )
  }
  function Overtime() {
    return (
      <div className={styles.overtime} >
        <p className={styles.intro}>超时了蜗牛</p>
      </div>
    )
  }
  function Finished() {
    return (
      <div className={styles.finished} >
        <p className={styles.intro}>搞定了捏，成绩为：{getAveragedScore()}</p>
        <button onClick={() => restart()}>重新测试</button>
      </div>
    )
  }
  const stateRender = () => {
    switch (state) {
      case GUIDING:
        return (<Guide></Guide>)
        break;
      case WAITING:
        return (<Waiting></Waiting>)
        break;
      case COUNTDOWN:
        return (<Countdown></Countdown>)
        break;
      case SUCCESS:
        return (<Success></Success>)
        break;
      case FAILED:
        return (<Failed></Failed>)
        break;
      case OVERTIME:
        return (<Overtime></Overtime>)
        break;
      case FINISHED:
        return (<Finished></Finished>)
        break;
      default:
        return null
        break;
    }
  }

  return (
    <div className={styles.playground} style={{ backgroundColor: bgColor }} onClick={handle}>
      {stateRender()}
    </div>
  )
}
