export async function GET(request) {
    return new Response(JSON.stringify({ message: "You've reached the GET endpoint for the PWA POC" }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    })
}

export async function POST(request) {
    const body = await request.json()
    return new Response(JSON.stringify({ receivedData: body }), {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
    })
}
