import styles from './index.less';
import { useState, useRef, useEffect, KeyboardEvent } from 'react';
export default function NumberGame({ restart }: { restart: Function }) {
  const SHOWING = 'showing';
  const TYPING = 'typing';
  const PASSED = 'passed';
  const FAILED = 'failed';
  const [state, setState] = useState(SHOWING);

  const [level, setLevel] = useState(1);
  const [num, setNum] = useState('');

  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const progressFluidRef = (node: HTMLDivElement | null) =>
    node && setTimeout(() => node.classList.add(styles.zero), 100);
  const inputDomRef = useRef<HTMLInputElement | null>();
  const inputRef = (node: HTMLInputElement | null) => {
    if (node) {
      node.focus();
      inputDomRef.current = node;
    }
  };
  function createRandomNum(length = level) {
    let tempNum = '';
    for (let i = 1; i <= length; i++) {
      tempNum += Math.floor(Math.random() * 10);
    }
    setNum(tempNum);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(
      () => {
        setState(TYPING);
      },
      length + 2 < 4 ? 4000 : (length + 2) * 1000,
    );
  }
  function handleKeyup(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      if ((e.target as HTMLInputElement).value === num) {
        setState(PASSED);
      } else {
        setState(FAILED);
      }
    }
  }
  function submit() {
    if (inputDomRef.current) {
      if (inputDomRef.current.value === num) {
        setState(PASSED);
      } else {
        setState(FAILED);
      }
    }
  }
  function nextLevel() {
    setLevel(level + 1);
    setState(SHOWING);
    createRandomNum(level + 1);
  }
  useEffect(() => {
    createRandomNum();
  }, []);
  useEffect(() => {
    console.log(num);
  });
  function Showing() {
    return (
      <div className={styles.progress}>
        <h1>{num}</h1>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFluid}
            ref={progressFluidRef}
            style={{
              transition: `all ${level + 2 < 4 ? 3.8 : level + 1.8}s linear`,
            }}
          ></div>
        </div>
      </div>
    );
  }
  function Typing() {
    return (
      <div className={styles.typing}>
        <h1>请输入你看到的数字：</h1>
        <h2>可以按Enter回车键提交</h2>
        <input
          className={styles.input}
          type="text"
          maxLength={level}
          ref={inputRef}
          onKeyUp={handleKeyup}
        />
        <button onClick={submit} className={styles.nextBtn}>
          提交
        </button>
      </div>
    );
  }
  function Passed() {
    useEffect(() => {
      const keyup = (e: any) => {
        if (e.key === 'Enter') nextLevel();
      };
      document.addEventListener('keyup', keyup);
      return () => {
        document.removeEventListener('keyup', keyup);
      };
    }, []);
    return (
      <div className={styles.passed}>
        <h3>正确答案：</h3>
        <h2>{num}</h2>
        <h3>你的答案：</h3>
        <h2>{num}</h2>
        <h1>当前等级：{num.length}</h1>
        <button onClick={nextLevel}>继续</button>
      </div>
    );
  }
  function Failed() {
    return (
      <div className={styles.failed}>
        <h3>正确答案：</h3>
        <h2>{num}</h2>
        <h3>你的答案：</h3>
        <h2>{num}</h2>
        <h1>当前等级：{num.length}</h1>
        <button className="tryAgainBtn" onClick={() => restart()}>
          重新开始
        </button>
      </div>
    );
  }
  function render() {
    switch (state) {
      case SHOWING:
        return <Showing></Showing>;
      case TYPING:
        return <Typing></Typing>;
      case PASSED:
        return <Passed></Passed>;
      case FAILED:
        return <Failed></Failed>;
      default:
        return null;
    }
  }
  return <div className={`playground`}>{render()}</div>;
}
