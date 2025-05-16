/**
 * This configuration is used to for the Sanity Studio that's mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { codeInput } from '@sanity/code-input'
import { table } from '@sanity/table'

// Get environment variables
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '7vd3t7cq'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-05-28'

export default defineConfig({
  name: 'gurdeep-singh-portfolio',
  title: 'gurdeepsingh.tech',
  basePath: '/studio',
  projectId,
  dataset,
  apiVersion,
  plugins: [deskTool(), visionTool(), codeInput(), table()],
  schema: { types: schemaTypes },
})
