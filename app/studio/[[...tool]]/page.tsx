'use client'

/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'
import { Suspense } from 'react'

export const dynamic = 'force-static'

// Metadata is now imported in layout.tsx to prevent client directive errors
// export { metadata, viewport } from 'next-sanity/studio'

// Wrap the studio in a Suspense boundary for better loading experience
export default function StudioPage() {
  return (
    <Suspense fallback={<div>Loading Sanity Studio...</div>}>
      <NextStudio config={config} />
    </Suspense>
  )
}
