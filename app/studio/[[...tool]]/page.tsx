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
import { Suspense, useEffect } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'

export const dynamic = 'force-static'

// Metadata is now imported in layout.tsx to prevent client directive errors
// export { metadata, viewport } from 'next-sanity/studio'

// Patch the global object to provide a motion.create function that Sanity expects
function PatchSanityMotion() {
  useEffect(() => {
    // Only run in browser
    if (typeof window !== 'undefined') {
      // Add the motion.create method to the global framer-motion if it doesn't exist
      const framerMotion = require('framer-motion');
      if (framerMotion.motion && !framerMotion.motion.create) {
        framerMotion.motion.create = function(Component: any) {
          return framerMotion.motion(Component);
        };
      }
    }
  }, []);
  
  return null;
}

// Wrap the studio in a Suspense boundary for better loading experience
export default function StudioPage() {
  return (
    <LazyMotion features={domAnimation} strict>
      <PatchSanityMotion />
      <Suspense fallback={<div>Loading Sanity Studio...</div>}>
        <NextStudio config={config} />
      </Suspense>
    </LazyMotion>
  )
}
