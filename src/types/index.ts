import { FC } from 'React'

export type IIcon = "HugeLighting" | "Lighting" | "Block" | "Aim" | "Number" | "Verbal" | "Chimp" | "Typing"

export interface IPlaygroundProps {
  intro?: IPlaygroundIntroProps
}
export interface IPlaygroundIntroProps {
  title: string,
  desc: string,
  icon: FC,
  link?: string,
  startGame?: Function
}

export interface IGamesStatisticsProps {
  pic: string
}

export interface IGamesIntroProps {
  desc: string
}

export interface IGamesInfoProps {
  info: {
    pic: string,
    desc: string
  }
}