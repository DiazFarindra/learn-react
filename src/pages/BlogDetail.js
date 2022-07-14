import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function BlogDetail()
{
    const [api, setApi] = useState({})
    const [loading, setLoading] = useState(true)
    const [notFound, setnotFound] = useState(false)
    const params = useParams()

    useEffect(() => {
        async function fetchData()
        {
            const get = await fetch('https://api.spaceflightnewsapi.net/v3/articles/' + params.id)

            if (! get.ok) {
                setLoading(false)
                return setnotFound(true)
            }

            const res = await get.json()

            setApi(res)
            setLoading(false)
        }

        fetchData()

        document.title = loading ? 'loading ...' : api.title
    }, [params, api, loading])

    if (notFound) {
        return <h1>Page not found - 404</h1>
    }

    return (
        <section>
            <h1>Blog</h1>

            {loading && (<i>loading ...</i>)}

            {!loading && (
                <div>
                    <article>
                        <h5>{ api.title }</h5>
                        <time>{new Date(api.publishedAt).toLocaleDateString()}</time>
                        <br />
                        <img src={api.imageUrl} alt={api.title} loading={'lazy'} />
                        <p>{ api.summary }</p>
                        <cite><a href={api.url} target={'_blank'} rel={'noreferrer'}>{ api.newsSite }</a></cite>
                    </article>
                </div>
            )}
        </section>
    )
}