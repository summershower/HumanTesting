import styles from './index.less';
import { useState, useRef, useEffect, useMemo } from 'react';
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
    console.log(currentWordsArr.indexOf(currentWord), randomIndex);
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
    console.log(currentWordsArr);
    return (
      <div>
        生命：{lifeQuantity}
        <h1>{currentWord}</h1>
        <h1>{score}</h1>
        <button onClick={seen}>看过了</button>
        <button onClick={haveNotSeen}>莫得看过</button>
      </div>
    );
  }
  function Result() {
    return (
      <div>
        <h1>{score}个单词</h1>
        <button onClick={() => restart()}>remake</button>
      </div>
    );
  }
  return <div>{state === GAMING ? <Gaming></Gaming> : <Result></Result>}</div>;
}
