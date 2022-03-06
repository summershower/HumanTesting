import styles from './index.less';
import { useEffect, useState, useRef } from 'react';
import Icons from '@/components/Icons';
export default function ChimpGame({ restart }: { restart: Function }) {
  const GAMING = 'gaming';
  const FAILED = 'failed';
  const SUCCESS = 'success';
  const RESULT = 'result';
  const ENDING = 'ending';
  const [state, setState] = useState(GAMING);

  const [level, setLevel] = useState(4);
  const [retryTimes, setRetryTimes] = useState(0);

  const [sequenceArr, setSequenceArr] = useState<number[]>([]);
  const [userClickedArr, setUserClickedArr] = useState<number[]>([]);

  function createRandomNumber(level: number) {
    const arr: number[] = [];
    console.log(level);

    while (arr.length < level) {
      const randomNumber = Math.floor(Math.random() * 40);
      if (arr.includes(randomNumber)) {
        continue;
      } else {
        arr.push(randomNumber);
      }
    }
    setSequenceArr(arr);
  }
  useEffect(() => {
    createRandomNumber(4);
  }, []);

  function handleClick(index: number) {
    const seqIndex = sequenceArr.indexOf(index);
    const userClickIndex = userClickedArr.length;
    if (userClickIndex === seqIndex) {
      if (userClickIndex === sequenceArr.length - 1) {
        if (level < 38) {
          setState(SUCCESS);
        } else {
          setState(ENDING);
        }
      } else {
        setUserClickedArr([...userClickedArr, index]);
      }
    } else {
      if (retryTimes < 2) {
        setRetryTimes(retryTimes + 1);
        setState(FAILED);
      } else {
        setState(RESULT);
      }
    }
  }

  function retry() {
    setUserClickedArr([]);
    createRandomNumber(level);
    setState(GAMING);
  }
  function nextLevel() {
    setRetryTimes(0);
    setUserClickedArr([]);
    setLevel(level + 1);
    createRandomNumber(level + 1);
    setState(GAMING);
  }
  function classNameComputed(index: number) {
    if (level === 4) {
      return `${styles.eachBox} ${
        sequenceArr.includes(index) &&
        !userClickedArr.includes(index) &&
        styles.shownBox
      } `;
    } else {
      if (userClickedArr.length) {
        return `${styles.eachBox} ${
          sequenceArr.includes(index) &&
          !userClickedArr.includes(index) &&
          styles.whiteBox
        }`;
      } else {
        return `${styles.eachBox} ${
          sequenceArr.includes(index) && styles.shownBox
        }`;
      }
    }
  }
  function boxContentComputed(index: number) {
    return `${
      sequenceArr.indexOf(index) >= 0 ? sequenceArr.indexOf(index) + 1 : ''
    }`;
  }
  function Success() {
    return (
      <div className={styles.success}>
        <h2>数量：</h2>
        <h1>{level}</h1>
        <h2>生命值：</h2>
        <h2> {3 - retryTimes} / 3</h2>
        <button className="continueBtn" onClick={nextLevel}>
          下一关
        </button>
      </div>
    );
  }
  function Failed() {
    return (
      <div className={styles.failed}>
        <h2>数量：</h2>
        <h1>{level}</h1>
        <h2>生命值：</h2>
        <h2> {3 - retryTimes} / 3</h2>
        <button className="tryAgainBtn" onClick={retry}>
          再试一次
        </button>
      </div>
    );
  }
  function Gaming() {
    return (
      <div className={styles.box}>
        {new Array(40).fill(null).map((v, index) => (
          <div
            className={classNameComputed(index)}
            key={index}
            onClick={() => {
              handleClick(index);
            }}
          >
            {boxContentComputed(index)}
          </div>
        ))}
      </div>
    );
  }
  function Result() {
    return (
      <div className={styles.result}>
        {Icons.Block()}
        <h2>最终成绩:</h2>
        <h1>{level}</h1>
        <button className="tryAgainBtn" onClick={() => restart()}>
          再试一次
        </button>
      </div>
    );
  }
  function Ending() {
    return (
      <div className={styles.result}>
        <h1>你已经到达宇宙尽头</h1>
        <button className="tryAgainBtn" onClick={() => restart()}>
          再试一次？
        </button>
      </div>
    );
  }
  function render() {
    switch (state) {
      case GAMING:
        return <Gaming></Gaming>;
      case SUCCESS:
        return <Success></Success>;
      case FAILED:
        return <Failed></Failed>;
      case RESULT:
        return <Result></Result>;
      case ENDING:
        return <Ending></Ending>;
      default:
        return null;
    }
  }
  return (
    <div className={`${styles.playground} playground onlyPC`}>{render()}</div>
  );
}
