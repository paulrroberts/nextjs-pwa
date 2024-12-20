import Image from 'next/image'
import LooksIcon from '@mui/icons-material/Looks'
import SendIcon from '@mui/icons-material/Send'
import './vg.scss'

export default function VGHome() {
    return (
        <div className="vg-home-wrapper">
            <div className="offer-card">
                <h1 className="offer-title">Let's Create a Product Offer</h1>
                <div className="offer-icon">
                    <SendIcon sx={{ width: 125, height: 125 }} />
                </div>
                <p className="offer-description">
                    A Product Offer lets you send product recommendations to your friends on social media or other messaging platforms.
                </p>
                <button className="lets-go-button">Let's Go!</button>
            </div>
            <div className="">
                <Image src="/images/happy-couple.webp" alt="Happy Couple" className="promo-image" width={1024} height={413} style={{ marginBottom: '20px' }} />
            </div>
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
                            <LooksIcon sx={{ fill: '#fff' }} />
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
    )
}
