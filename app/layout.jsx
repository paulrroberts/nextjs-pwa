import localFont from 'next/font/local'
import './globals.css'
// import { Card, CardContent, CardHeader, Paper, BottomNavigation, BottomNavigationAction } from '@mui/material'
// import HomeIcon from '@mui/icons-material/Home'
// import SettingsIcon from '@mui/icons-material/Settings'
// import FavoriteIcon from '@mui/icons-material/Favorite'
// import HistoryIcon from '@mui/icons-material/History'
// import Link from 'next/link'
import LayoutComponent from '../components/layout/layoutComponent'
// import Head from 'next/head'

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900'
})
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900'
})

export const metadata = {
    title: 'PWA POC',
    description: 'NextJS PWA POC'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            {/* <Head> */}
            <head>
                <meta name="application-name" content="PWA App" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="PWA App" />
                <meta name="description" content="Best PWA App in the world" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                {/* <meta name="msapplication-config" content="/icons/browserconfig.xml" /> */}
                <meta name="msapplication-TileColor" content="#2B5797" />
                <meta name="msapplication-tap-highlight" content="no" />
                <meta name="theme-color" content="#000000" />

                {/* <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />
            <link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" /> */}

                {/* <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}
                <link rel="manifest" href="/manifest.json" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />

                {/* <meta name="twitter:card" content="summary" />
                <meta name="twitter:url" content="https://yourdomain.com" />
                <meta name="twitter:title" content="PWA App" />
                <meta name="twitter:description" content="Best PWA App in the world" />
                <meta name="twitter:image" content="https://yourdomain.com/icons/android-chrome-192x192.png" />
                <meta name="twitter:creator" content="@DavidWShadow" /> */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="PWA App" />
                <meta property="og:description" content="Best PWA App in the world" />
                <meta property="og:site_name" content="PWA App" />
                <meta property="og:url" content="https://nextjs-pwa-git-main-paulrroberts-projects.vercel.app/" />
                <meta property="og:image" content="https://nextjs-pwa-git-main-paulrroberts-projects.vercel.app/apple-touch-icon.png" />
                {/* </Head> */}
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <LayoutComponent>{children}</LayoutComponent>
            </body>
        </html>
    )
}
