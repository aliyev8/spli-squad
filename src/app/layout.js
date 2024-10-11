import { Inter } from "next/font/google";
import "./globals.css";
import {Providers} from "@/app/providers";

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
        <link rel="manifest" href="/manifest.js"/>
            <meta name="apple-mobile-web-app-capable" content="yes"/>
                <meta name="apple-mobile-web-app-title" content="splitsquads"/>
                    <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
                        <link href="/pwa/img/iphone5_splash.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
                        <link href="/pwa/img/iphone6_splash.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
                        <link href="/pwa/img/iphoneplus_splash.png" media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
                        <link href="/pwa/img/iphonex_splash.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
                        <link href="/pwa/img/ipad_splash.png" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
                        <link href="/pwa/img/ipadpro1_splash.png" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
                        <link href="/pwa/img/ipadpro2_splash.png" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
                        <link rel="apple-touch-icon" sizes="128x128" href="/128.png"/>
                            <link rel="apple-touch-icon-precomposed" sizes="128x128" href="/128.png"/>
                                <link rel="icon" sizes="192x192" href="/192.png"/>
                                    <link rel="icon" sizes="128x128" href="/128.png"/>
    </head>
      <body className={`${inter.className} bg-white dark:bg-slate-900`}>
     <Providers>
         {children}
     </Providers>
      </body>
    </html>
  );
}
