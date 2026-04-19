import { DM_Sans, Inter, Plus_Jakarta_Sans } from "next/font/google";
import { ScrollReset } from "@/components/scroll-reset";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${plusJakarta.variable} ${dmSans.variable} min-h-screen font-sans`}
      >
        <ScrollReset />
        {children}
      </body>
    </html>
  );
}
