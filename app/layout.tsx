import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/navbar";
import { ThemeProvider } from "@/providers/theme-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Cybership Dashboard",
  description: "An assignment by Aviroop Jana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
        >
          <Navbar />
          <main className="flex">
            <section className="min-h-screen flex-1">
              {children}
            </section>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}