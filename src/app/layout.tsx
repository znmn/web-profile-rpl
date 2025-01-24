import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import SessionProvider from "@/components/SessionProvider";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Footer } from "@/components/layouts/footer/footer";
import { Navbar } from "@/components/layouts/navbar/navbar";
import { ThemeProvider } from "@/utils/context/theme_context";
import { RootPresence } from "@/components/motion/root_presence";

config.autoAddCss = false;

const inter = Poppins({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rekayasa Perangkat Lunak | Universitas Jember",
  keywords: [
    "RyperLab",
    "RyperLab Unej",
    "Rekayasa Perangkat Lunak",
    "Laboratorium Rekayasa Perangkat Lunak",
    "Fasilkom",
    "Fasilkom Unej",
    "Fakultas Ilmu Komputer",
    "Unej",
    "Universitas Jember",
  ],
  description:
    "Ryper Lab merupakan salah satu laboratorium yang dimiliki oleh Fakultas Ilmu Komputer Universitas Jember yang berfokus pada analisis, pengembangan, desain dan implementasi perangkat lunak. Ryper Lab memiliki asisten laboratorium yang terbagi menjadi 3 bidang yang terdiri asisten praktikum (pendidikan), asisten penelitian.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <SessionProvider>
          <ThemeProvider>
            <RootPresence>
              <Navbar />
              <main className="flex-1 flex flex-col gap-2 md:gap-4 lg:gap-6 min-h-screen">
                {children}
              </main>
              {/* <Footer /> */}
            </RootPresence>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
