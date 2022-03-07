import styles from './index.less';
import { useState, useRef, useEffect, useMemo } from 'react';
import Icons from '@/components/Icons';
export default function VerbalGame({ restart }: { restart: Function }) {
  const words = useMemo(() => {
    const wordTxt = require('@/static/words/wordsEn.txt');
    const wordsArr = wordTxt.default.split('\r\n');
    return wordsArr;
  }, []);

  const GAMING = 'gaming';
  const RESULT = 'result';
  const [state, setState] = useState(GAMING);
  const [lifeQuantity, setLifeQuantity] = useState(3);
  const [score, setScore] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [currentWordsArr, setCurrentWordsArr] = useState<string[]>([]);

  useEffect(() => {
    addANewWord();
  }, []);

  function addANewWord() {
    let randomIndex = Math.floor(Math.random() * 109185);
    let newWord = words[randomIndex];
    while (currentWordsArr.includes(newWord)) {
      randomIndex = Math.floor(Math.random() * 109185);
      newWord = words[randomIndex];
    }
    setCurrentWordsArr([...currentWordsArr, newWord]);
    setCurrentWord(newWord);
  }
  function selectAnOldWord() {
    let randomIndex = Math.floor(Math.random() * currentWordsArr.length);
    while (currentWordsArr.indexOf(currentWord) === randomIndex) {
      randomIndex = Math.floor(Math.random() * currentWordsArr.length);
    }
    setCurrentWord(currentWordsArr[randomIndex]);
  }
  function seen() {
    if (currentWordsArr.indexOf(currentWord) !== currentWordsArr.length - 1) {
      setScore(score + 1);
      next();
    } else {
      if (lifeQuantity > 1) {
        setLifeQuantity(lifeQuantity - 1);
        next();
      } else {
        setState(RESULT);
      }
    }
  }
  function haveNotSeen() {
    if (currentWordsArr.indexOf(currentWord) === currentWordsArr.length - 1) {
      setScore(score + 1);
      next();
    } else {
      if (lifeQuantity > 1) {
        setLifeQuantity(lifeQuantity - 1);
        next();
      } else {
        setState(RESULT);
      }
    }
  }
  function next() {
    if (currentWordsArr.length < 2) {
      addANewWord();
    } else {
      const randomNum = Math.random();
      if (randomNum > 0.4) {
        addANewWord();
      } else {
        selectAnOldWord();
      }
    }
  }
  function Gaming() {
    return (
      <div className={styles.gaming}>
        <h2>
          生命值：<i>{lifeQuantity}</i> 分数： <i>{currentWordsArr.length}</i>
        </h2>
        <h1>{currentWord}</h1>
        <p>请问本轮出现过这个单词吗？</p>
        <div className={styles.buttons}>
          <button className="continueBtn" onClick={seen}>
            出现过
          </button>
          <button className="continueBtn" onClick={haveNotSeen}>
            没出现过
          </button>
        </div>
      </div>
    );
  }
  function Result() {
    return (
      <div className={styles.result}>
        {Icons.Verbal()}
        <h1>{score}个单词</h1>
        <button className="tryAgainBtn" onClick={() => restart()}>
          再试一次
        </button>
      </div>
    );
  }
  return (
    <div className="playground">
      {state === GAMING ? <Gaming></Gaming> : <Result></Result>}
    </div>
  );
}
