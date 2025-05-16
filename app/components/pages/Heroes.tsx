import { heroesQuery } from "@/lib/sanity.query";
import { HeroeType } from "@/types";
import EasterEgg from "../shared/EasterEgg";
import { Slide } from "../../animation/Slide";
import { sanityFetch } from "@/lib/sanity.client";
import RefLink from "../shared/RefLink";
import EmptyState from "../shared/EmptyState";
import { RiUserStarLine } from "react-icons/ri";

export default async function Heroes() {
  const heroes = await sanityFetch<HeroeType[]>({
    query: heroesQuery,
    tags: ["heroe"],
  });
  
  // Handle potential null response
  const heroList = heroes || [];

  return (
    <section className="mt-32 max-w-5xl">
      <Slide delay={0.17}>
        <h2 className="text-4xl mb-4 font-bold tracking-tight">Heroes</h2>
        <p className="dark:text-zinc-400 text-zinc-600 max-w-2xl">
          Inspired by{" "}
          <RefLink
            href="https://rafa.design"
            className="dark:text-blue-400 text-blue-500 underline"
          >
            Rafael Condo&apos;s
          </RefLink>{" "}
          heroes list, here&apos;s my own curated lineup of code conjurers and
          digital dynamos that I&apos;m absolutely stoked to meet someday.{" "}
          <strong className="font-semibold">
            &quot;In no particular order&quot;
          </strong>
        </p>
      </Slide>

      {heroList.length > 0 ? (
        <ul className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-12 tracking-tight">
          {heroList.map((heroe) => (
            <li
              key={heroe._id}
              className="flex items-center gap-x-2 dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-md px-2 py-1"
            >
              <EasterEgg isMet={heroe.met} />
              <RefLink
                href={heroe.url}
                className={`font-incognito tracking-wide hover:underline ${
                  heroe.met && "dark:text-green-300 text-green-800"
                }`}
              >
                {heroe.name}
              </RefLink>
            </li>
          ))}
        </ul>
      ) : (
        <EmptyState 
          icon={<RiUserStarLine />}
          title="No Heroes Added Yet"
          message="We couldn't find any heroes at the moment. Add some through the Sanity studio."
        />
      )}
    </section>
  );
}
