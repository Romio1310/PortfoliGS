// Environment variables for Sanity configurations with fallbacks
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '7vd3t7cq'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-05-28'
export const token = process.env.NEXT_PUBLIC_SANITY_ACCESS_TOKEN || 'skwg4ObtEPpMYC9fMiVGBM8zjPIhQVUAplMC5F81zLFUjYQOxowMgoMIff6aFF5Rk2NUTRXHW2mNoY9bvkUxIzFnaKfdBVjfr6N6OMLzOdIA15Q4yqyRdUiB7Tq5MOojBvcV4RpPwDU8M42suu6p3UapX8I38gnN31eeJWN2JgJbHG9VdmLj'

// Additional configuration settings
export const mode = process.env.NODE_ENV || 'development'
export const useCdn = mode === 'production'

export const hookSecret = process.env.SANITY_HOOK_SECRET || process.env.NEXT_PUBLIC_SANITY_HOOK_SECRET;

export const giscusRepoId = checkValue(
  process.env.NEXT_PUBLIC_GISCUS_REPOID,
  "NEXT_PUBLIC_GISCUS_REPOID",
  "https://giscus.app/"
);

export const giscusCategoryId = checkValue(
  process.env.NEXT_PUBLIC_GISCUS_CATEGORYID,
  "NEXT_PUBLIC_GISCUS_CATEGORYID",
  "https://giscus.app/"
);

export const umamiSiteId = checkValue(
  process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID,
  "NEXT_PUBLIC_UMAMI_WEBSITE_ID",
  "https://umami.is"
);

// Validate env varaibles
function checkValue<T>(
  value: T | undefined,
  errorMsg: string,
  url?: string
): T {
  if (value === undefined) {
    throw new Error(
      `Missing Environment Variable: ${errorMsg}\n\nVist ${url} to learn how you can generate your own API keys`
    );
  }
  return value;
}
