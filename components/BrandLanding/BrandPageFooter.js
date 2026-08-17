import Link from "next/link";
import { getAdjacentBrands } from "@/utils/data";

export default function BrandPageFooter({ currentBrandSlug }) {
  const { prev, next } = getAdjacentBrands(currentBrandSlug);

  const rowClassName =
    "flex w-full max-w-xl flex-row flex-nowrap items-center justify-center gap-2 md:gap-4";

  const brandPillClassName =
    "inline-flex h-11 shrink-0 items-center justify-center gap-1 rounded-full border border-coral bg-white px-3 text-[12px] font-medium whitespace-nowrap text-navy transition-colors hover:bg-peach md:h-12 md:gap-1.5 md:px-6 md:text-[15px]";

  const actionPillClassName =
    "inline-flex h-11 shrink-0 items-center justify-center whitespace-nowrap px-5 text-[13px] font-medium md:h-12 md:px-8 md:text-[15px]";

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-3 px-5 pt-10 pb-16 md:gap-4 md:px-8 md:pt-14 md:pb-20 lg:px-10">
      {prev || next ? (
        <nav aria-label="Other brands" className={rowClassName}>
          {prev ? (
            <Link href={`/our-brands/${prev.slug}`} className={brandPillClassName}>
              <span aria-hidden="true">←</span>
              {prev.title}
            </Link>
          ) : null}
          {next ? (
            <Link href={`/our-brands/${next.slug}`} className={brandPillClassName}>
              {next.title}
              <span aria-hidden="true">→</span>
            </Link>
          ) : null}
        </nav>
      ) : null}

      <div className={rowClassName}>
        <Link
          href="/our-brands"
          className={`${actionPillClassName} rounded-full bg-coral text-white transition-colors hover:bg-[#d94e33]`}
        >
          Our Brands
        </Link>
        <Link
          href="/"
          className={`${actionPillClassName} rounded-full border border-coral bg-white text-navy transition-colors hover:bg-peach`}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
