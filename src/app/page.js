import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

const getData = async()=>{
  const res = await fetch('http://localhost:3000/api/project-details/')
  return res.json()
}
export default async function Home() {

  const data = await getData();

  return (
    <div >

      {data.map((project)=><div key={project.leadId
      }>{project.leadName}</div>)}

    </div>
  )
}
