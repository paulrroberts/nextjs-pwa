export async function GET(request) {
    return new Response(JSON.stringify({ message: "You've reached the GET endpoint for the PWA POC" }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    })
}

export async function POST(req, res) {
    const body = await req.json()
    await res.revalidate('/nuskin/isr')
    return new Response(JSON.stringify({ receivedData: body }), {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
    })
}
