import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";

export default function BrandHero({
  title,
  tagline,
  heroImage,
  variant = "default",
}) {
  const isCentered = variant === "centered";

  return (
    <section className="relative h-[380px] overflow-hidden md:h-[420px]">
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
          isCentered ? "bg-navy/45" : "bg-navy/20"
        }`}
      />

      <Breadcrumb
        light
        className="absolute top-6 left-5 z-10 md:top-8 md:left-8 lg:left-10"
        items={[
          { name: "Home", href: "/" },
          { name: "Our Brands", href: "/our-brands" },
          { name: title },
        ]}
      />

      {isCentered ? (
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center text-white">
          <p className="text-[12px] font-medium tracking-[0.22em] uppercase md:text-[13px]">
            Kala Loka
          </p>
          <h1 className="mt-2 text-[32px] leading-[1.15] font-semibold md:text-[48px] lg:text-[56px]">
            {title}
          </h1>
          <p className="mt-3 max-w-xl text-[16px] leading-[1.45] text-white/90 md:mt-4 md:max-w-2xl md:text-[20px] lg:text-[22px]">
            {tagline}
          </p>
        </div>
      ) : (
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
      )}
    </section>
  );
}
