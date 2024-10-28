import localFont from 'next/font/local'
import './globals.css'
// import { Card, CardContent, CardHeader, Paper, BottomNavigation, BottomNavigationAction } from '@mui/material'
// import HomeIcon from '@mui/icons-material/Home'
// import SettingsIcon from '@mui/icons-material/Settings'
// import FavoriteIcon from '@mui/icons-material/Favorite'
// import HistoryIcon from '@mui/icons-material/History'
// import Link from 'next/link'
import LayoutComponent from '../components/layout/layoutComponent'
import AddToHomeScreen from '../components/addToHomeScreen/addToHomeScreen'
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
    description: 'NextJS PWA POC',
    manifest: '/manifest.json'
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

                <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <meta name="apple-mobile-web-app-title" content="Nu Skin" />
                <link rel="manifest" href="/site.webmanifest" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="PWA App" />
                <meta property="og:description" content="Best PWA App in the world" />
                <meta property="og:site_name" content="PWA App" />
                <meta property="og:url" content="https://nextjs-pwa-git-main-paulrroberts-projects.vercel.app/" />
                <meta property="og:image" content="https://nextjs-pwa-git-main-paulrroberts-projects.vercel.app/apple-touch-icon.png" />
                {/* </Head> */}
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <AddToHomeScreen />
                <LayoutComponent>{children}</LayoutComponent>
            </body>
        </html>
    )
}
