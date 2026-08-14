import { pageMetadata } from "@/utils/seo";

export const metadata = pageMetadata({
  title: "Our Brands",
  description:
    "Six legacy government brands of Karnataka — coffee, handicrafts, silk, sandal, handlooms and leather.",
  path: "/our-brands",
  image: "/brands/coffees-of-karnataka.jpeg",
});

export default function BrandsLayout({ children }) {
  return children;
}
