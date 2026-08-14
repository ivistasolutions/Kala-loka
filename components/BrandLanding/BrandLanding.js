import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrandHero from "@/components/BrandLanding/BrandHero";
import BrandIntroCard from "@/components/BrandLanding/BrandIntroCard";
import ProductSection from "@/components/BrandLanding/ProductSection";

export default function BrandLanding({ brand }) {
  return (
    <div className="min-h-screen bg-peach font-serif">
      <Header activePage="brands" />

      <BrandHero
        title={brand.title}
        tagline={brand.tagline}
        heroImage={brand.heroImage}
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
        />
      ))}

      <div className="h-16 md:h-24" />

      <Footer />
    </div>
  );
}
