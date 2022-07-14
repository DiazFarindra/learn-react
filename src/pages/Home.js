import { useEffect } from "react"

export default function Home()
{
    useEffect(() => {
        document.title = 'Home'

        return () => {
            document.title = ''
        }
    })

    return (
        <section>
            <h1>welcome to my page</h1>
            <p>lorem impsum dolor sit amet</p>
        </section>
    )
}