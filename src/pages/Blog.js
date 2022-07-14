import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Blog()
{
    const [api, setApi] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData()
        {
            const get = await fetch('https://api.spaceflightnewsapi.net/v3/articles')
            const res = await get.json()

            setApi(res)
            setLoading(false)
        }

        fetchData()

        document.title = loading ? 'loading ...' : 'Blog'
    }, [loading])

    return (
        <section>
            <h1>Blog</h1>

            {loading && (<i>loading ...</i>)}

            {!loading && (
                <div>
                    { api.map((api) => {
                        return <article key={api.id}>
                            <h4><Link to={`/blog/${api.id}`}>{ api.title }</Link></h4>
                            <time>{new Date(api.publishedAt).toLocaleDateString()}</time>
                        </article>
                    }) }
                </div>
            )}
        </section>
    )
}