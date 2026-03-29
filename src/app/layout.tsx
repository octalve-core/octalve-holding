// import type { Metadata } from "next";
// import "./globals.css";

// export const metadata: Metadata = {
//   title: "Octalve Holding",
//   description:
//     "Octalve Holding builds digital products, websites, business systems, and smart automation for modern organizations.",
// };

// // export const metadata: Metadata = {
// //   metadataBase: new URL("https://octalve.com"),
// // };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import "./globals.css";
import { OctalveSmartProvider } from "@/components/chatbot/octalve-smart-provider";
import ChatbotLauncher from "@/components/chatbot/chatbotLauncher";
import WhatsAppButton from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "Octalve",
  description:
    "Octalve Holding builds digital products, websites, business systems, and smart automation for modern organizations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <OctalveSmartProvider>
          {children}
          <ChatbotLauncher />
        </OctalveSmartProvider>
        <WhatsAppButton />
      </body>
    </html>
  );
}
