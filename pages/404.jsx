import { useRouter } from "next/router"
import { useEffect } from "react"

const errorPage = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.back()
        }, 3000)
    }, [])
    return (
        <>
            <div className="error-container">
                404 page not found
                <button onClick={() => router.back()}>Go back</button>
            </div>
        </>
    )
}

export default errorPage