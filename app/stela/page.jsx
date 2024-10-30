'use client'

import Image from 'next/image'
import { setCookie, getCookie } from 'cookies-next'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import './stela.css'

const LOGGED_IN = 'loggedIn'
const ACCOUNT_TYPE = 'accountType'

export default function Page() {
    const router = useRouter()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [accountType, setAccountType] = useState('')

    useEffect(() => {
        const loggedIn = getCookie(LOGGED_IN)
        const accntType = getCookie(ACCOUNT_TYPE)
        setIsLoggedIn(loggedIn)
        setAccountType(accntType)

        if (!loggedIn || (loggedIn && accntType === 'cust')) {
            router.push('/login')
        }
    })

    return (
        <div>
            {/* <div className="header">
                <div className="logo">
                    <img src="path-to-stela-logo.png" alt="Stela Logo" />
                    <span>Stela</span>
                </div>
                <div className="header-right">
                    <div className="notification">
                        <img src="path-to-profile-pic.png" alt="Profile" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                    </div>
                    <div className="notification">
                        <img src="path-to-message-icon.png" alt="Messages" style={{ width: '30px' }} />
                        <span className="badge">6</span>
                    </div>
                    <div className="notification">
                        <img src="path-to-cart-icon.png" alt="Cart" style={{ width: '30px' }} />
                        <span className="badge">7</span>
                    </div>
                </div>
            </div> */}
            <div className="offer-card">
                <h1 className="offer-title">Let's Create a Product Offer</h1>
                <div className="offer-icon">
                    {/* Replace with actual icon SVG */}
                    <svg width="100" height="100" viewBox="0 0 100 100">
                        {/* Add phone and paper airplane icon paths here  */}
                    </svg>
                </div>
                <p className="offer-description">
                    A Product Offer lets you send product recommendations to your friends on social media or other messaging platforms.
                </p>
                <button className="lets-go-button">Let's Go!</button>
            </div>
            <img src="path-to-promo-image.jpg" alt="Happy Couple" className="promo-image" />
            <div className="stats-container">
                <div className="stats-section volumes">
                    <div className="section-header">
                        <h2>
                            VOLUMES <span className="info-icon">ⓘ</span>
                        </h2>
                        <span className="arrow-icon">➜</span>
                    </div>
                    <div className="volume-item">
                        <h3>Group Sales Volume</h3>
                        <p className="volume-value">0.00</p>
                    </div>
                    <div className="volume-item">
                        <h3>Personal Sales Volume</h3>
                        <p className="volume-value">0.00</p>
                    </div>
                    <div className="volume-item">
                        <h3>Sharing Volume</h3>
                        <p className="volume-value">0.00</p>
                    </div>
                </div>

                <div className="stats-section customers">
                    <div className="section-header">
                        <h2>
                            NEW CUSTOMERS <span className="info-icon">ⓘ</span>
                        </h2>
                    </div>
                    <p className="empty-state">You do not have any new customers</p>
                </div>

                <div className="stats-section bonuses">
                    <div className="section-header">
                        <h2>
                            SHARING BONUSES <span className="info-icon">ⓘ</span>
                        </h2>
                    </div>
                    <p className="empty-state">You do not have Bonuses Earned yet.</p>
                </div>

                <div className="stats-section velocity">
                    <div className="section-header">
                        <h2>
                            VELOCITY ACCOUNT <span className="info-icon">ⓘ</span>
                        </h2>
                    </div>
                    <div className="velocity-amount">0.00</div>
                    <button className="pay-button">PAY ME NOW</button>
                </div>

                <div className="stats-section learning">
                    <div className="section-header">
                        <h2>LEARNING CENTER PROGRAMS</h2>
                        <span className="arrow-icon">➜</span>
                    </div>
                    <div className="learning-programs">
                        <div className="program-item">
                            <div className="program-icon play">▶</div>
                            <div className="program-info">
                                <div className="program-title">Welcome To Nu Skin (US)</div>
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{ width: '100%' }}></div>
                                </div>
                            </div>
                            <div className="program-progress">7/7</div>
                        </div>

                        <div className="program-item">
                            <div className="program-icon check">✓</div>
                            <div className="program-info">
                                <div className="program-title">Compliance (US)</div>
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{ width: '25%' }}></div>
                                </div>
                            </div>
                            <div className="program-progress">2/8</div>
                        </div>

                        <div className="program-item">
                            <div className="program-icon">
                                <img src="path-to-rainbow-icon.png" alt="Program Icon" />
                            </div>
                            <div className="program-info">
                                <div className="program-title">Consumer Retention Program (US)</div>
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{ width: '100%' }}></div>
                                </div>
                            </div>
                            <div className="program-progress">1/1</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
