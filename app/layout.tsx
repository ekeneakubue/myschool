import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ScrollToTop from "./components/ScrollToTop";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Graceville Elementary School Nsukka | GES",
  description:
    "Graceville Elementary School Nsukka — High quality education in a serene environment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dateStringIso = new Date().toISOString().slice(0, 10);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-neutral-900`}
      >
        {/* Scroll to top */}
        {/* @ts-expect-error Client Component imported in layout */}
        <ScrollToTop />
        <div className="w-full text-sm bg-neutral-900 text-neutral-100">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
            <div className="flex items-center gap-4">
              <span className="font-medium">Hot lines:</span>
              <a href="tel:+2348038802586" className="hover:underline">
                234 803 880 2586
              </a>
              <span className="opacity-60">or</span>
              <a href="tel:+2348037798334" className="hover:underline">
                234 803 779 8334
              </a>
            </div>
            <div className="opacity-80">
              Today is &gt;&gt;: {dateStringIso}
            </div>
          </div>
        </div>

        <header className="w-full bg-white shadow-sm">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
            <a href="/" className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-emerald-600 text-white grid place-items-center font-bold">
                G
              </div>
              <div className="leading-tight">
                <div className="font-bold tracking-tight">Graceville Elementary School</div>
                <div className="text-xs text-neutral-600">Nsukka</div>
              </div>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a className="hover:text-emerald-700" href="/">Home</a>
              <a className="hover:text-emerald-700" href="#about">About Us</a>
              <a className="hover:text-emerald-700" href="#news">News/Events</a>
              <a className="hover:text-emerald-700" href="#gallery">Gallery</a>
              <a className="hover:text-emerald-700" href="#contact">Contact</a>
              <a
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-emerald-600 text-white hover:bg-emerald-700"
                href="#portal"
              >
                Portal
              </a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="w-full bg-neutral-950 text-neutral-200 mt-16">
          <div className="max-w-6xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="h-8 w-8 rounded-full bg-emerald-600 text-white grid place-items-center font-bold">
                  G
                </div>
                <div className="font-semibold">Graceville Elementary School Nsukka</div>
              </div>
              <p className="text-sm text-neutral-400">
                We are very proud of our school, the learning environment, the
                facilities and quality of teaching and of course, our friendly and
                supportive staff, families and Advisory Board Members.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Information Link</h3>
              <ul className="space-y-2 text-sm">
                <li><a className="hover:underline" href="/">Home</a></li>
                <li><a className="hover:underline" href="#about">About us</a></li>
                <li><a className="hover:underline" href="#news">News/Events</a></li>
                <li><a className="hover:underline" href="#portal">Login</a></li>
                <li><a className="hover:underline" href="#contact">Contact</a></li>
              </ul>
            </div>

            <div id="contact">
              <h3 className="font-semibold mb-3">Contact Details</h3>
              <ul className="space-y-2 text-sm">
                <li>Graceville Elementary School</li>
                <li>Off Tobechukwu Close, Onuiyi – Nsukka</li>
                <li>
                  <a className="hover:underline" href="tel:+2348165313470">
                    234 816 531 3470 (SMS ONLY)
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="mailto:info@ges.ng">info@ges.ng</a>
                </li>
                <li>
                  <a className="hover:underline" href="https://ges.ng" target="_blank" rel="noopener noreferrer">www.ges.ng</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800">
            <div className="max-w-6xl mx-auto px-4 py-4 text-xs flex flex-col md:flex-row items-center justify-between gap-2">
              <div>All Rights Reserved. © GES Nsukka.</div>
              <div>
                Powered By <span className="font-semibold">Enetwork</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
