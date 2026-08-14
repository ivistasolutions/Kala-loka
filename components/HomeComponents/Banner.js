import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  const stats = [
    { value: "6", label: "Legacy brands" },
    { value: "1912", label: "KSIC founded" },
    { value: "GI", label: "Tagged heritage crafts" },
  ];

  const desktopCornerImages = [
    {
      src: "/images/corner-top-right.svg",
      width: 653,
      height: 489,
      className:
        "pointer-events-none absolute top-0 right-0 z-0 hidden h-auto w-[38vw] max-w-3xl select-none md:block",
    },
    {
      src: "/images/corner-bottom-left.svg",
      width: 654,
      height: 243,
      className:
        "pointer-events-none absolute bottom-0 left-0 z-0 hidden h-auto w-[36vw] max-w-2xl select-none md:block",
    },
  ];

  return (
    <main className="relative md:min-h-screen min-h-[600px] md:overflow-hidden bg-peach font-serif">
      {desktopCornerImages.map((image) => (
        <Image
          key={image.src}
          src={image.src}
          alt=""
          aria-hidden={true}
          width={image.width}
          height={image.height}
          unoptimized={true}
          className={image.className}
        />
      ))}

      <Image
        src="/images/mobile-corner-bottom.svg"
        alt=""
        aria-hidden={true}
        width={654}
        height={243}
        unoptimized={true}
        className="pointer-events-none absolute right-0 bottom-0 left-0 z-0 h-auto w-full select-none md:hidden"
      />

      <Image
        src="/images/logo.png"
        alt="Kala Loka — Treasures of Karnataka"
        width={578}
        height={413}
        preload
        className="pointer-events-none absolute top-0 left-1/2 z-10 h-auto w-60 -translate-x-1/2 md:w-80 lg:w-80"
      />

      <div className="relative z-10 flex min-h-screen flex-col items-center">
        <section className="flex flex-1 flex-col items-center justify-center px-5 pt-42 pb-6 text-center md:pt-40 lg:pt-52">
          <h1 className="text-[26px] leading-[1.22] font-semibold tracking-[-0.015em] text-navy sm:text-[36px] sm:leading-[1.2] md:text-[46px] lg:text-[48px]">
            A living catalog of Karnataka&apos;s finest <br/>GI-tagged treasures.
          </h1>
          <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-navy/75 sm:mt-6 sm:max-w-2xl sm:text-lg md:max-w-3xl">
            Six legacy government brands of coffee, handicrafts, silk, sandal,
            handlooms and leather and more each with its own story and
            provenance.
          </p>

          <div className="mt-6 flex w-full max-w-sm flex-row items-center justify-center gap-2.5 sm:mt-9 sm:max-w-xl sm:gap-4 md:max-w-2xl">
            <Link
              href="/our-brands"
              className="inline-flex h-11 flex-1 items-center justify-center rounded-full bg-coral px-4 text-[13px] font-medium tracking-wide text-white transition-colors hover:bg-[#d94e33] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral sm:h-[52px] sm:flex-none sm:px-9 sm:text-[15px]"
            >
              Explore the brands
            </Link>
            <Link
              href="/our-story"
              className="inline-flex h-11 flex-1 items-center justify-center rounded-full border border-coral bg-white px-4 text-[13px] font-medium tracking-wide text-navy transition-colors hover:bg-peach focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral md:h-12 md:flex-none md:px-9 md:text-[15px]"
            >
              Read Our Story
            </Link>
          </div>
        </section>

        <div className="relative z-20 mb-10 w-full max-w-sm px-5 sm:mb-12 sm:max-w-4xl sm:px-8 md:mb-12 lg:max-w-4xl lg:mb-28">
          <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_rgba(7,71,96,0.1)] md:flex-row md:rounded-full">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-1 items-center justify-center gap-3 px-6 py-4 md:py-5 ${index > 0
                    ? "border-t border-navy/10 md:border-t-0 md:border-l"
                    : ""
                  }`}
              >
                <span className="text-[26px] leading-none font-semibold text-navy sm:text-[33px]">
                  {stat.value}
                </span>
                <span className="text-sm text-navy/70 sm:text-[15px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
