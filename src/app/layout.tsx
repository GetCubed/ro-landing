import type { Metadata } from "next";
import StyledComponentsProvider from "@/providers/StyledComponentsProvider";

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
        <StyledComponentsProvider>
          {children}
        </StyledComponentsProvider>
      </body>
    </html>
  );
}
