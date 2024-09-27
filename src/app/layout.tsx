import Provider from "@/components/Provider";
import "@/styles/globals.css";
import type { Metadata } from "next"
import { instrumentSans, neueHaasDisplay, plusJakartaSans } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "CultureFest",
  description: "CultureFest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${instrumentSans.variable} ${neueHaasDisplay.variable} antialiased`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
