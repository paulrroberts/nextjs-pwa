import React from 'react'
import Link from 'next/link'
import { Button } from '@mui/material'

import { FaTimes } from 'react-icons/fa'

export default function AddToOtherBrowser(props) {
    const { closePrompt, doNotShowAgain } = props
    const searchUrl = `https://www.google.com/search?q=add+to+home+screen+for+common-mobile-browsers`

    return (
        <div
            className="fixed bottom-0 left-0 right-0 h-[60%] z-50 pb-12 px-4 flex flex-col items-center justify-around"
            style={{ zIndex: 110, backgroundColor: '#fff', color: '#000' }}
        >
            <div className="relative p-4 h-full rounded-xl flex flex-col justify-around items-center text-center">
                <button className="absolute top-0 right-0 p-3" onClick={closePrompt}>
                    <FaTimes className="text-2xl" />
                </button>
                <p className="text-lg">For the best experience, we recommend installing the Nu Skin app to your home screen!</p>
                <div className="flex flex-col gap-4 items-center text-lg">
                    <p>Unfortunately, we were unable to determine which browser you are using. Please search for how to install a web app for your browser.</p>
                    <Link className="text-blue-300" href={searchUrl} target="_blank">
                        Try This Search
                    </Link>
                </div>
                <Button variant="outlined" onClick={doNotShowAgain}>
                    Don&apos;t show again
                </Button>
            </div>
        </div>
    )
}
