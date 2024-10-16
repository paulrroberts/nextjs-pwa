import localFont from 'next/font/local'
import './globals.css'
import { Card, CardContent, CardHeader, Paper, BottomNavigation, BottomNavigationAction } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import SettingsIcon from '@mui/icons-material/Settings'
import FavoriteIcon from '@mui/icons-material/Favorite'
import HistoryIcon from '@mui/icons-material/History'
import Link from 'next/link'

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
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Card sx={{ height: '100vh' }}>
                    <CardHeader title="PWA POC" />
                    <CardContent>{children}</CardContent>
                </Card>
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                    <BottomNavigation showLabels>
                        <BottomNavigationAction component={Link} href="/" label="Home" icon={<HomeIcon />} />
                        <BottomNavigationAction component={Link} href="/settings" label="Settings" icon={<SettingsIcon />} />
                        <BottomNavigationAction component={Link} href="/favorites" label="Favorites" icon={<FavoriteIcon />} />
                        <BottomNavigationAction component={Link} href="/history" label="History" icon={<HistoryIcon />} />
                    </BottomNavigation>
                </Paper>
            </body>
        </html>
    )
}
