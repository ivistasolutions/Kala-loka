import { notFound } from "next/navigation";
import BronzewareContent from "@/components/HandicraftsCategory/BronzewareContent";
import { getCraftCategoryBySlug } from "@/utils/data";
import { pageMetadata } from "@/utils/seo";

const SLUG = "bidriware";

export const metadata = pageMetadata({
  title: "Bidriware",
  description:
    "Brought from Iran in the 13th century, Bidriware is a 500-year-old Bidar craft featuring pure silver inlay on black zinc-copper alloy. Karnataka GI-20 since 2005.",
  path: `/our-brands/karnataka-handicrafts/${SLUG}`,
  image: "/brands/karnataka-handicrafts/bidriware/bidriware-1.png",
});

export default function BidriwarePage() {
  const category = getCraftCategoryBySlug(SLUG);

  if (!category) {
    notFound();
  }

  return <BronzewareContent category={category} />;
}
