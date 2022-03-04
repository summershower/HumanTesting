import styles from './index.less';
import { useEffect, useState, useRef } from 'react';
export default function ChimpGame({ restart }: { restart: Function }) {
  const GAMING = 'gaming'
  const FAILED = 'failed'
  const SUCCESS = 'success'
  const RESULT = 'result'
  const ENDING = 'ending'
  const [state, setState] = useState(GAMING)

  const [level, setLevel] = useState(4)
  const [retryTimes, setRetryTimes] = useState(0)

  const [sequenceArr, setSequenceArr] = useState<number[]>([])
  const [userClickedArr, setUserClickedArr] = useState<number[]>([])



  function createRandomNumber(level: number) {
    const arr: number[] = []
    console.log(level)

    while (arr.length < level) {
      const randomNumber = Math.floor(Math.random() * 40)
      if (arr.includes(randomNumber)) {
        continue
      } else {
        arr.push(randomNumber)
      }
    }
    setSequenceArr(arr)
    console.log(arr)
  }
  useEffect(() => {
    createRandomNumber(4)
  }, [])

  function handleClick(index: number) {
    const seqIndex = sequenceArr.indexOf(index)
    const userClickIndex = userClickedArr.length
    if (userClickIndex === seqIndex) {
      console.log(userClickIndex, sequenceArr.length - 1)
      if (userClickIndex === sequenceArr.length - 1) {
        if (level < 38) {
          setState(SUCCESS)
        } else {
          setState(ENDING)
        }
      } else {
        setUserClickedArr([...userClickedArr, index])

      }
    } else {
      if (retryTimes < 2) {
        setRetryTimes(retryTimes + 1)
        setState(FAILED)
      } else {
        setState(RESULT)
      }
    }
  }

  function retry() {
    setUserClickedArr([])
    createRandomNumber(level)
    setState(GAMING)
  }
  function nextLevel() {
    setRetryTimes(0)
    setUserClickedArr([])
    setLevel(level + 1)
    createRandomNumber(level + 1)
    setState(GAMING)
  }

  function classNameComputed(index: number) {
    if (level === 4) {
      return `${styles.eachBox} ${sequenceArr.includes(index) && !userClickedArr.includes(index) && styles.shownBox} `
    } else {
      if (userClickedArr.length) {
        return `${styles.eachBox} ${sequenceArr.includes(index) && !userClickedArr.includes(index) && styles.whiteBox}`
      } else {
        return `${styles.eachBox} ${sequenceArr.includes(index) && styles.shownBox}`

      }
    }
  }
  function boxContentComputed(index: number) {
    return `${sequenceArr.indexOf(index) >= 0 ? sequenceArr.indexOf(index) + 1 : ''}`
  }
  function Success() {
    return (
      <div>
        <h1>过了</h1>
        当前等级: {level}
        <button onClick={nextLevel}>下一关</button>
      </div>
    )
  }
  function Failed() {
    return (
      <div>
        当前等级: {level}
        生命：{retryTimes} / 3
        <button onClick={retry}>再试一次</button>
      </div>
    )
  }
  function Gaming() {
    return (<div className={styles.box}>
      {new Array(40).fill(null).map((v, index) => <div className={classNameComputed(index)} key={index} onClick={() => {
        handleClick(index)
      }}>{boxContentComputed(index)}</div>)}
    </div>)
  }
  function Result() {
    return (
      <div>
        <h1>你无了</h1>
        最终成绩: {level}

        <button onClick={() => restart()}>重开吧捞仔</button>
      </div>
    )
  }
  function Ending() {
    return (
      <div>
        <h1>你已经到达宇宙尽头</h1>
        <button onClick={() => restart()}>再试一次？</button>
      </div>
    )
  }
  function render() {
    switch (state) {
      case GAMING:
        return (<Gaming></Gaming>)
      case SUCCESS:
        return (<Success></Success>)
      case FAILED:
        return (<Failed></Failed>)
      case RESULT:
        return (<Result></Result>)
      case ENDING:
        return (<Ending></Ending>)
      default:
        return null
    }
  }
  return (
    <div className={styles.playground} >
      {render()}
    </div>
  );
}
