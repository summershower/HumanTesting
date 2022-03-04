import styles from './index.less';
import { IPlaygroundProps } from '@/types';
import { useState } from 'react';
import { useLocation } from 'umi';
import PlaygroundIntro from '@/components/Playground/PlaygroundIntro';
import ReactionTimeGame from '@/components/Playground/Games/ReactionTimeGame';
import SequenceMemoryGame from '@/components/Playground/Games/SequenceMemoryGame';
import AimTrainerGame from '@/components/Playground/Games/AimTrainerGame';
import ChimpGame from '@/components/Playground/Games/ChimpGame';
import VisualMemoryGame from '@/components/Playground/Games/VisualMemoryGame';

export default function Playground(props: IPlaygroundProps) {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const { pathname } = useLocation();
  const gamesRender = () => {
    if (isGameStarted || !props.intro) {
      switch (pathname) {
        case '/reactiontime':
          return <ReactionTimeGame></ReactionTimeGame>;
        case '/sequencememory':
          return (
            <SequenceMemoryGame
              restart={() => setIsGameStarted(false)}
            ></SequenceMemoryGame>
          );
        case '/aimtrainer':
          return (
            <AimTrainerGame></AimTrainerGame>
          );
        case '/chimptest':
          return (
            <ChimpGame restart={() => setIsGameStarted(false)}></ChimpGame>
          );
        case '/visualmemory':
          return (
            <VisualMemoryGame restart={() => setIsGameStarted(false)}></VisualMemoryGame>
          );
      }
    } else {
      return (
        <PlaygroundIntro
          title={props.intro.title}
          desc={props.intro.desc}
          icon={props.intro.icon}
          link={props.intro.link || undefined}
          startGame={() => setIsGameStarted(true)}
        ></PlaygroundIntro>
      );
    }
  };
  return <div className={styles.playground} style={{ cursor: !props.intro ? "pointer" : "default" }} onClick={() => { !props.intro && setIsGameStarted(true) }}>{gamesRender()}</div>;
}
