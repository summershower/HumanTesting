import styles from './index.less'
import { IPlaygroundProps } from '@/types'
import { useState } from 'react'
import { useLocation } from 'umi'
import PlaygroundIntro from '@/components/Playground/PlaygroundIntro'
import ReactionTimeGame from '@/components/Playground/Games/ReactionTimeGame'
import SequenceMemoryGame from '@/components/Playground/Games/SequenceMemoryGame'
export default function Playground(props: IPlaygroundProps) {
  const [isGameStarted, setIsGameStarted] = useState(false)
  const { pathname } = useLocation()
  const gamesRender = () => {
    if (isGameStarted) {
      switch (pathname) {
        case "/reactiontime":
          return (
            <ReactionTimeGame></ReactionTimeGame>
          );
        case "/sequencememory":
          return (
            <SequenceMemoryGame></SequenceMemoryGame>
          );
      }

    } else {
      return (
        <PlaygroundIntro title={props.intro.title} desc={props.intro.desc} icon={props.intro.icon} link={props.intro.link || undefined} startGame={() => setIsGameStarted(true)}></PlaygroundIntro>
      )
    }
  }
  return (
    <div className={styles.playground}>
      {gamesRender()}
    </div>
  )
}