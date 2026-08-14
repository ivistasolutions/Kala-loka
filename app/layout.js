import { Merriweather, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata = {
  title: "Kala Loka | Treasures of Karnataka",
  description:
    "A living catalog of Karnataka’s finest GI-tagged treasures. Six legacy government brands of coffee, handicrafts, silk, sandal, handlooms and leather.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${merriweather.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-peach font-serif text-navy">
        {children}
      </body>
    </html>
  );
}
