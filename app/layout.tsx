import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "London LC – IELTS Practice Platform",
  description: "Authentic IELTS Reading and Listening practice for London Language Centre students.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Fraunces:ital,opsz,wght@0,9..144,200..900;1,9..144,200..900&family=IBM+Plex+Mono:wght@400;500;600;700&family=Lora:ital,wght@0,400..700;1,400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
