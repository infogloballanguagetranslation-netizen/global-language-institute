import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Global Language Institute — Learn the Language. Earn the Journey.",
  description:
    "Global Language Institute helps students learn new languages and study abroad with confidence — expert visa guidance, native instructors, and programs across six countries.",
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-paper text-ink font-body antialiased">
        {children}
      </body>
    </html>
  );
}
