// app/api/revalidate/route.js
import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { isNull } from '@nuskin/uncle-buck'

export async function POST(request) {
    try {
        let { path } = await request.json() // Get the path to revalidate from the POST body.
        if (isNull(path)) {
            path = '/nuskin/isr'
        }

        revalidatePath(path)
        return NextResponse.json({ message: `Revalidation triggered for ${path}` }, { status: 200 })
    } catch (error) {
        console.error('Error during revalidation:', error)
        return NextResponse.json({ error: 'Failed to revalidate' }, { status: 500 })
    }
}
