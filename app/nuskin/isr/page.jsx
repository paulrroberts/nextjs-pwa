import { getSuggestions } from '../../../utils/util'

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
// export const dynamicParams = false // or true, to 404 on unknown paths

export default async function Page() {
    const suggestions = await getSuggestions()
    return (
        <div className="p-5 bg-white">
            <div className="text-2xl mb-3">Incremental Static Regeneration (ISR) Example</div>
            <p className="mb-5">
                This screen pulls the suggestions entered in the{' '}
                <a className="underline" href="https://tools.dev.nuskin.io/internal/developer-portal/suggestions/">
                    Developer Portal
                </a>
                . When new suggestions are added this screen's content will automatically be updated without the need to rebuild this application.
            </p>
            <div className="text-xl font-bold mb-2 ">Dev Portal Suggestions</div>
            <div className="divide-y divide-current">
                {suggestions.map((suggestion) => (
                    <div key={suggestion.id} className="pb-3 pt-3">
                        <p>
                            <span className="font-semibold">Title:</span> {suggestion.title}
                        </p>
                        <p>
                            <span className="font-semibold">Description:</span> {suggestion.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
