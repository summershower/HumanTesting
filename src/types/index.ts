import { FC } from 'React'

export type IIcon = "HugeLighting" | "Lighting" | "Block" | "Aim" | "Number" | "Verbal" | "Chimp" | "Typing"

export interface IPlaygroundProps {
  title: string,
  desc: string,
  icon: FC,
  link?: string,
  hideBtn?: boolean,
}