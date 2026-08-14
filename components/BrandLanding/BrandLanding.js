import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrandHero from "@/components/BrandLanding/BrandHero";
import BrandIntroCard from "@/components/BrandLanding/BrandIntroCard";
import ProductSection from "@/components/BrandLanding/ProductSection";
import JsonLd from "@/components/JsonLd";
import { brandPageJsonLd, breadcrumbJsonLd } from "@/utils/seo";

export default function BrandLanding({ brand }) {
  return (
    <div className="min-h-screen bg-peach font-serif">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Our Brands", href: "/our-brands" },
          { name: brand.title, href: `/our-brands/${brand.slug}` },
        ])}
      />
      <JsonLd data={brandPageJsonLd(brand)} />
      <Header activePage="brands" />

      <main id="main-content">
        <BrandHero
          title={brand.title}
          tagline={brand.tagline}
          heroImage={brand.heroImage}
          variant={brand.heroVariant}
        />

        <BrandIntroCard
          paragraphs={brand.intro.paragraphs}
          extra={brand.intro.extra}
        />

        {brand.productSections.map((section) => (
          <ProductSection
            key={section.id}
            title={section.title}
            subtitle={section.subtitle}
            products={section.products}
            layout={section.layout}
          />
        ))}

        <div className="mx-auto flex w-full max-w-md flex-col items-center gap-3 px-5 pt-10 pb-16 md:max-w-xl md:flex-row md:justify-center md:gap-4 md:pt-14 md:pb-20 lg:max-w-2xl">
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
      </main>

      <Footer />
    </div>
  );
}
