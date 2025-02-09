import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/customs/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/customs/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md Abumahid Islam",
  description: "Hi, I'm Md Abumahid Islam, a passionate Front-End Developer specializing in React, Tailwind CSS, and modern web technologies. Explore my projects, skills, and contact me for collaboration.",
  keywords: ["Md Abumahid Islam", "Front-End Developer", "React Developer", "Web Developer", "Tailwind CSS", "JavaScript", "Node.js", "Portfolio", "Full-Stack Projects"],
  authors: [{ name: "Md Abumahid Islam" }],
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Md Abumahid Islam - Front-End Developer Portfolio",
    description: "Explore the portfolio of Md Abumahid Islam, a skilled Front-End Developer focused on creating modern, responsive, and user-friendly web applications.",
    url: "https://your-portfolio-link.com",
    type: "website",
    images: ["https://your-portfolio-link.com/og-image.jpg"],
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-customPrimary`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
