import { notFound } from "next/navigation";
import BrandLanding from "@/components/BrandLanding/BrandLanding";
import { getBrandBySlug, getBrandSlugs } from "@/utils/data";

export function generateStaticParams() {
  return getBrandSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) {
    return { title: "Brand | Kala Loka" };
  }

  return {
    title: `${brand.title} | Kala Loka`,
    description: brand.tagline,
  };
}

export default async function BrandPage({ params }) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) {
    notFound();
  }

  return <BrandLanding brand={brand} />;
}
