import { Inter } from "next/font/google";
import "./globals.css";
import {Providers} from "@/app/providers";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });


const APP_NAME = "PWA App";
const APP_DEFAULT_TITLE = "My Awesome PWA App";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION = "Best PWA app in the world!";
export const metadata = {

    title: 'split-squad',
    description:'futbol heyyətlərini böl',
    manifest: "/manifest.json",

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
      <body className={`${inter.className} bg-white dark:bg-slate-900`}>
     <Providers>
         {children}
     </Providers>
      </body>
    </html>
  );
}
