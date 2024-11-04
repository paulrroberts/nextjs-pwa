import Image from 'next/image'
import '../products.scss'

export default function Page() {
    return (
        <div className="product-card-wrapper">
            <div className="search-container">
                <span className="search-icon">🔍</span>
                <input type="text" className="search-input" placeholder="Search for products" />
                <a href="#" className="cancel-btn">
                    Cancel
                </a>
            </div>

            <div className="results-header">
                <p>12 results for "Beauty Devices"</p>
            </div>

            <div className="product-grid">
                <div className="product-card">
                    <Image src="/products/nuskin-renuspa-io.png" className="product-image" alt="RenuSpa" width={400} height={400} />
                    <div className="product-title">Nu Skin® RenuSpa iO™</div>
                    <div className="product-price">$ 299.00</div>
                    <div className="product-sv">SV: 250</div>
                </div>

                <div className="product-card">
                    <Image src="/products/ageloc-rose-gold-lumispa-io.png" className="product-image" alt="LumiSpa Rose" width={400} height={400} />
                    <div className="product-title">ageLOC Rose Gold LumiSpa® iO</div>
                    <div className="product-price">$ 199.00</div>
                    <div className="product-sv">SV: 167</div>
                </div>

                <div className="product-card">
                    <span className="bundle-tag">Bundle</span>
                    <Image src="/products/ageloc-blue-lumispa-io-cleaser.png" className="product-image" alt="LumiSpa Blue" width={400} height={400} />
                    <div className="product-title">ageLOC Blue LumiSpa® iO + Cleanser</div>
                    <div className="product-price">$ 209.00</div>
                </div>

                <div className="product-card">
                    <span className="bundle-tag">Bundle</span>
                    <Image
                        src="/products/ageloc-rose-gold-lumispa-io-cleaser.png"
                        className="product-image"
                        alt="LumiSpa Rose Bundle"
                        width={400}
                        height={400}
                    />
                    <div className="product-title">ageLOC Rose Gold LumiSpa® iO + Cleanser</div>
                    <div className="product-price">$ 209.00</div>
                </div>
                <div className="product-card">
                    <Image src="/products/ageloc-lumispa-silicone-head.png" className="product-image" alt="RenuSpa" width={400} height={400} />
                    <div className="product-title">ageLOC LumiSpa® Silicone Head</div>
                    <div className="product-price">$ 51.00</div>
                </div>

                <div className="product-card">
                    <Image
                        src="/products/ageloc-lumispa-io-rose-gold-treatment-head.png"
                        className="product-image"
                        alt="LumiSpa Rose"
                        width={400}
                        height={400}
                    />
                    <div className="product-title">ageLOC® LumiSpa® iO Rose Gold Treatment Head</div>
                    <div className="product-price">$ 49.00</div>
                </div>

                <div className="product-card">
                    <Image src="/products/ageloc-lumispa-io.png" className="product-image" alt="LumiSpa Blue" width={400} height={400} />
                    <div className="product-title">ageLOC® LumiSpa® iO</div>
                    <div className="product-price">$ 245.00</div>
                </div>

                <div className="product-card">
                    <Image src="/products/ageloc-lumispa-io-head.png" className="product-image" alt="LumiSpa Rose Bundle" width={400} height={400} />
                    <div className="product-title">ageLOC LumiSpa iO Head</div>
                    <div className="product-price">$ 49.00</div>
                </div>
                <div className="product-card">
                    <span className="bundle-tag">Bundle</span>
                    <Image src="/products/lumispa-facial-spa-beauty-bundle.webp" className="product-image" alt="RenuSpa" width={400} height={400} />
                    <div className="product-title">LumiSpa® Facial Spa Beauty Bundle</div>
                    <div className="product-price">$ 842.00</div>
                </div>

                <div className="product-card">
                    <span className="bundle-tag">Bundle</span>
                    <Image
                        src="/products/lumispa-facial-spa-beauty-bundle-pink-head.webp"
                        className="product-image"
                        alt="LumiSpa Rose"
                        width={400}
                        height={400}
                    />
                    <div className="product-title">ageLOC Rose Gold LumiSpa® iO</div>
                    <div className="product-price">$ 842.00</div>
                </div>

                <div className="product-card">
                    <Image src="/products/nuskin-facial-spa.png" className="product-image" alt="LumiSpa Blue" width={400} height={400} />
                    <div className="product-title">Nu Skin® Facial Spa</div>
                    <div className="product-price">$ 425.00</div>
                </div>

                <div className="product-card">
                    <Image src="/products/ageloc-lumispa-idealeyes.png" className="product-image" alt="LumiSpa Rose Bundle" width={400} height={400} />
                    <div className="product-title">ageLOC® Lumispa® IdealEyes®</div>
                    <div className="product-price">$ 49.00</div>
                </div>
            </div>
        </div>
    )
}
