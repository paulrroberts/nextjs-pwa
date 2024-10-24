'use client'

import { useState, useEffect } from 'react'
import {
    Card,
    CardHeader,
    CardContent,
    BottomNavigation,
    BottomNavigationAction,
    Box,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper
} from '@mui/material'
import Link from 'next/link'
import HomeIcon from '@mui/icons-material/Home'
import SettingsIcon from '@mui/icons-material/Settings'
import PersonIcon from '@mui/icons-material/Person'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import MenuIcon from '@mui/icons-material/Menu'

const drawerWidth = 255

export default function LayoutComponent({ children }) {
    const [open, setOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [isStandalone, setIsStandalone] = useState(false)

    useEffect(() => {
        setIsMobile(/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream)

        setIsStandalone(window.matchMedia('(display-mode: standalone)').matches)
    }, [])

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen)
    }

    const iconMap = {
        HomeIcon: <HomeIcon />,
        SettingsIcon: <SettingsIcon />,
        PersonIcon: <PersonIcon />,
        ShoppingCartIcon: <ShoppingCartIcon />
    }

    const drawerLinks = [
        {
            title: 'Home',
            icon: 'HomeIcon',
            href: '/'
        },
        {
            title: 'Settings',
            icon: 'SettingsIcon',
            href: '/settings'
        },
        {
            title: 'Profile',
            icon: 'PersonIcon',
            href: '/profile'
        },
        {
            title: 'Cart',
            icon: 'ShoppingCartIcon',
            href: '/cart'
        }
    ]

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {drawerLinks.map((link, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton component={Link} href={link.href}>
                            <ListItemIcon>{iconMap[link.icon]}</ListItemIcon>
                            <ListItemText primary={link.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    return (
        <Box sx={{ display: 'flex' }}>
            {isMobile ? (
                <>
                    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, paddingBottom: '20px', zIndex: 100 }} elevation={3}>
                        <BottomNavigation showLabels>
                            <BottomNavigationAction component={Link} href="/" label="Home" icon={<HomeIcon />} />
                            <BottomNavigationAction component={Link} href="/settings" label="Settings" icon={<SettingsIcon />} />
                            <BottomNavigationAction component={Link} href="/cart" label="Cart" icon={<ShoppingCartIcon />} />
                            <BottomNavigationAction component={Button} onClick={toggleDrawer(true)} label="Menu" icon={<MenuIcon />} />
                        </BottomNavigation>
                    </Paper>
                    <Drawer open={open} onClose={toggleDrawer(false)}>
                        {DrawerList}
                    </Drawer>
                </>
            ) : (
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box'
                        }
                    }}
                    variant="permanent"
                >
                    {DrawerList}
                </Drawer>
            )}
            <Card sx={{ height: '100vh', flexGrow: 1, overflow: 'scroll', paddingBottom: '40px' }}>
                <CardHeader title="PWA POC" />
                <CardContent>{children}</CardContent>
            </Card>
        </Box>
    )
}
