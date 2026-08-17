import BronzewareContent from "@/components/HandicraftsCategory/BronzewareContent";
import { getCraftCategoryBySlug } from "@/utils/data";
import { pageMetadata } from "@/utils/seo";

const SLUG = "karnataka-bronzeware";

export const metadata = pageMetadata({
  title: "Karnataka Bronzeware",
  description:
    "Karnataka Bronzeware is a traditional metal craft using the ancient 'lost wax' (cire perdue) casting technique. Protected by a Geographical Indication (GI) tag,",
  path: `/our-brands/karnataka-handicrafts/${SLUG}`,
  image: "/brands/karnataka-handicrafts/bronzeware/bronzeware-2.png",
});

export default function KarnatakaBronzewarePage() {
  const category = getCraftCategoryBySlug(SLUG);

  return <BronzewareContent category={category} />;
}
