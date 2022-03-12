import styles from './index.module.scss'
export default function Heading() {
  return (
    <div className={`flex justify-center flex-col min-h-screen gap-y-10 ${styles['intro-section']} text-center text-6xl sm:text-8xl lg:text-9xl font-medium`}>
      <div>
        <span className={`${styles['span-container']} ${styles['span-1']} relative inline-block before:content-['Leadership'] before:text-stone-600 before:absolute before:top-0 before:left-0 before:w-full before:overflow-hidden `}>Leadership</span>
      </div>
      <div>
        <span className={`${styles['span-container']} ${styles['span-2']} relative inline-block before:content-['Innovation'] before:text-stone-600 before:absolute before:top-0 before:left-0 before:w-full before:overflow-hidden`}>Innovation</span>
      </div>
      <div>
        <span className={`${styles['span-container']} ${styles['span-3']} relative inline-block before:content-['Enthusiasm'] before:text-stone-600 before:absolute before:top-0 before:left-0 before:w-full before:overflow-hidden`}>Enthusiasm</span>
      </div>
    </div>
  )
}