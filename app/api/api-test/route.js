import { NextResponse } from 'next/server'

export async function GET(request) {
    return new Response(JSON.stringify({ message: "You've reached the GET endpoint for the PWA POC" }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    })
}

export async function POST(req, res) {
    try {
        // const { path } = await request.json() // Get the path to revalidate from the POST body.
        const path = '/nuskin/isr'

        // Trigger revalidation for the given path.
        await res.revalidate(path)

        return NextResponse.json({ message: `Revalidation triggered for ${path}` }, { status: 200 })
    } catch (error) {
        console.error('Error during revalidation:', error)
        return NextResponse.json({ error: 'Failed to revalidate' }, { status: 500 })
    }
}
