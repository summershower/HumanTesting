import styles from './index.less'
import { useEffect, useState, useMemo } from 'react'
export default function SequenceMemoryGame() {
  const [sequenceArr, setSequenceArr] = useState<number[]>([])
  const [userTouchSequence, setUserTouchSequence] = useState<number[]>([])
  const [isNotAllowTouch, setIsNotAllowTouch] = useState(true)

  function createRandomNumber(): number {
    const randomNumber = Math.floor(Math.random() * 10)
    if (randomNumber === 0 || (sequenceArr.length && sequenceArr[length - 1] === randomNumber)) return createRandomNumber()
    return randomNumber
  }

  function touch(index: number) {

  }
  async function sleep(ms: number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(1)
      }, ms)
    })
  }
  async function showSequence() {
    await sleep(2000)
    sequenceArr.forEach(async (v, index) => {

      sleep(500)
    })
  }

  useEffect(() => {
    setSequenceArr([createRandomNumber()])
    showSequence()
  }, [])
  return (
    <div className={styles.playground}>
      <h2>当前等级：{sequenceArr.length}</h2>
      <div className={styles.box}>
        {new Array(9).fill(null).map((v, index) => <div className={styles.eachBox} key={index} onClick={() => touch(index + 1)}></div>)}
      </div>
    </div>
  )
}