import type { Metadata } from "next";
import StyledComponentsProvider from "@/providers/StyledComponentsProvider";

export const metadata: Metadata = {
  title: "Coming Soon | Storyboard",
  description: "Something amazing is being crafted. Stay tuned for updates.",
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
