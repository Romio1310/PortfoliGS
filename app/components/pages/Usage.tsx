import { PortableText } from "@portabletext/react";
import { profileQuery } from "@/lib/sanity.query";
import type { ProfileType } from "@/types";
import { CustomPortableTextFavicon } from "../shared/CustomPortableTextFavicon";
import { sanityFetch } from "@/lib/sanity.client";
import { notFound } from "next/navigation";

export default async function Usage() {
  const profile = await sanityFetch<ProfileType | null>({
    query: profileQuery,
    tags: ["profile"],
  });
  
  if (!profile) {
    notFound();
  }

  return (
    <section className="max-w-2xl">
      <div className="mb-8">
        <h2 className="text-4xl mb-4 font-bold tracking-tight">Usage</h2>
        <p className="dark:text-zinc-400 text-zinc-600 max-w-xl">
          Tools, technologies and gadgets I use on a daily basis but not limited
          to.
        </p>
      </div>
      <PortableText
        value={profile.usage}
        components={CustomPortableTextFavicon}
      />
    </section>
  );
}
