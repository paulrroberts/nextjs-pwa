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
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import BarChartIcon from '@mui/icons-material/BarChart'
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined'
import StorefrontIcon from '@mui/icons-material/Storefront'
import LogoutIcon from '@mui/icons-material/Logout'
import LoginIcon from '@mui/icons-material/Login'
import CachedIcon from '@mui/icons-material/Cached'
import MenuIcon from '@mui/icons-material/Menu'
import GetAppIcon from '@mui/icons-material/GetApp'
import Image from 'next/image'
import useUserAgent from '../userAgent/userAgent'
import { useRouter } from 'next/navigation'
import AddToHomeScreen from '../addToHomeScreen/addToHomeScreen'

const drawerWidth = 255
const LOGGED_IN = 'loggedIn'
const ACCOUNT_TYPE = 'accountType'
const LOGOUT_MESSAGE = 'User successfully logged out'
const LOGIN_MESSAGE = 'User successfully logged in'

const titleToTabMap = new Map([
    ['Home', 0],
    ['Shop', 1],
    ['Cart', 2]
])

const distTitleToTabMap = new Map([
    ['Home', 0],
    ['Shop', 1],
    ['Build', 2],
    ['Cart', 3]
])

const tabsMap = new Map([
    [0, '/nuskin'],
    ['Home', '/nuskin'],
    [1, '/category'],
    ['Shop', '/nuskin/products'],
    [2, '/nuskin/cart'],
    ['Cart', '/nuskin/cart']
])

const distTabsMap = new Map([
    [0, '/nuskin'],
    ['Home', '/nuskin'],
    [1, '/nuskin/products'],
    ['Shop', '/nuskin/products'],
    [2, '/nuskin/build'],
    ['Build', '/nuskin/build'],
    [3, '/nuskin/cart'],
    ['Cart', '/nuskin/cart']
])

const drawerLinks = [
    {
        title: 'Home',
        icon: 'HomeOutlinedIcon',
        href: '/nuskin'
    },
    {
        title: 'Shop',
        icon: 'StorefrontIcon',
        href: '/nuskin/products'
    },
    {
        title: 'Profile',
        icon: 'PersonOutlineOutlinedIcon',
        href: '/nuskin/profile'
    },
    {
        title: 'Cart',
        icon: 'ShoppingCartOutlinedIcon',
        href: '/nuskin/cart'
    },
    {
        title: 'Notifications',
        icon: 'NotificationsActiveOutlinedIcon',
        href: '/nuskin/subscribe'
    }
]

const distDrawerLinks = [
    {
        title: 'Home',
        icon: 'HomeOutlinedIcon',
        href: '/nuskin'
    },
    {
        title: 'Shop',
        icon: 'StorefrontIcon',
        href: '/nuskin/products'
    },
    {
        title: 'Build',
        icon: 'CachedIcon',
        href: '/nuskin/build'
    },
    {
        title: 'Profile',
        icon: 'PersonOutlineOutlinedIcon',
        href: '/nuskin/profile'
    },
    {
        title: 'Cart',
        icon: 'ShoppingCartOutlinedIcon',
        href: '/nuskin/cart'
    },
    {
        title: 'Notifications',
        icon: 'NotificationsActiveOutlinedIcon',
        href: '/nuskin/subscribe'
    }
]

