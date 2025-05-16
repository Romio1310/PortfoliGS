import { Slide } from "../animation/Slide";
import Image from "next/image";
import { Metadata } from "next";
import PageHeading from "@/app/components/shared/PageHeading";

// Define your personal photos with improved structure including positioning options and dimensions
const personalPhotos = [
  {
    id: "1",
    src: "/images/photos/photo1.jpeg",
    alt: "Personal photo 1",
    position: "object-center",
    zoom: "hover:scale-105",
    aspectRatio: "aspect-[3/4]", // Custom aspect ratio (width/height)
  },
  {
    id: "2",
    src: "/images/photos/photo2.jpeg",
    alt: "Personal photo 2",
    position: "object-top",
    zoom: "hover:scale-110",
    aspectRatio: "aspect-[3/4]", // Taller than wide (portrait)
  },
  {
    id: "3",
    src: "/images/photos/photo3.jpeg",
    alt: "Personal photo 3",
    position: "object-center",
    zoom: "hover:scale-105",
    aspectRatio: "aspect-[3/4]", // Widescreen format
  }
];

export const metadata: Metadata = {
  title: "Photos | Gurdeep Singh",
  metadataBase: new URL("https://gurdeepsingh.tech/photos"),
  description: "Check out beautiful photos captured by me",
  openGraph: {
    title: "Photos | Gurdeep Singh",
    url: "https://gurdeepsingh.tech/photos",
    description: "Check out beautiful photos captured by me",
    images: "/og.png",
  },
};

export default function Photos() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <PageHeading
        title="Photos"
        description="🚧 This page is currently under construction.
In the meantime, feel free to explore a curated collection of my personal moments. 😊"
      />
      
      {/* Photo grid with adjustable frames */}
      <div className="my-12 max-w-4xl mx-auto">
        <Slide delay={0.12}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personalPhotos.map((photo) => (
              <div 
                key={photo.id} 
                className={`relative overflow-hidden rounded-xl shadow-md ${photo.aspectRatio} hover:shadow-xl hover:scale-[1.03] transition-all duration-300`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  className={`object-cover ${photo.position} transition-transform duration-500 ${photo.zoom}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium">{photo.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </Slide>
      </div>
    </main>
  );
}
