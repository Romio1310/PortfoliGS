import Image from "next/image";

type faviconType = {
  domain: string;
  alt: string;
};

export default function Favicon({ domain }: faviconType) {
  function extractDomain(url: string) {
    if (!url) return "";
    
    const match = url.match(
      /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/.\n]+\.[a-z]{2,})(?:\/|$)/i
    );
    if (match) {
      const fullDomain = match[1];
      const parts = fullDomain.split(".");
      if (parts.length >= 2) {
        return parts[0];
      }
    }
    return "";
  }

  // Use a fallback image if domain is undefined
  const faviconUrl = domain 
    ? `http://www.google.com/s2/favicons?domain=${domain}`
    : `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3C/svg%3E`;

  return (
    <Image
      className="mr-2"
      src={faviconUrl}
      width={17}
      height={17}
      alt={domain ? extractDomain(domain) : ""}
    />
  );
}
