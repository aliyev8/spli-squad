import { Inter } from "next/font/google";
import "./globals.css";
import {Providers} from "@/app/providers";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });



export const metadata = {

    title: 'split-squad',
    description:'futbol heyyətlərini böl',


    openGraph: {
        title: 'split-squad',
        description:'futbol heyyətlərini böl',
        images: [
            {
                url: 'https://res.cloudinary.com/dawsyfhbt/image/upload/v1722528985/zizu_t9rtw2.webp',
                width: 800,
                height: 600,
                alt: 'img',
            }
        ]
    }
}
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/zizu.webp" />
        <meta name="theme-color" content="#ffffff" />
    </head>
      <body className={`${inter.className} bg-white dark:bg-slate-900`}>
     <Providers>
         {children}
     </Providers>
      </body>
    </html>
  );
}
