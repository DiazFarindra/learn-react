import { useEffect } from "react"

export default function Profile()
{
    useEffect(() => {
        document.title = 'Profile'

        return () => {
            document.title = ''
        }
    })

    return <h1>Profile Page</h1>
}