import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/customs/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/customs/Footer";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/outhOptions";
import { Toaster } from 'sonner'

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
  description:
    "Hi, I'm Md Abumahid Islam, a passionate Front-End Developer specializing in React, Tailwind CSS, and modern web technologies. Explore my projects, skills, and contact me for collaboration.",
  keywords: [
    "Md Abumahid Islam",
    "Abumahid",
    "abumahid",
    "Abu-Mahid",
    "abu-mahid",
    "abu-mahid islam",
    "abumahid islam",
    "Front-End Developer",
    "React Developer",
    "Web Developer",
    "Tailwind CSS",
    "JavaScript",
    "Node.js",
    "Portfolio",
    "Full-Stack Projects",
  ],
  authors: [{ name: "Md Abumahid Islam" }],
  openGraph: {
    title: "Md Abumahid Islam - Front-End Developer Portfolio",
    description:
      "Explore the portfolio of Md Abumahid Islam, a skilled Front-End Developer focused on creating modern, responsive, and user-friendly web applications.",
    url: "https://abumahid.vercel.app/",
    type: "website",
    images: [
      "https://abumahid.vercel.app/_next/static/media/myphoto.54b0a8a1.png",
    ],
  },
};


const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await getServerSession(authOptions)
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
          <NavBar session={session} />
          <div className="min-h-[70vh] px-4">
            {children}
          </div>
          <Footer />
          <Toaster visibleToasts={1} position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}


export default RootLayout

