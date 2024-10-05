import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  const url = new URL(request.url)
  const path = url.pathname

  if (path === '/') {
    redirect('/store')
  }

  return new Response()
}