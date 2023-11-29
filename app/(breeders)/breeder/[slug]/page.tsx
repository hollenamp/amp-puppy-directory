'use client'
import Link from "next/link"
import SectionPuppies from "./SectionPuppies"
import SectionCTA from "./SectionCTA"
import { Banner } from "@/components/banner"

export default function BreederPage({
  params
}:{
  params:{slug:string[]}
}) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div className="bg-white text-zinc-500">
      <Banner>
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-zinc-900/10 hover:ring-zinc-900/20 bg-black/30">
            Visiting {params.slug}
          </div>
        </div>
        
        <h1 className="text-4xl font-thin tracking-tight text-white sm:text-6xl">
        Quality Puppies
        </h1>
        <p className="mt-6 text-lg leading-8 text-white">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
        fugiat veniam occaecat fugiat aliqua.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link 
              href="#puppies"
              scroll={false}
              className="rounded-md bg-violet-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
              onClick={handleScroll}
          >
              See Available Puppies
          </Link>
          <a href="/#contact"
              className="rounded-md bg-zinc-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600"
          >
              Contact Us
          </a>
        </div>
      </Banner>
      <section className="w-full py-8 sm:py-16 lg:py-32 px-4 sm:px-8 lg:px-16 relative bg-zinc-200">
        <div className="mx-auto container">
          <SectionCTA />
        </div>
      </section>
      <section className="w-full py-8 sm:py-16 lg:py-32 px-4 sm:px-8 lg:px-16 relative">
        <div className="mx-auto container">
          <SectionPuppies params={params} />
        </div>
      </section>
    </div>
  )
}
