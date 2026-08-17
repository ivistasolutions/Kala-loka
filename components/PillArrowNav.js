"use client";

import { useRef } from "react";
import Link from "next/link";

export default function PillArrowNav({ items = [], currentHref, label }) {
  const scrollerRef = useRef(null);

  if (items.length === 0) {
    return null;
  }

  function scrollBy(direction) {
    const node = scrollerRef.current;
    if (!node) return;

    const firstItem = node.children[0];
    const step = firstItem
      ? firstItem.getBoundingClientRect().width + 8
      : 180;

    node.scrollBy({
      left: direction * step,
      behavior: "smooth",
    });
  }

  const arrowClassName =
    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-navy/20 bg-white text-[22px] leading-none text-navy transition-colors hover:bg-peach md:h-11 md:w-11";

  return (
    <nav aria-label={label} className="w-full">
      <p className="mb-3 text-center text-[12px] font-medium tracking-[0.14em] text-navy/50 uppercase md:text-[13px]">
        {label}
      </p>
      <div className="flex items-center gap-2 md:gap-3">
        <button
          type="button"
          aria-label={`Previous ${label.toLowerCase()}`}
          onClick={() => scrollBy(-1)}
          className={arrowClassName}
        >
          ‹
        </button>

        <div
          ref={scrollerRef}
          className="flex min-w-0 flex-1 gap-2 overflow-x-auto scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item) => {
            const isCurrent = Boolean(item.href) && item.href === currentHref;
            const className = `inline-flex h-10 shrink-0 items-center justify-center rounded-full px-5 text-[13px] font-medium whitespace-nowrap transition-colors md:h-11 md:px-6 md:text-[14px] ${
              isCurrent
                ? "bg-coral text-white"
                : "border border-navy/20 bg-white text-navy hover:bg-peach"
            }`;

            if (item.href) {
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={isCurrent ? "page" : undefined}
                  className={className}
                >
                  {item.name}
                </Link>
              );
            }

            return (
              <span key={item.name} className={`${className} cursor-default opacity-70`}>
                {item.name}
              </span>
            );
          })}
        </div>

        <button
          type="button"
          aria-label={`Next ${label.toLowerCase()}`}
          onClick={() => scrollBy(1)}
          className={arrowClassName}
        >
          ›
        </button>
      </div>
    </nav>
  );
}
