import styles from './index.module.scss'

export default function Footer() {
  return (
    <div className="flex justify-center items-center min-h-screen text-6xl sm:text-8xl">
      <div>
        <p><span text="Know It" className={`relative inline-block text-transparent before:text-blue-500 before:absolute before:top-0 before:left-0 before:w-0 before:whitespace-nowrap before:overflow-hidden before:content-[attr(text)]  before:border-r-2 before:border-green-500 ${styles['animate-text-1']}`}>Know It</span></p>
        <p className='mt-1'><span text="Know Yourself" className={`relative inline-block text-transparent before:text-blue-500 before:absolute before:top-0 before:left-0 before:w-0 before:whitespace-nowrap before:overflow-hidden before:content-[attr(text)] before:border-r-2 before:border-green-500 ${styles['animate-text-2']}`}>Know Yourself</span></p>
      </div>
    </div>
  )
}