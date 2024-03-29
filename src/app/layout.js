import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "@/layouts/MainLayout";
import Theme from "@/theme/Index";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <Theme>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </Theme>
  );
}
