import styles from './index.module.scss'

export default function Footer() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <p className={`uppercase relative text-6xl before:content-['Hello'] before:text-blue-500 before:absolute before:top-0 before:left-0 before:w-0 before:overflow-hidden before:border-r-2 before:border-r-red-400 ${styles['animate-text']} `}>Hello</p>
    </div>
  )
}