import Image from 'next/image'
import styles from '../styles/Test.module.scss'

export default function Test() {
  return (
    <div className={`${styles['slider']}`}>
      <div className={`${styles['slide-track']}`}>
        <div className={`${styles['slide']}`}>
          <Image src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
        </div>
        {/* <div className={`${styles['slide']}`}>
          <Image src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
        </div> */}
        <div className={`${styles['slide']}`}>
          <Image src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
        </div>
        {/* <div className={`${styles['slide']}`}>
          <Image src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
        </div> */}
        {/* <div className={`${styles['slide']}`}>
          <Image src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
        </div> */}
        
        
        {/* <div className={`${styles['slide']}`}>
          <Image src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
        </div>
        <div className={`${styles['slide']}`}>
          <Image src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
        </div>
        <div className={`${styles['slide']}`}>
          <Image src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
        </div> */}
        
        
      </div>
    </div>
  )
}