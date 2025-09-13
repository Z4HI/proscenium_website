import { NextResponse } from 'next/server'

const BUNDLE_ID = 'com.z4hi.proscenium'

const association = {
  applinks: {
    apps: [],
    details: [
      {
        appID: `${BUNDLE_ID}`,
        paths: ['*', '/', '/redirect', '/onboarding/*'],
      },
    ],
  },
}

export async function GET() {
  return NextResponse.json(association, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}