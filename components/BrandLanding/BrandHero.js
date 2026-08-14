import Image from "next/image";

export default function BrandHero({ title, tagline, heroImage }) {
  return (
    <section className="relative h-[420px] overflow-hidden md:h-[420px]">
      <Image
        src={heroImage}
        alt=""
        fill
        preload
        sizes="100vw"
        quality={90}
        className="object-cover"
      />
      {/* <div className="absolute inset-0 bg-navy/35" /> */}

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-5 md:px-8 lg:px-10">
        <div className="max-w-xl text-white md:max-w-2xl lg:max-w-3xl">
          <h1 className="text-[32px] leading-[1.15] font-semibold md:text-[48px] lg:text-[56px]">
            {title}
          </h1>
          <p className="mt-3 text-[16px] leading-[1.45] text-white/90 md:mt-4 md:text-[20px] lg:text-[22px]">
            {tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
