import Image from "next/image";

function toSrc(path) {
  if (!path) return "";
  if (path.startsWith("/") || path.startsWith("http")) return path;
  return `/${path}`;
}

export default function CategoryCard({ product }) {
  const image = toSrc(product.image || product.images?.[0]);

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-navy">
      <div className="relative aspect-[5/4] w-full overflow-hidden bg-navy/10">
        {image ? (
          <Image
            src={image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            quality={75}
            className="object-cover"
          />
        ) : null}
      </div>

      <div className="flex flex-1 flex-col items-center px-5 pt-5 pb-6 text-center md:px-6 md:pt-6 md:pb-7">
        <h3 className="text-[18px] leading-snug font-semibold text-white md:text-[20px]">
          {product.name}
        </h3>
        <p className="mt-2 mb-5 flex-1 text-[13px] leading-[1.55] text-white/80 md:text-[14px]">
          {product.description}
        </p>
        <button
          type="button"
          className="inline-flex h-10 items-center justify-center rounded-full bg-white px-6 text-[13px] font-medium text-navy transition-colors hover:bg-peach md:h-11 md:px-7 md:text-[14px]"
        >
          Explore Products
        </button>
      </div>
    </article>
  );
}
