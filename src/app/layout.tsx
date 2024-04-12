/**
 * This module defines a layout component for the application.
 *
 * @see RootLayout
 * @see https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts
 */

import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Golden Plate Map",
  description: "Find the best restaurants in California",
};

/**
 * This component defines the root layout for the application.
 *
 * All pages will be wrapped in this layout.
 */
export default async function RootLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>{children}</body>
    </html>
  );
}
