import { NextResponse } from 'next/server'

const BUNDLE_ID = 'com.z4hi.proscenium' // Your actual Apple app bundle ID

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
    },
  })
}
