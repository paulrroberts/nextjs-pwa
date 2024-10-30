'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { setCookie, getCookie } from 'cookies-next'
import './login.css'
import Image from 'next/image'
import { FormControl, InputAdornment, InputLabel, OutlinedInput, IconButton, TextField } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

export default function Page() {
    const router = useRouter()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showError, setShowError] = useState(false)

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleUserNameChange = (e) => {
        setUsername(e.target.value)
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show)

    const handleMouseDownPassword = (e) => {
        e.preventDefault()
    }

    const handleMouseUpPassword = (e) => {
        e.preventDefault()
    }

    const handleLogin = (e) => {
        e.preventDefault()
        const date = new Date()

        // Check credentials and redirect accordingly
        if (username === 'usdist' && password === 'abc123') {
            setCookie
            router.push('/vgclient')
        } else if (username === 'uscust' && password === 'abc123') {
            console.log('cust user')
            router.push('/nuskin')
        } else {
            console.log('show error')
            setShowError(true)
        }
    }

    return (
        <div>
            <div className="logo">
                <Image src="/nu-skin-logo.svg" alt="Nu Skin Logo" width={260} height={200} />
            </div>

            <h1 className="sign-in-title">Sign In</h1>

            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <TextField id="username" onChange={handleUserNameChange} label="Username" variant="outlined" required sx={{ width: '100%' }} />
                </div>
                <div className="form-group">
                    <FormControl sx={{ width: '100%' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            onChange={handlePasswordChange}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label={showPassword ? 'hide the password' : 'display the password'}
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        onMouseUp={handleMouseUpPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                </div>
                <button type="submit" className="sign-in-btn">
                    Sign in
                </button>
            </form>
            {showError === true && (
                <div className="error-message">Unknown login, only 'usdist' and 'uscust' are valid usernames. Also check your password.</div>
            )}
        </div>
    )
}
