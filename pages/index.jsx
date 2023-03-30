import { useRouter } from "next/router"
import Image from "next/image"
import styles from '../styles/index.module.css'

const index = () => {
  const router = useRouter()
  return (
    <>
      <div className={styles.indexContainer}>
        {/* for adding multiple classNames like that in bootstrap */}
        <h1 className={`${styles.heading} ${styles.heading_main}`}>Hello World</h1>
        {/* inline css */}
        <p style={{ color: "red", fontWeight: "bold" }}> Directly Targetting Tags</p>
        {/* css by adding style jsx tag */}
        <h3>Hello Vinayak</h3>
        <style jsx>
          {`
          h3 {
            color: darkgreen;
          }
          `}
        </style>

        {/* the difference between router.push and router.replace */}
        {/* router.push stores the url history i.e. you can go back */}
        {/* router.replace replaces the url resulting in no option of going back or front */}

        {/* adding image in next is little different */}

        {/* to add img by url we need to add domain in next.config.js */}
        <Image src="https://imgs.search.brave.com/30XfZCHCseYCUxktceLOrL95flggyr2KK-nZb3i8IsE/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC52/dmNQTEFyVl9xem5Y/VnduY2dSRmJnSGFF/SyZwaWQ9QXBp" width="100" height="100" />

        {/* to add img from local folder add img to public folder */}
        <Image src={'/carimg.jpg'} width="100" height={'100'} />
        <div>
          <button onClick={() => router.replace('/nested/custom')}>Custom Nest</button>
          <button onClick={() => router.replace('/error')}>Error Page</button>
          <button onClick={() => router.push('/profile')}>Profile</button>
        </div>
      </div>
    </>
  )
}

export default index