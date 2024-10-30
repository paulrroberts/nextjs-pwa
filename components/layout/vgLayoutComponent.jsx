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
import BarChartIcon from '@mui/icons-material/BarChart'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import SellOutlinedIcon from '@mui/icons-material/SellOutlined'
import Image from 'next/image'
import useUserAgent from '../userAgent/userAgent'
import { useRouter } from 'next/navigation'
import './vgLayout.css'

const drawerWidth = 255

export default function VGLayoutComponent({ children }) {
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const [activeTab, setActiveTab] = useState(0)
    const { isMobile } = useUserAgent()

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen)
    }

    const titleToTabMap = new Map([
        ['Home', 0],
        ['Products', 1],
        ['Build', 2],
        ['Other', 3]
    ])

    const tabsMap = new Map([
        [0, '/stela'],
        ['Home', '/stela'],
        [1, '/stela/products'],
        ['Products', '/stela/products'],
        [2, '/stela/build'],
        ['Build', '/stela/build'],
        [3, '/stela/other'],
        ['Other', '/stela/other']
    ])

    const iconMap = {
        HomeIcon: <HomeIcon />,
        BarChartIcon: <BarChartIcon />,
        PersonIcon: <PersonIcon />,
        ShoppingCartIcon: <ShoppingCartIcon />,
        NotificationsActiveIcon: <NotificationsActiveIcon />,
        SellOutlinedIcon: <SellOutlinedIcon />
    }

    const drawerLinks = [
        {
            title: 'Home',
            icon: 'HomeIcon',
            href: '/stela'
        },
        {
            title: 'Products',
            icon: 'BarChartIcon',
            href: '/stela/products'
        },
        {
            title: 'Build',
            icon: 'ShoppingCartIcon',
            href: '/stela/build'
        },
        {
            title: 'Other',
            icon: 'SellOutlinedIcon',
            href: '/stela/other'
        }
    ]

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {drawerLinks.map((link, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton
                            onClick={() => {
                                router.push(tabsMap.get(link.title))
                                setActiveTab(titleToTabMap.get(link.title))
                            }}
                        >
                            <ListItemIcon>{iconMap[link.icon]}</ListItemIcon>
                            <ListItemText primary={link.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <hr />
            <List>
                <ListItem>
                    <ListItemButton component={Link} href="/">
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText>Nu Skin Home</ListItemText>
                    </ListItemButton>
                </ListItem>
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
                                <BottomNavigation
                                    showLabels
                                    value={activeTab}
                                    onChange={(event, newValue) => {
                                        if (newValue !== 4) {
                                            router.push(tabsMap.get(newValue))
                                            setActiveTab(newValue)
                                        }
                                    }}
                                >
                                    <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                                    <BottomNavigationAction label="Products" icon={<BarChartIcon />} />
                                    <BottomNavigationAction label="Build" icon={<ShoppingCartIcon />} />
                                    <BottomNavigationAction label="Other" icon={<SellOutlinedIcon />} />
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
