import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";

export default function BrandHero({
  title,
  tagline,
  heroImage,
  variant = "default",
  breadcrumbItems,
}) {
  const isCentered = variant === "centered";
  const crumbs =
    breadcrumbItems ||
    [
      { name: "Home", href: "/" },
      { name: "Our Brands", href: "/our-brands" },
      { name: title },
    ];

  return (
    <section className="relative h-95 overflow-hidden md:h-105">
      <Image
        src={heroImage}
        alt={`${title} — ${tagline}`}
        fill
        preload
        sizes="100vw"
        quality={75}
        className="object-cover"
      />
      <div
        className={`absolute inset-0 ${
          isCentered ? "bg-black/45" : "bg-black/30"
        }`}
      />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col px-5 md:px-8 lg:px-10">
        <Breadcrumb light className="shrink-0 pt-6 md:pt-8" items={crumbs} />


          <div className="flex flex-1 items-center">
            <div className="max-w-xl text-white md:max-w-2xl lg:max-w-3xl">
              <h1 className="text-[32px] leading-[1.15] font-semibold md:text-[48px] lg:text-[56px]">
                {title}
              </h1>
              <p className="mt-3 text-[16px] leading-[1.45] text-white/90 md:mt-4 md:text-[20px] lg:text-[22px]">
                {tagline}
              </p>
            </div>
          </div>

      </div>
    </section>
  );
}
