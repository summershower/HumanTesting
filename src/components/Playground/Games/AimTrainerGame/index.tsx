import styles from './index.less'
import { useState, useRef } from 'react'
export default function AimTrainerGame() {
  const GUIDING = 'guiding';
  const GAMING = "gaming";
  const RESULT = "result";
  const [state, setState] = useState(GUIDING)
  const [hitCount, setHitCount] = useState(30)

  const battlefieldRef = useRef<HTMLDivElement | null>(null)
  function createRandomAim() {
    if (battlefieldRef.current) {
      console.log(battlefieldRef.current)
    }
  }
  function restart() {
    setHitCount(30)
    setState(GUIDING)
  }
  function calculateResult() {

  }
  function Aim() {
    return (
      <div className={styles.aim} onClick={hit}></div>
    )
  }
  function hit() {
    console.log('ima?')
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
        <Aim></Aim>
      </div>
    )
  }
  function Result() {
    return (
      <div>
        <h1>分数为:</h1>
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
    <div className={styles.playground} onClick={() => { state === GUIDING && setState(GAMING) }}>
      {render()}
    </div>
  )
}