import Image from "next/image";

const cornerImages = [
  {
    src: "/images/corner-top-right.svg",
    width: 653,
    height: 489,
    className:
      "pointer-events-none absolute top-[380px] right-0 z-0 h-auto w-[45vw] max-w-xl select-none md:top-[420px] md:w-[28vw]",
  },
  {
    src: "/images/corner-bottom-left.svg",
    width: 654,
    height: 243,
    className:
      "pointer-events-none absolute bottom-0 left-0 z-0 h-auto w-[50vw] max-w-2xl select-none md:w-[32vw]",
  },
];

const circleBaseClassName =
  "pointer-events-none absolute top-1/2 z-0 h-auto w-[40vw] max-w-[280px] -translate-y-1/2 select-none md:w-[22vw]";

const circlePlacementClassNames = {
  center: `${circleBaseClassName} left-1/2 -translate-x-1/2`,
  left: `${circleBaseClassName} left-0`,
  right: `${circleBaseClassName} right-0`,
};

export function getCircleSideFromSlug(slug) {
  if (!slug) return "left";

  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) {
    hash += slug.charCodeAt(i);
  }

  return hash % 2 === 0 ? "left" : "right";
}

export default function BrandCornerBackground({
  children,
  circlePlacement = null,
}) {
  const circleClassName = circlePlacement
    ? circlePlacementClassNames[circlePlacement]
    : null;

  return (
    <div className="relative">
      {cornerImages.map((image) => (
        <Image
          key={image.src}
          src={image.src}
          alt=""
          aria-hidden={true}
          width={image.width}
          height={image.height}
          unoptimized={true}
          className={image.className}
        />
      ))}
      {circleClassName ? (
        <Image
          src="/images/full-circle.svg"
          alt=""
          aria-hidden={true}
          width={530}
          height={530}
          unoptimized={true}
          className={circleClassName}
        />
      ) : null}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
