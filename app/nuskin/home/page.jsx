'use client'

import { useEffect, useState } from 'react'
import { getCookie } from 'cookies-next'
import HomeContent from '../../../components/home/homeContent'
import VGHome from '../../../components/home/vgHome'

const LOGGED_IN = 'loggedIn'
const ACCOUNT_TYPE = 'accountType'

export default function Page() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [accountType, setAccountType] = useState('')

    useEffect(() => {
        const loggedIn = getCookie(LOGGED_IN)
        setIsLoggedIn(loggedIn)
        const accntType = getCookie(ACCOUNT_TYPE)
        setAccountType(accntType)
    }, [setIsLoggedIn, setAccountType])

    return <>{isLoggedIn && accountType === 'dist' ? <VGHome /> : <HomeContent />}</>
}
