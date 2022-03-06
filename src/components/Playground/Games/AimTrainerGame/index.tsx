import styles from './index.less';
import { useState, useRef, useEffect } from 'react';
import icons from '@/components/Icons';
export default function AimTrainerGame() {
  const GUIDING = 'guiding';
  const GAMING = 'gaming';
  const RESULT = 'result';
  const [state, setState] = useState(GUIDING);
  const [hitCount, setHitCount] = useState(30);
  const [score, setScore] = useState(0);

  const battlefieldRef = useRef<HTMLDivElement | null>(null);

  const [startTimestramp, setStartTimestramp] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // 创建随机坐标
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  useEffect(() => {
    createRandomPosition();
  }, []);
  function createRandomPosition() {
    if (battlefieldRef.current) {
      const { height, width } = battlefieldRef.current.getBoundingClientRect();
      let randomX = 0,
        randomY = 0;
      while (randomX < 80 || randomX > width - 80) {
        randomX = Math.round(Math.random() * width);
      }
      while (randomY < 80 || randomY > height - 80) {
        randomY = Math.round(Math.random() * height);
      }
      setX(randomX);
      setY(randomY);
    }
  }

  function start() {
    setStartTimestramp(Date.now());
    setState(GAMING);
  }
  function restart() {
    setHitCount(30);
    setState(GUIDING);
  }

  function Aim() {
    return (
      <div
        className={styles.aim}
        onClick={hit}
        style={{ left: x, top: y }}
      ></div>
    );
  }
  function hit() {
    if (audioRef.current) {
      audioRef.current!.play();
    }
    if (hitCount >= 1) {
      setHitCount(hitCount - 1);
      createRandomPosition();
    } else {
      setScore(Math.round((Date.now() - startTimestramp) / 30));
      setHitCount(hitCount - 1);
      setState(RESULT);
    }
  }
  function Guiding() {
    return (
      <div className={styles.guiding}>
        <h1>打靶训练场</h1>
        <div
          className={styles.icon}
          onClick={() => {
            state === GUIDING && start();
          }}
        >
          {icons.Aim()}
        </div>
        <p>请用最快的速度击中30个靶子</p>
        <p>点击上方的靶子开始游戏</p>
      </div>
    );
  }
  function Gaming() {
    return (
      <div className={styles.battlefield} ref={battlefieldRef}>
        <h2>
          剩余:<i>{hitCount}</i>个
        </h2>
        <Aim></Aim>
      </div>
    );
  }
  function Result() {
    return (
      <div className={styles.result}>
        {icons.Aim()}
        <p>平均每个靶子击中时间</p>

        <h1>{score}ms</h1>
        <button className="tryAgainBtn" onClick={restart}>
          重新开始
        </button>
      </div>
    );
  }
  function render() {
    switch (state) {
      case GUIDING:
        return <Guiding></Guiding>;
      case GAMING:
        return <Gaming></Gaming>;
      case RESULT:
        return <Result></Result>;
      default:
        return null;
    }
  }
  return (
    <div className={`${styles.playground} playground onlyPC`}>
      {render()}
      <audio ref={audioRef} src="/HumanTesting/audios/shoot.mp3"></audio>
    </div>
  );
}
