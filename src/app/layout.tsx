import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TrpcProvider } from "@/utils/trpc-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TourneyMate | Home",
  description:
    "Premier website to organize and view table tennis tournaments for better organization and promotion of the sport.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="luxury">
      <body className={inter.className}>
        <TrpcProvider>{children}</TrpcProvider>
      </body>
    </html>
  );
}
