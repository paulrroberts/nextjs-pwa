// app/api/revalidate/route.js
import { NextResponse } from 'next/server'

export async function POST(request) {
    try {
        const { path } = await request.json() // Get the path to revalidate from the POST body.

        // Trigger revalidation for the given path.
        // eslint-disable-next-line no-undef
        await res.revalidate(path)

        return NextResponse.json({ message: `Revalidation triggered for ${path}` }, { status: 200 })
    } catch (error) {
        console.error('Error during revalidation:', error)
        return NextResponse.json({ error: 'Failed to revalidate' }, { status: 500 })
    }
}
