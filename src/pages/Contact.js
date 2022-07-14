import { useEffect } from "react"

export default function Contact()
{
    useEffect(() => {
        document.title = 'Contact'

        return () => {
            document.title = ''
        }
    })

    return <h1>Contact Page</h1>
}