import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Dhruv Narayan Singh | Software Engineer & Full-Stack Developer",
  description:
    "Portfolio of Dhruv Narayan Singh, an aspiring Software Engineer focused on Data Structures & Algorithms, full-stack development, cybersecurity, and practical software projects.",
  keywords: [
    "Dhruv Narayan Singh",
    "Software Engineer",
    "Full-Stack Developer",
    "Portfolio",
    "DSA",
    "Web Development",
    "React",
    "TypeScript",
    "Python",
    "C++",
  ],
  authors: [{ name: "Dhruv Narayan Singh" }],
  creator: "Dhruv Narayan Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Dhruv Narayan Singh | Software Engineer & Full-Stack Developer",
    description:
      "Portfolio of Dhruv Narayan Singh — aspiring Software Engineer focused on DSA, full-stack development, and secure software systems.",
    siteName: "Dhruv Narayan Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhruv Narayan Singh | Software Engineer & Full-Stack Developer",
    description:
      "Portfolio of Dhruv Narayan Singh — aspiring Software Engineer focused on DSA, full-stack development, and secure software systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#0A0A0A" />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
