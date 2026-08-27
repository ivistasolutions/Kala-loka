import Image from "next/image";

const brandLogos = [
  { src: "/logos/coffee_board_v2.png", alt: "Coffee Board" },
  { src: "/logos/cauvery_v2.png", alt: "Cauvery" },
  { src: "/logos/mysore_silk_v2.png", alt: "Mysore Silk" },
  { src: "/logos/mysore_sandal_soap_v2.png", alt: "Mysore Sandal Soap" },
  { src: "/logos/priyadharshini_v2.png", alt: "Priyadharshini" },
  { src: "/logos/lidkar_v2.png", alt: "Lidkar" },
];

function MarqueeTrack({ logoClassName }) {
  return (
    <div className="logo-marquee-track flex items-center">
      {[...brandLogos, ...brandLogos].map((logo, index) => (
        <div
          key={`${logo.src}-${index}`}
          className="flex w-[calc(100cqw/4)] shrink-0 items-center justify-center px-2 sm:px-3"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={220}
            height={96}
            sizes="(min-width: 768px) 140px, 100px"
            quality={80}
            className={logoClassName}
          />
        </div>
      ))}
    </div>
  );
}

function MarqueeCard({ children, className = "" }) {
  return (
    <div
      className={`md:mb-0 mb-30 relative overflow-hidden border-b-[3px] border-[#ee5a3c] bg-white [container-type:inline-size] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_3px_0_0_rgba(238,90,60,0.25),0_8px_18px_rgba(7,71,96,0.14)] ${className}`}
    >
      <div className="[mask-image:linear-gradient(to_right,transparent_0%,black_12%,black_88%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_12%,black_88%,transparent_100%)]">
        {children}
      </div>
    </div>
  );
}

/** @param {{ variant?: "plain" | "pill" }} props */
export default function LogoMarquee({ variant = "plain" }) {
  if (variant === "pill") {
    return (
      <div className="relative z-20 mx-auto md:mt-8 w-full max-w-sm sm:mt-10 sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
        <MarqueeCard className="rounded-2xl py-1 md:rounded-3xl ">
          <MarqueeTrack logoClassName="h-16 w-auto max-w-full object-contain sm:h-20 md:h-24" />
        </MarqueeCard>
      </div>
    );
  }

  return (
    <div className="relative z-20 mx-auto md:mt-8 w-full max-w-sm sm:mt-10 sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
      <MarqueeCard className="rounded-2xl py-1 md:rounded-full ">
        <MarqueeTrack logoClassName="h-14 w-auto max-w-full object-contain sm:h-16 md:h-20" />
      </MarqueeCard>
    </div>
  );
}
