// app/api/revalidate/route.js
import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(request, res) {
    try {
        const { path } = await request.json() // Get the path to revalidate from the POST body.
        revalidatePath(path)

        // Trigger revalidation for the given path.
        // await res.revalidate(path)

        return NextResponse.json({ message: `Revalidation triggered for ${path}` }, { status: 200 })
    } catch (error) {
        console.error('Error during revalidation:', error)
        return NextResponse.json({ error: 'Failed to revalidate' }, { status: 500 })
    }
}
