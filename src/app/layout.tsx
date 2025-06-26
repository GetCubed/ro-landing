import type { Metadata } from "next";
import StyledComponentsProvider from "@/providers/StyledComponentsProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Rhodri Mativo | Full Stack Developer",
  description: "Next.js, TypeScript, styled-components, Storybook",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.svg", sizes: "16x16", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
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
        <ThemeProvider>
          <StyledComponentsProvider>
            {children}
          </StyledComponentsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
