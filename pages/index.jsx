import { useRouter } from "next/router"
import styles from '../styles/index.module.css'

const index = () => {
  const router = useRouter()
  return (
    <>
      <div className={styles.indexContainer}>
        {/* for adding multiple classNames like that in bootstrap */}
        <h1 className={`${styles.heading} ${styles.heading_main}`}>Hello World</h1>
        <p> Directly Targetting Tags</p>
        {/* the difference between router.push and router.replace */}
        {/* router.push stores the url history i.e. you can go back */}
        {/* router.replace replaces the url resulting in no option of going back or front */}
        <button onClick={() => router.replace('/nested/custom')}>Custom Nest</button>
        <button onClick={() => router.replace('/error')}>Error Page</button>
      </div>
    </>
  )
}

export default index