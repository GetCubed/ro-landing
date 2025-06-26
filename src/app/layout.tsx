import type { Metadata } from "next";
import StyledComponentsProvider from "@/providers/StyledComponentsProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Rhodri Mativo | Full Stack Developer",
  description: "Next.js, TypeScript, styled-components, Storybook",
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
