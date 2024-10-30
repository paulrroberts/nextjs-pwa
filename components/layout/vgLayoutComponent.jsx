'use client'

import { useState } from 'react'
import {
    Card,
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
    Paper,
    CardMedia,
    SwipeableDrawer
} from '@mui/material'
import Link from 'next/link'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import MenuIcon from '@mui/icons-material/Menu'
import BarChartIcon from '@mui/icons-material/BarChart'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import SellOutlinedIcon from '@mui/icons-material/SellOutlined'
import Image from 'next/image'
import useUserAgent from '../userAgent/userAgent'

const drawerWidth = 255

export default function VGLayoutComponent({ children }) {
    const [open, setOpen] = useState(false)
    const { isMobile } = useUserAgent()

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen)
    }

    const iconMap = {
        HomeIcon: <HomeIcon />,
        BarChartIcon: <BarChartIcon />,
        PersonIcon: <PersonIcon />,
        ShoppingCartIcon: <ShoppingCartIcon />,
        NotificationsActiveIcon: <NotificationsActiveIcon />
    }

    const drawerLinks = [
        {
            title: 'Home',
            icon: 'HomeIcon',
            href: '/'
        },
        {
            title: 'Volumes',
            icon: 'BarChartIcon',
            href: '/vgclient'
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
        },
        {
            title: 'Notifications',
            icon: 'NotificationsActiveIcon',
            href: '/subscribe'
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
            <Card sx={{ height: '100vh', flexGrow: 1, overflow: 'scroll', paddingBottom: '40px' }}>
                <CardMedia sx={{ padding: '20px' }}>
                    <Link href="/">
                        <Image src="/nu-skin-logo.svg" width={150} height={33} alt="Nu Skin Logo" />
                    </Link>
                </CardMedia>
                <Box sx={{ display: 'flex' }}>
                    {isMobile ? (
                        <>
                            <SwipeableDrawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                                {DrawerList}
                            </SwipeableDrawer>
                            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, paddingBottom: '20px', zIndex: 100 }} elevation={3}>
                                <BottomNavigation showLabels>
                                    <BottomNavigationAction component={Link} href="/" label="Home" icon={<HomeIcon />} />
                                    <BottomNavigationAction component={Link} href="/vgclient" label="Products" icon={<BarChartIcon />} />
                                    <BottomNavigationAction component={Link} href="/cart" label="Build" icon={<ShoppingCartIcon />} />
                                    <BottomNavigationAction component={Link} href="/cart" label="Other" icon={<SellOutlinedIcon />} />
                                    <BottomNavigationAction component={Button} onClick={toggleDrawer(true)} label="More" icon={<MoreHorizIcon />} />
                                </BottomNavigation>
                            </Paper>
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
                    <CardContent sx={{ flexGrow: 1 }}>{children}</CardContent>
                </Box>
            </Card>
        </Box>
    )
}
