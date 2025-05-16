import { Metadata } from "next";
import Posts from "../components/pages/Posts";
import PageHeading from "../components/shared/PageHeading";
import { Slide } from "../animation/Slide";

export const metadata: Metadata = {
  title: "Blog | Gurdeep Singh",
  metadataBase: new URL("https://gurdeepsingh.tech/blog"),
  description: "Explore Gurdeep Singh's thoughts, insights and experiences through a collection of well-crafted articles on web development, design, and more.",
  openGraph: {
    title: "Blog | Gurdeep Singh",
    url: "https://gurdeepsingh.tech/blog",
    description: "Explore Gurdeep Singh's thoughts, insights and experiences through a collection of well-crafted articles on web development, design, and more.",
    images: "/og.png",
  },
};

export default function Blog() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <PageHeading
        title="Blog"
        description="Welcome to my blog, where I share my thoughts, experiences, and insights on web development, design, and more."
      />

      <Slide delay={0.1}>
        <Posts />
      </Slide>
    </main>
  );
}
