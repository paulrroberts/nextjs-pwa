'use client'

import React, { useState, useEffect } from 'react'
import { setCookie, getCookie } from 'cookies-next'
import dynamic from 'next/dynamic'

const ModuleLoading = () => <p className="animate-bounce text-white font-bold">Loading...</p>
const AddToIosSafari = dynamic(() => import('./addToIosSafari'), { loading: () => <ModuleLoading /> })
const AddToMobileChrome = dynamic(() => import('./addToMobileChrome'), { loading: () => <ModuleLoading /> })
const AddToMobileFirefox = dynamic(() => import('./addToMobileFirefox'), { loading: () => <ModuleLoading /> })
const AddToMobileFirefoxIos = dynamic(() => import('./addToMobileFirefoxIos'), { loading: () => <ModuleLoading /> })
const AddToMobileChromeIos = dynamic(() => import('./addToMobileChromeIos'), { loading: () => <ModuleLoading /> })
const AddToSamsung = dynamic(() => import('./addToSamsung'), { loading: () => <ModuleLoading /> })
const AddToOtherBrowser = dynamic(() => import('./addToOtherBrowser'), { loading: () => <ModuleLoading /> })

import useUserAgent from '../userAgent/userAgent'

// type AddToHomeScreenPromptType = 'safari' | 'chrome' | 'firefox' | 'other' | 'firefoxIos' | 'chromeIos' | 'samsung' | '';
const COOKIE_NAME = 'addToHomeScreenPrompt'

export default function AddToHomeScreen({ checkcookie, callback }) {
    const [displayPrompt, setDisplayPrompt] = useState('')
    const { userAgent, isMobile, isStandalone, isIOS } = useUserAgent()

    const closePrompt = () => {
        setDisplayPrompt('')
        callback(false)
    }

    const doNotShowAgain = () => {
        // Create date 1 year from now
        const date = new Date()
        date.setFullYear(date.getFullYear() + 1)
        setCookie(COOKIE_NAME, 'dontShow', { expires: date }) // Set cookie for a year
        setDisplayPrompt('')
        callback(false)
    }

    useEffect(() => {
        const addToHomeScreenPromptCookie = getCookie(COOKIE_NAME)

        if (addToHomeScreenPromptCookie !== 'dontShow') {
            // Only show prompt if user is on mobile and app is not installed
            if (isMobile && !isStandalone) {
                if (userAgent === 'Safari') {
                    setDisplayPrompt('safari')
                } else if (userAgent === 'Chrome') {
                    setDisplayPrompt('chrome')
                } else if (userAgent === 'Firefox') {
                    setDisplayPrompt('firefox')
                } else if (userAgent === 'FirefoxiOS') {
                    setDisplayPrompt('firefoxIos')
                } else if (userAgent === 'ChromeiOS') {
                    setDisplayPrompt('chromeIos')
                } else if (userAgent === 'SamsungBrowser') {
                    setDisplayPrompt('samsung')
                } else {
                    setDisplayPrompt('other')
                }
            }
        }
    }, [userAgent, isMobile, isStandalone, isIOS, checkcookie])

    const Prompt = () => (
        <>
            {
                {
                    safari: <AddToIosSafari closePrompt={closePrompt} doNotShowAgain={doNotShowAgain} />,
                    chrome: <AddToMobileChrome closePrompt={closePrompt} doNotShowAgain={doNotShowAgain} />,
                    firefox: <AddToMobileFirefox closePrompt={closePrompt} doNotShowAgain={doNotShowAgain} />,
                    firefoxIos: <AddToMobileFirefoxIos closePrompt={closePrompt} doNotShowAgain={doNotShowAgain} />,
                    chromeIos: <AddToMobileChromeIos closePrompt={closePrompt} doNotShowAgain={doNotShowAgain} />,
                    samsung: <AddToSamsung closePrompt={closePrompt} doNotShowAgain={doNotShowAgain} />,
                    other: <AddToOtherBrowser closePrompt={closePrompt} doNotShowAgain={doNotShowAgain} />,
                    '': <></>
                }[displayPrompt]
            }
        </>
    )

    return (
        <>
            {displayPrompt !== '' ? (
                <>
                    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/70" style={{ zIndex: 110 }} onClick={closePrompt}>
                        <Prompt />
                    </div>
                </>
            ) : (
                <></>
            )}
        </>
    )
}
