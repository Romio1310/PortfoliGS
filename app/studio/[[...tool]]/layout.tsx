import { metadata as studioMetadata, viewport as studioViewport } from 'next-sanity/studio'

// Re-export the studio metadata separately in a server component
export const metadata = studioMetadata
export const viewport = studioViewport

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full">
      {children}
    </div>
  )
}