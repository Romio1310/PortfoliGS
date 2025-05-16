import { createClient } from 'next-sanity'

// Use the same environment variables or fallbacks
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '7vd3t7cq'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-05-28'
const token = process.env.NEXT_PUBLIC_SANITY_ACCESS_TOKEN || process.env.SANITY_ACCESS_TOKEN

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
  perspective: "published",
  stega: {
    enabled: false,
  },
})
