import { getSuggestions } from '../../../utils/util'

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = false // or true, to 404 on unknown paths

export default async function Page() {
    const suggestions = await getSuggestions()
    return (
        <div>
            {suggestions.map((suggestion) => (
                <div key={suggestion.id}>
                    <p>Title: {suggestion.title}</p>
                    <p>Description: {suggestion.description}</p>
                </div>
            ))}
        </div>
    )
}
