import styles from './index.less'
import { useState, useRef, useEffect } from 'react'
export default function AimTrainerGame() {
  const GUIDING = 'guiding';
  const GAMING = "gaming";
  const RESULT = "result";
  const [state, setState] = useState(GUIDING)
  const [hitCount, setHitCount] = useState(30)
  const [score, setScore] = useState(0)

  const battlefieldRef = useRef<HTMLDivElement | null>(null)


  const timerRef = useRef<ReturnType<typeof setTimeout>>()
  const [startTimestramp, setStartTimestramp] = useState(0)

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  useEffect(() => {
    createRandomPosition()
  }, [])

  function createRandomPosition() {
    if (battlefieldRef.current) {
      const { height, width } = battlefieldRef.current.getBoundingClientRect()
      let randomX = 0, randomY = 0
      while (randomX < 80 || randomX > width - 80) {
        randomX = Math.round(Math.random() * width)
      }
      while (randomY < 80 || randomY > height - 80) {
        randomY = Math.round(Math.random() * height)
      }
      setX(randomX)
      setY(randomY)
    }
  }

  function start() {
    setStartTimestramp(Date.now())
    setState(GAMING)
  }
  function restart() {
    setHitCount(30)
    setState(GUIDING)
  }

  function Aim() {
    return (
      <div className={styles.aim} onClick={hit} style={{ left: x, top: y }}></div>
    )
  }
  function hit() {
    if (hitCount >= 1) {
      setHitCount(hitCount - 1)
      createRandomPosition()
    } else {
      setScore(Math.round((Date.now() - startTimestramp) / 30))
      setHitCount(hitCount - 1)
      setState(RESULT)
    }

  }
  function Guiding() {
    return (
      <div>
        指南随便看看吧
      </div>
    )
  }
  function Gaming() {
    return (
      <div className={styles.battlefield} ref={battlefieldRef}>
        剩余:{hitCount}
        <Aim></Aim>
      </div>
    )
  }
  function Result() {
    return (
      <div>
        <h1>分数为:{score}ms</h1>
        <button onClick={restart}>重新开始</button>
      </div>
    )
  }
  function render() {
    switch (state) {
      case GUIDING:
        return (<Guiding></Guiding>)
      case GAMING:
        return (<Gaming></Gaming>)
      case RESULT:
        return (<Result></Result>)
      default:
        return null

    }
  }
  return (
    <div className={styles.playground} onClick={() => { state === GUIDING && start() }}>
      {render()}
    </div>
  )
}