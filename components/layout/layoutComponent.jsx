'use client'

import { useEffect, useState } from 'react'
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
    SwipeableDrawer,
    Snackbar,
    Alert
} from '@mui/material'
import Link from 'next/link'
import { deleteCookie, getCookie } from 'cookies-next'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PersonIcon from '@mui/icons-material/Person'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import BarChartIcon from '@mui/icons-material/BarChart'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import StorefrontIcon from '@mui/icons-material/Storefront'
import LogoutIcon from '@mui/icons-material/Logout'
import LoginIcon from '@mui/icons-material/Login'
import CachedIcon from '@mui/icons-material/Cached'
import Image from 'next/image'
import useUserAgent from '../userAgent/userAgent'
import { useRouter } from 'next/navigation'

const drawerWidth = 255
const LOGGED_IN = 'loggedIn'
const ACCOUNT_TYPE = 'accountType'
const LOGOUT_MESSAGE = 'User successfully logged out'
const LOGIN_MESSAGE = 'User successfully logged in'

export default function LayoutComponent({ children }) {
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const [activeTab, setActiveTab] = useState(0)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [accountType, setAccountType] = useState('')
    const [showLogin, setShowLogin] = useState(false)
    const [showSnackbar, setShowSnackbar] = useState(false)
    const [loginOutMessage, setLoginOutMessage] = useState(LOGIN_MESSAGE)
    const { isMobile } = useUserAgent()

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen)
    }

    const checkLogin = () => {
        const loggedIn = getCookie(LOGGED_IN)
        setIsLoggedIn(loggedIn)
        const accntType = getCookie(ACCOUNT_TYPE)
        setAccountType(accntType)
    }

    useEffect(() => {
        checkLogin()
    }, [setIsLoggedIn, isLoggedIn, accountType, router])

    const logOut = () => {
        deleteCookie(LOGGED_IN)
        deleteCookie(ACCOUNT_TYPE)
        checkLogin()
        setLoginOutMessage(LOGOUT_MESSAGE)
        setShowSnackbar(true)
        router.push('/')
    }

    const iconMap = {
        HomeOutlinedIcon: <HomeOutlinedIcon />,
        BarChartIcon: <BarChartIcon />,
        PersonIcon: <PersonIcon />,
        ShoppingCartOutlinedIcon: <ShoppingCartOutlinedIcon />,
        NotificationsActiveIcon: <NotificationsActiveIcon />,
        StorefrontIcon: <StorefrontIcon />
    }

    const titleToTabMap = new Map([
        ['Home', 0],
        ['Shop', 1],
        ['Cart', 2]
    ])

    const tabsMap = new Map([
        [0, '/nuskin'],
        ['Home', '/nuskin'],
        [1, '/category'],
        ['Shop', '/nuskin/category'],
        [2, '/nuskin/cart'],
        ['Cart', '/nuskin/cart']
    ])

    const drawerLinks = [
        {
            title: 'Home',
            icon: 'HomeIcon',
            href: '/nuskin'
        },
        {
            title: 'Shop',
            icon: 'StorefrontIcon',
            href: '/nuskin/category'
        },
        {
            title: 'Profile',
            icon: 'PersonIcon',
            href: '/nuskin/profile'
        },
        {
            title: 'Cart',
            icon: 'ShoppingCartIcon',
            href: '/nuskin/cart'
        },
        {
            title: 'Notifications',
            icon: 'NotificationsActiveIcon',
            href: '/nuskin/subscribe'
        }
    ]

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {drawerLinks.map((link, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton
                            onClick={() => {
                                if (tabsMap.get(link.title)) {
                                    router.push(tabsMap.get(link.title))
                                    setActiveTab(titleToTabMap.get(link.title))
                                } else {
                                    router.push(link.href)
                                    setActiveTab(null)
                                }
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
                {isLoggedIn && accountType === 'dist' && (
                    <>
                        <ListItem>
                            <ListItemButton component={Link} href="/nuskin/build">
                                <ListItemIcon>
                                    <CachedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Build" />
                            </ListItemButton>
                        </ListItem>
                    </>
                )}
                {isLoggedIn ? (
                    <ListItem>
                        <ListItemButton onClick={logOut}>
                            <ListItemIcon>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary="Log Out" />
                        </ListItemButton>
                    </ListItem>
                ) : (
                    <ListItem>
                        <ListItemButton component={Link} href="/login">
                            <ListItemIcon>
                                <LoginIcon />
                            </ListItemIcon>
                            <ListItemText primary="Log In" />
                        </ListItemButton>
                    </ListItem>
                )}
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
                {/* {showLogin && <Login callback={handleLogin} />} */}
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
                                        if (newValue !== 3) {
                                            router.push(tabsMap.get(newValue))
                                            setActiveTab(newValue)
                                        }
                                    }}
                                >
                                    <BottomNavigationAction component={Link} href="/nuskin" label="Home" icon={<HomeOutlinedIcon />} />
                                    <BottomNavigationAction component={Link} href="/nuskin/products" label="Shop" icon={<StorefrontIcon />} />
                                    {accountType === 'dist' && (
                                        <BottomNavigationAction component={Link} href="/nuskin/build" label="Build" icon={<CachedIcon />} />
                                    )}
                                    <BottomNavigationAction component={Link} href="/nuskin/cart" label="Cart" icon={<ShoppingCartOutlinedIcon />} />
                                    <BottomNavigationAction component={Button} onClick={toggleDrawer(true)} label="Menu" icon={<MenuIcon />} />
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
            <Snackbar
                open={showSnackbar}
                autoHideDuration={6000}
                onClose={() => setShowSnackbar(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert>{loginOutMessage}</Alert>
            </Snackbar>
        </Box>
    )
}
