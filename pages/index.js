import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Index.module.scss'

export default function Home() {
  return (
    <Layout>
      <div className={`flex justify-center flex-col min-h-screen gap-y-6 ${styles['intro-section']} text-center text-8xl`}>
        <div>
          <span className={`${styles['span-container']} ${styles['span-1']} relative inline-block before:content-['Hello'] before:text-black before:absolute before:top-0 before:left-0 before:w-full before:overflow-hidden `}>Hello</span>
        </div>
        <div>
          <span className={`${styles['span-container']} ${styles['span-2']} relative inline-block before:content-['I_am'] before:text-black before:absolute before:top-0 before:left-0 before:w-full before:overflow-hidden`}>I am</span>
        </div>
        <div>
          <span className={`${styles['span-container']} ${styles['span-3']} relative inline-block before:content-['Jet'] before:text-black before:absolute before:top-0 before:left-0 before:w-full before:overflow-hidden`}>Jet</span>
        </div>
      </div>
    </Layout>
  )
}
