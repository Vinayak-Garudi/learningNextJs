import Link from "next/link"
import { useRouter } from "next/router"

const nestName = () => {
  const router = useRouter()
  const NestName = router.query.nestName
  return (
    <>
      <Link href={'/'}>Home</Link>
      <div>inside {NestName}</div>
      <button onClick={() => router.push('/')}>Home</button>
    </>

  )
}

export default nestName