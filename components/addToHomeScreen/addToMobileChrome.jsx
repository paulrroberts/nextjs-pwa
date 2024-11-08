import React from 'react'

import { FaTimes } from 'react-icons/fa'
import { HiDotsVertical } from 'react-icons/hi'
import { MdAddToHomeScreen } from 'react-icons/md'
import { ImArrowUp } from 'react-icons/im'
import { Button } from '@mui/material'

export default function AddToMobileChrome(props) {
    const { closePrompt, doNotShowAgain } = props

    return (
        <div className="fixed top-0 left-0 right-0 h-[60%] pt-12 px-4" style={{ zIndex: 110, backgroundColor: '#fff', color: '#000' }}>
            <ImArrowUp className="text-4xl absolute top-[10px] right-[10px] text-neutral-700 z-10 animate-bounce" />
            <div className="relative p-4 h-full rounded-xl flex flex-col justify-around items-center text-center">
                <button className="absolute top-0 right-0 p-3" onClick={closePrompt}>
                    <FaTimes className="text-2xl" />
                </button>
                <p className="text-lg">For the best experience, we recommend installing the Nu Skin app to your home screen!</p>
                <div className="flex gap-2 items-center text-lg">
                    <p>Click the</p>
                    <HiDotsVertical className="text-4xl" />
                    <p>icon</p>
                </div>
                <div className="flex flex-col gap-2 items-center text-lg w-full px-4">
                    <p>Scroll down and then click:</p>
                    <div
                        className="bg-zinc-50 flex justify-between items-center w-full px-4 py-2 rounded-lg text-zinc-900"
                        style={{ backgroundColor: '#ededed', border: '1px solid lightgrey' }}
                    >
                        <MdAddToHomeScreen className="text-2xl" />
                        <p>Add to Home Screen</p>
                    </div>
                </div>
                <Button variant="outlined" onClick={doNotShowAgain}>
                    Don&apos;t show again
                </Button>
            </div>
        </div>
    )
}
