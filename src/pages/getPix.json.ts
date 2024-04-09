import fetch from 'node-fetch'
import base64 from 'base-64'

export async function POST({ params, request }) {
	const dataValue = await request.json()
	const { value, metadata } = dataValue
	const response = await fetch('https://api.sqala.tech/core/v1/access-tokens', {
		headers: {
			Authorization:
				'Basic ' +
				base64.encode(
					'4e6978c6-31b2-46e0-b551-e93ec21606d0' +
						':' +
						'd0616b0d03dc63df4eac71f93ac15d3664f537fdbc144e7594816bf744c7b53e'
				),
			'Content-Type': 'application/json'
		},
		method: 'POST',
		body: JSON.stringify({
			refreshToken:
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6ImNyZWF0ZTpiYW5rLWFjY291bnQsY3JlYXRlOmJhbmstdHJhbnNmZXItcGF5bWVudCxjcmVhdGU6cGl4LXFyY29kZS1wYXltZW50LGNyZWF0ZTpyZWNpcGllbnQsY3JlYXRlOndpdGhkcmF3YWwscmVhZDpiYW5rLWFjY291bnQscmVhZDpiYW5rLXRyYW5zZmVyLXBheW1lbnQscmVhZDpwaXgtcXJjb2RlLXBheW1lbnQscmVhZDpyZWNpcGllbnQscmVhZDp0cmFuc2FjdGlvbixyZWFkOndpdGhkcmF3YWwiLCJpYXQiOjE3MDE4MTIzNzgsImV4cCI6MjAxNzE3MjM3OCwiYXVkIjoiNGU2OTc4YzYtMzFiMi00NmUwLWI1NTEtZTkzZWMyMTYwNmQwIiwic3ViIjoiYmViODJhMjYtOWMzNS00NTlhLTk5MjAtMDY4ZjA5OGViM2U1IiwianRpIjoiYWRjY2I3ZDAtOTBmNC00YzRiLTk3ZjQtNTU4ZDU4MDFmY2VlIn0.7LeUtmffbpKicGFYQLqIwt2sl-XnDKePpg0yJlgLB78'
		})
	})

	const data = await response.json()

	const pixRequest = await fetch('https://api.sqala.tech/core/v1/pix-qrcode-payments', {
		headers: {
			Authorization: 'Bearer ' + data.token,
			'Content-Type': 'application/json'
		},
		method: 'POST',
		body: JSON.stringify({ metadata, amount: value, type: 'STATIC' })
	})

	const pixData = await pixRequest.json()

	return new Response(JSON.stringify(pixData))
}
