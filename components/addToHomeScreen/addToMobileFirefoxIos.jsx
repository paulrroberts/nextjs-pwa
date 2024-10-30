import React from 'react'

import { AiOutlinePlusSquare } from 'react-icons/ai'
import { FaTimes, FaBars } from 'react-icons/fa'
import { ImArrowDown } from 'react-icons/im'
import { FiShare } from 'react-icons/fi'
import { Button } from '@mui/material'

export default function AddToMobileFirefoxIos(props) {
    const { closePrompt, doNotShowAgain } = props

    return (
        <div className="fixed bottom-0 left-0 right-0 h-[70%] z-50 pb-12 px-4" style={{ zIndex: 110, backgroundColor: '#fff', color: '#000' }}>
            <div className="relative bg-primary p-4 h-full rounded-xl flex flex-col justify-around items-center text-center">
                <button className="absolute top-0 right-0 p-3" onClick={closePrompt}>
                    <FaTimes className="text-2xl" />
                </button>
                <p className="text-lg">For the best experience, we recommend installing the Nu Skin app to your home screen!</p>
                <div className="flex gap-2 items-center text-lg">
                    <p>Click the</p>
                    <FaBars className="text-4xl" />
                    <p>icon</p>
                </div>
                <div className="flex flex-col gap-2 items-center text-lg w-full px-4">
                    <p>Scroll down and then click:</p>
                    <div
                        className="bg-zinc-800 flex items-center justify-between w-full px-8 py-2 rounded-lg"
                        style={{ backgroundColor: '#ededed', border: '1px solid lightgrey' }}
                    >
                        <p>Share</p>
                        <FiShare className="text-2xl" />
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-center text-lg w-full px-4">
                    <p>Then click:</p>
                    <div className="bg-zinc-800 flex items-center justify-between w-full px-8 py-2 rounded-lg">
                        <p>Add to Home Screen</p>
                        <AiOutlinePlusSquare className="text-2xl" />
                    </div>
                </div>
                <Button variant="outlined" onClick={doNotShowAgain}>
                    Don&apos;t show again
                </Button>
                <ImArrowDown className="text-4xl absolute -bottom-[50px] right-[5px] text-indigo-700 z-10 animate-bounce" />
            </div>
        </div>
    )
}