export default function LayoutComponent({ children }) {
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const [activeTab, setActiveTab] = useState(0)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [accountType, setAccountType] = useState('')
    const [showInstall, setShowInstall] = useState(false)
    const [showSnackbar, setShowSnackbar] = useState(false)
    const [loginOutMessage, setLoginOutMessage] = useState(LOGIN_MESSAGE)
    const [tabs, setTabs] = useState(tabsMap)
    const [titleTabs, setTitleTabs] = useState(titleToTabMap)
    const [drawerLnks, setDrawerLnks] = useState(drawerLinks)
    const [showInstallPopup, setShowInstallPopup] = useState(false)
    const { isMobile, isStandalone } = useUserAgent()

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen)
    }

    const checkLogin = () => {
        const loggedIn = getCookie(LOGGED_IN)
        setIsLoggedIn(loggedIn)
        const accntType = getCookie(ACCOUNT_TYPE)
        setAccountType(accntType)
    }

    // comment for commit trigger
    useEffect(() => {
        checkLogin()
        const showAddToHomePrompt = getCookie('addToHomeScreenPrompt') ? true : false
        setShowInstall(showAddToHomePrompt)
        if (isLoggedIn && accountType === 'dist') {
            setTabs(distTabsMap)
            setTitleTabs(distTitleToTabMap)
            setDrawerLnks(distDrawerLinks)
        }
    }, [setIsLoggedIn, isLoggedIn, accountType, router, setTabs, tabs, setShowInstall, showInstall])

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
        CachedIcon: <CachedIcon />,
        PersonOutlineOutlinedIcon: <PersonOutlineOutlinedIcon />,
        ShoppingCartOutlinedIcon: <ShoppingCartOutlinedIcon />,
        NotificationsActiveOutlinedIcon: <NotificationsActiveOutlinedIcon />,
        StorefrontIcon: <StorefrontIcon />
    }

    const handleInstallClick = () => {
        deleteCookie('addToHomeScreenPrompt')
        setShowInstallPopup(true)
    }

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {drawerLnks.map((link, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton
                            onClick={() => {
                                if (tabs.get(link.title)) {
                                    router.push(tabs.get(link.title))
                                    setActiveTab(titleTabs.get(link.title))
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
            <AddToHomeScreen checkcookie={showInstallPopup} callback={setShowInstall} />
            <Card sx={{ height: '100vh', flexGrow: 1, overflow: 'scroll', paddingBottom: '40px' }}>
                <CardMedia className="main-logo">
                    <div className="menu-logo">
                        <MenuIcon onClick={toggleDrawer(true)} sx={{ marginRight: '10px' }} />
                        <Link href="/">
                            <Image src="/nu-skin-logo.svg" width={150} height={33} alt="Nu Skin Logo" />
                        </Link>
                    </div>
                    {!isStandalone && (
                        <div className="mini-nav">
                            <Link href="/nuskin/profile">
                                <PersonOutlineOutlinedIcon />
                            </Link>
                            <Link href="/nuskin/cart">
                                <ShoppingCartOutlinedIcon />
                            </Link>
                            {showInstall && (
                                <div style={{ display: 'flex', flexDirection: 'column' }} onClick={handleInstallClick}>
                                    <GetAppIcon />
                                    <span style={{ fontSize: '12px' }}>Install</span>
                                </div>
                            )}
                        </div>
                    )}
                </CardMedia>
                <Box sx={{ display: 'flex' }}>
                    {isMobile ? (
                        <>
                            <SwipeableDrawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                                {DrawerList}
                            </SwipeableDrawer>
                            {isStandalone && (
                                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, paddingBottom: '20px', zIndex: 100 }} elevation={3}>
                                    <BottomNavigation
                                        showLabels
                                        value={activeTab}
                                        onChange={(event, newValue) => {
                                            router.push(tabs.get(newValue))
                                            setActiveTab(newValue)
                                        }}
                                    >
                                        <BottomNavigationAction component={Link} href="/nuskin" label="Home" icon={<HomeOutlinedIcon />} />
                                        <BottomNavigationAction component={Link} href="/nuskin/products" label="Shop" icon={<StorefrontIcon />} />
                                        {accountType === 'dist' && (
                                            <BottomNavigationAction component={Link} href="/nuskin/build" label="Build" icon={<CachedIcon />} />
                                        )}
                                        <BottomNavigationAction component={Link} href="/nuskin/cart" label="Cart" icon={<ShoppingCartOutlinedIcon />} />
                                        <BottomNavigationAction component={Link} href="/nuskin/profile" label="Profile" icon={<PersonOutlineOutlinedIcon />} />
                                    </BottomNavigation>
                                </Paper>
                            )}
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
