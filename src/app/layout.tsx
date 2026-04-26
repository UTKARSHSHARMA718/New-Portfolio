import "./globals.css";
import Navbar from "@/modules/common/components/Navbar";
import Footer from "@/modules/common/components/Footer";
import { Poppins } from "next/font/google";
import GlowCursor from "@/modules/common/components/GlowCursor";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins", // optional (for Tailwind usage)
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-[#0b1020] text-white flex flex-col min-h-screen`}
      >
        <Navbar />
        <div className="flex flex-col flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
