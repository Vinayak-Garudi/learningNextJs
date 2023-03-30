import axios from "axios"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

const profile = () => {
  const router = useRouter()
  const [brand, setBrand] = useState("")

  const url = `https://dummyjson.com/products/1`
  useEffect(() => {
    axios.get(url).then(res => {
      console.log(res.data.brand)
      setBrand(res.data.brand)
    })
  }, [url])
  return (
    <>
      <div className="profile-container">
        <h1>Profile</h1>
        <h3>{brand}</h3>
        <button onClick={() => router.push(`/nested/${brand}`)}>apple detail</button>
      </div>
    </>
  )
}

export default profile