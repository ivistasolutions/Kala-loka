import Link from "next/link";
import PillArrowNav from "@/components/PillArrowNav";
import { brands } from "@/utils/data";

export default function BrandPageFooter({
  currentBrandSlug,
  categoryItems = [],
  currentCategoryHref,
}) {
  const brandItems = brands.map((brand) => ({
    name: brand.title,
    href: `/our-brands/${brand.slug}`,
  }));

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-5 pt-10 pb-16 md:gap-12 md:px-8 md:pt-14 md:pb-20 lg:px-10">
      <PillArrowNav
        label="Other Brands"
        currentHref={`/our-brands/${currentBrandSlug}`}
        items={brandItems}
      />

      {categoryItems.length > 0 ? (
        <PillArrowNav
          label="Categories"
          currentHref={currentCategoryHref}
          items={categoryItems.map((item) => ({
            name: item.name,
            href: item.href,
          }))}
        />
      ) : null}

      <div className="flex w-full max-w-md flex-col items-center gap-3 md:max-w-xl md:flex-row md:justify-center md:gap-4 lg:max-w-2xl">
        <Link
          href="/our-brands"
          className="inline-flex h-11 w-full items-center justify-center rounded-full bg-coral px-8 text-[14px] font-medium text-white transition-colors hover:bg-[#d94e33] md:h-12 md:w-auto md:px-10 md:text-[15px]"
        >
          Our Brands
        </Link>
        <Link
          href="/"
          className="inline-flex h-11 w-full items-center justify-center rounded-full border border-coral bg-white px-8 text-[14px] font-medium text-navy transition-colors hover:bg-peach md:h-12 md:w-auto md:px-10 md:text-[15px]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
