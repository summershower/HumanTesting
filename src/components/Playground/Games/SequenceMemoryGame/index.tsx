import styles from './index.less';
import { useEffect, useState, useRef, useCallback } from 'react';
export default function SequenceMemoryGame({ restart }: { restart: Function }) {
  const GAMING = 'gaming';
  const FAILED = 'failed';
  const RESULT = 'result';
  const [state, setState] = useState(GAMING);

  const [sequenceArr, setSequenceArr] = useState<number[]>([]);
  const [userTouchIndex, setUserTouchIndex] = useState(0);
  const [isNotAllowTouch, setIsNotAllowTouch] = useState(true);
  function createRandomNumber(): number {
    const randomNumber = Math.floor(Math.random() * 10);
    if (
      randomNumber === 0 ||
      (sequenceArr.length && sequenceArr[length - 1] === randomNumber)
    )
      return createRandomNumber();
    return randomNumber;
  }

  function touch(index: number) {
    highlightBox(index);
    if (!isNotAllowTouch) {
      if (index === sequenceArr[userTouchIndex]) {
        if (userTouchIndex === sequenceArr.length - 1) {
          passThisLevel();
        } else {
          passThisTouch(index);
        }
      } else {
        failedThisLevel();
      }
    }
  }
  async function sleep(ms: number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });
  }

  const sequenceArrRef = useRef<number[]>([]);
  sequenceArrRef.current = sequenceArr;
  async function showSequence() {
    if (!isNotAllowTouch) setIsNotAllowTouch(true);
    await sleep(1200);
    console.log(sequenceArrRef.current);
    sequenceArrRef.current.forEach((v, index) => {
      setTimeout(() => {
        highlightBox(v);
      }, index * 500);
      if (index === sequenceArrRef.current.length - 1) {
        setTimeout(() => {
          setIsNotAllowTouch(false);
        }, sequenceArrRef.current.length * 500);
      }
    });
  }
  async function highlightBox(index: number) {
    await sleep(1);
    const targetBox = document.querySelector('#box' + index);
    if (targetBox) {
      targetBox.classList.add(styles.highlight);
      await sleep(200);
      targetBox.classList.remove(styles.highlight);
    }
  }

  const playgroundRef = useRef<HTMLDivElement | null>(null);
  async function whiteGlitter() {
    playgroundRef.current &&
      playgroundRef.current.classList.add(styles.highlight);
    await sleep(200);
    playgroundRef.current &&
      playgroundRef.current.classList.remove(styles.highlight);
  }
  async function redGlitter() {
    playgroundRef.current && playgroundRef.current.classList.add(styles.red);
    await sleep(200);
    playgroundRef.current && playgroundRef.current.classList.remove(styles.red);
  }

  function passThisTouch(index: number) {
    setUserTouchIndex(userTouchIndex + 1);
  }
  function passThisLevel() {
    whiteGlitter();
    setUserTouchIndex(0);
    setSequenceArr([...sequenceArr, createRandomNumber()]);
    showSequence();
  }
  function failedThisLevel() {
    redGlitter();
    setState(FAILED);
  }

  useEffect(() => {
    setSequenceArr([createRandomNumber()]);
    showSequence();
  }, []);

  useEffect(() => {
    console.log('检查刷新');
  });

  function Gaming() {
    return (
      <div>
        <h2>当前等级：{sequenceArr.length}</h2>
        <div className={styles.box}>
          {new Array(9).fill(null).map((v, index) => (
            <div
              className={styles.eachBox}
              id={'box' + (index + 1)}
              key={index}
              onClick={() => touch(index + 1)}
            ></div>
          ))}
        </div>
      </div>
    );
  }
  function Failed() {
    return (
      <div>
        <h1>分数是：{sequenceArr.length}</h1>
        <p>寄了</p>
        <button onClick={() => restart()}>重开</button>
      </div>
    );
  }
  function Result() {
    return (
      <div>
        通过了
        <button>下一关</button>
      </div>
    );
  }
  function render() {
    switch (state) {
      case GAMING:
        return <Gaming></Gaming>;
      case FAILED:
        return <Failed></Failed>;
      case RESULT:
        return <Result></Result>;
      default:
        return null;
    }
  }

  return (
    <div className={styles.playground} ref={playgroundRef}>
      {render()}
    </div>
  );
}
