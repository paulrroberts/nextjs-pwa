// app/api/revalidate/route.js
import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { isNull } from '@nuskin/uncle-buck'

export async function POST(request) {
    console.log(request)
    if (request.headers.get('Authorization') !== `JWT ${process.env.REVALIDATE_SECRET}`) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

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
