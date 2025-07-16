import type { Metadata } from "next";
import StyledComponentsProvider from "@/providers/StyledComponentsProvider";
import StyledComponentsRegistry from "@/providers/StyledComponentsRegistry";
import { ThemeProvider } from "@/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Ro Mativo | Full Stack Developer",
  description: 'Full Stack Developer crafting beautiful digital experiences with Next.js, TypeScript, and modern web technologies.',
  icons: {
    // Modern browsers - primary favicon
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.svg", sizes: "16x16", type: "image/svg+xml" },
    ],
    // iOS home screen icon (when users add site to home screen)
    apple: "/favicon.svg",
    // Legacy browsers & Windows desktop shortcuts
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <StyledComponentsProvider>
              {children}
            </StyledComponentsProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
