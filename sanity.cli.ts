/**
 * This configuration file lets you run `$ sanity [command]` from within this directory
 */
import { defineCliConfig } from 'sanity/cli'

// Get environment variables with fallbacks
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '7vd3t7cq'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  }
})
