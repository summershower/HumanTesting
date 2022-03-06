import styles from './index.less';
import { useEffect, useState, useRef } from 'react';
import icons from '@/components/icons';
export default function VisualMemoryGame({ restart }: { restart: Function }) {
  // 设置游戏状态
  const GAMING = 'gaming';
  const RESULT = 'result';
  const [state, setState] = useState(GAMING);

  // 计算盒子行列数相关数据
  const [n, setN] = useState(3);
  const [boxQuantity, setBoxQuantity] = useState(3);
  const [maxBoxQuantity, setMaxBoxQuantity] = useState(4);
  const [diffValue, setDiffValue] = useState(3);
  const [addDiffTimesRecord, setAddDiffTimesRecord] = useState([0, 0, 0]);

  // 生命值和当前关卡相关信息
  const [failedQuantity, setFailedQuantity] = useState(0);
  const [lifeQuantity, setLifeQuantity] = useState(3);

  const [userClickedArr, setUserClickedArr] = useState<number[]>([]);
  const [userClickedRightArr, setUserClickedRightArr] = useState<number[]>([]);

  const [isAllowedHandle, setIsAllowedHandle] = useState(false);

  const [randomNumberArr, setRandomNumberArr] = useState<number[]>([]);

  const revealSoundRef = useRef<HTMLAudioElement | null>(null);
  const backSoundRef = useRef<HTMLAudioElement | null>(null);
  const boopSoundRef = useRef<HTMLAudioElement | null>(null);

  async function handleClick(index: number) {
    if (!isAllowedHandle) return highlight(index);
    if (userClickedArr.includes(index)) return;

    if (randomNumberArr.includes(index)) {
      if (userClickedRightArr.length === boxQuantity - 1) {
        whiteGlitter();
        await sleep(500);
        nextLevel();
      } else {
        setUserClickedArr([...userClickedArr, index]);
        setUserClickedRightArr([...userClickedRightArr, index]);
      }
    } else {
      if (failedQuantity === 2) {
        if (lifeQuantity === 1) {
          setState(RESULT);
        } else {
          setLifeQuantity(lifeQuantity - 1);
          redGlitter();
          retry();
        }
      } else {
        setFailedQuantity(failedQuantity + 1);
        setUserClickedArr([...userClickedArr, index]);
      }
    }
  }

  const arrRef = useRef<number[]>([]);

  arrRef.current = randomNumberArr;

  async function showTargetBox() {
    await sleep(1200);
    arrRef.current &&
      arrRef.current.forEach((v) => {
        turnover(v);
      });
    await sleep(200);
    setIsAllowedHandle(true);
  }

  function retry() {
    if (isAllowedHandle) setIsAllowedHandle(false);
    setFailedQuantity(0);
    setUserClickedArr([]);
    setUserClickedRightArr([]);
    createRandomNumberArr();
  }

  function nextLevel() {
    setFailedQuantity(0);
    setUserClickedArr([]);
    setUserClickedRightArr([]);
    setBoxQuantity(boxQuantity + 1);
    if (boxQuantity + 1 > maxBoxQuantity) {
      if (
        addDiffTimesRecord[addDiffTimesRecord.length - 1] ===
        addDiffTimesRecord.length - 1
      ) {
        const arr = addDiffTimesRecord;
        arr[arr.length] = 1;
        setAddDiffTimesRecord(arr);
        setDiffValue(diffValue + 2);
        setMaxBoxQuantity(maxBoxQuantity + diffValue + 2);
      } else {
        const arr = addDiffTimesRecord;
        arr[arr.length - 1] = arr[arr.length - 1] + 1;
        setAddDiffTimesRecord(arr);
        setMaxBoxQuantity(maxBoxQuantity + diffValue);
      }
      setN(n + 1);
    }
    createRandomNumberArr(boxQuantity + 1);
    if (isAllowedHandle) setIsAllowedHandle(false);
  }

  // 休眠
  async function sleep(ms: number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });
  }
  // 更改背景颜色
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

  async function highlight(index: number) {
    await sleep(1);
    const targetBox = document.querySelector('#box' + index);
    if (targetBox) {
      targetBox.classList.add(styles.highlight);
      await sleep(200);
      targetBox.classList.remove(styles.highlight);
    }
  }

  async function turnover(index: number) {
    await sleep(1);
    const targetBox = document.querySelector('#box' + index);
    console.log(targetBox);
    if (targetBox) {
      revealSoundRef.current && revealSoundRef.current.play();
      targetBox.classList.add(styles.turnover);
      await sleep(200);
      targetBox.classList.remove(styles.turnover);
      backSoundRef.current && backSoundRef.current.play();
    }
  }
  async function shake(index: number) {
    await sleep(1);
    const targetBox = document.querySelector('#box' + index);
    if (targetBox) {
      targetBox.classList.add(styles.highlight);
      await sleep(200);
      targetBox.classList.remove(styles.highlight);
    }
  }

  function createRandomNumberArr(quantity = boxQuantity) {
    const totalIndex = n * n - 1;
    const arr: number[] = [];
    while (arr.length < quantity) {
      const randomNumber = Math.round(Math.random() * totalIndex);
      if (arr.includes(randomNumber)) {
        continue;
      } else {
        arr.push(randomNumber);
      }
    }
    setRandomNumberArr(arr);
    showTargetBox();
  }
  useEffect(() => {
    createRandomNumberArr();
  }, []);

  function classNameComputed(index: number) {
    return `${styles.eachBox} ${
      userClickedArr.includes(index)
        ? randomNumberArr.includes(index)
          ? styles.whiteBox
          : styles.wrongBox
        : ''
    } }`;
  }

  function Gaming() {
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <div className={styles.gameStatus}>
          当前关卡:<i>{boxQuantity - 2}</i>
          生命值:{' '}
          {new Array(3).fill(null).map((v, index) => (
            <span className={lifeQuantity > index ? styles.alive : ''}>
              {icons.Heart()}
            </span>
          ))}
        </div>
        <div
          className={styles.box}
          style={{
            gridTemplateRows: `repeat(${n},1fr)`,
            gridTemplateColumns: `repeat(${n},1fr)`,
          }}
        >
          {new Array(n * n).fill(null).map((v, index) => (
            <div
              className={classNameComputed(index)}
              key={index}
              id={`box${index}`}
              onClick={() => handleClick(index)}
            ></div>
          ))}
        </div>
      </div>
    );
  }
  function Result() {
    return (
      <div className={styles.result}>
        {icons.Block()}
        <h1>等级：{boxQuantity - 2}</h1>
        <button className="tryAgainBtn" onClick={() => restart()}>
          再来一次
        </button>
      </div>
    );
  }

  return (
    <div className={`${styles.playground} playground`} ref={playgroundRef}>
      {state === GAMING ? <Gaming></Gaming> : <Result></Result>}
      <audio src="/HumanTesting/audios/reveal.mp3" ref={revealSoundRef}></audio>
      <audio src="/HumanTesting/audios/back.mp3" ref={backSoundRef}></audio>
      <audio src="/HumanTesting/audios/boop.mp3" ref={boopSoundRef}></audio>
    </div>
  );
}
