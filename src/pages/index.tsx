import Topbar from '@/components/topbar';
import Footer from '@/components/footer';
import { FC } from 'react'
export default function Index(props: { children: FC }) {
  return (
    <div>
      <Topbar></Topbar>
      {props.children}
      <Footer></Footer>
    </div>
  )
}