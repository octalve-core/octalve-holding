import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Octalve Holding",
  description:
    "Octalve Holding builds digital products, websites, business systems, and smart automation for modern organizations.",
};

// export const metadata: Metadata = {
//   metadataBase: new URL("https://octalve.com"),
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
