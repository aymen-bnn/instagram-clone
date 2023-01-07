import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "../components/Header"
import Feed from "../components/Feed"
import Modal from "../components/Modal"
export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Instagram</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header/>
      {/* Feed */}
      <Feed/>
      {/* Model */}
      <Modal/>
    </div>
  )
}
