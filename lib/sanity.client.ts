/**
 * Core Sanity client for data fetching
 */
import { createClient } from 'next-sanity'
import { projectId, dataset, apiVersion, token } from './env.api'

// Create the main Sanity client
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false for real-time data
  token,
  perspective: 'published',
  stega: {
    enabled: false,
  },
})

// Type-safe fetch function with proper typing
export async function sanityFetch<T>({ 
  query, 
  params = {}, 
  tags = [] 
}: { 
  query: string; 
  params?: Record<string, any>; 
  tags?: string[]; 
}): Promise<T | null> {
  try {
    const result = await client.fetch<T>(query, params, {
      cache: 'no-store', // Always fetch fresh data
      next: { tags }
    })
    return result
  } catch (error) {
    console.error('Sanity fetch error:', error)
    // Return null instead of throwing to prevent rendering failures
    return null
  }
}
