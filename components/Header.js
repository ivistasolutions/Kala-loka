"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home", key: "home" },
  { href: "/our-story", label: "Our Story", key: "story" },
  { href: "/our-brands", label: "Our Brands", key: "brands" },
];

function NavLink({ href, label, isHome, isActive, onClick }) {
  const base =
    "inline-flex h-11 w-full items-center justify-center rounded-full px-6 text-[15px] font-medium transition-colors md:h-11 md:w-auto md:px-8";

  if (isHome) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={`${base} bg-coral text-white hover:bg-[#d94e33]`}
      >
        {label}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${base} border bg-white text-navy hover:bg-peach ${
        isActive ? "border-coral" : "border-navy/20"
      }`}
    >
      {label}
    </Link>
  );
}

export default function Header({ activePage = "home" }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-30 w-full bg-white">
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-3 items-center px-5 py-4 md:flex md:justify-between md:px-8 md:py-5 lg:px-10">
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center justify-self-start text-navy md:hidden"
        >
          {open ? (
            <span className="relative block h-4 w-5">
              <span className="absolute top-1/2 left-0 h-[1.5px] w-full -translate-y-1/2 rotate-45 bg-navy" />
              <span className="absolute top-1/2 left-0 h-[1.5px] w-full -translate-y-1/2 -rotate-45 bg-navy" />
            </span>
          ) : (
            <span className="flex flex-col gap-[5px]">
              <span className="block h-[1.5px] w-5 bg-navy" />
              <span className="block h-[1.5px] w-5 bg-navy" />
              <span className="block h-[1.5px] w-5 bg-navy" />
            </span>
          )}
        </button>

        <Link
          href="/"
          className="justify-self-center md:justify-self-start"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/header-logo.svg"
            alt="Kala Loka"
            width={180}
            height={48}
            className="h-6 w-auto md:h-10"
          />
        </Link>

        <span className="md:hidden" aria-hidden="true" />

        <nav className="hidden items-center gap-3 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.key}
              href={item.href}
              label={item.label}
              isHome={item.key === "home"}
              isActive={activePage === item.key}
            />
          ))}
        </nav>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-navy/10 bg-white px-5 py-6 md:hidden"
        >
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.key}
                href={item.href}
                label={item.label}
                isHome={item.key === "home"}
                isActive={activePage === item.key}
                onClick={() => setOpen(false)}
              />
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
