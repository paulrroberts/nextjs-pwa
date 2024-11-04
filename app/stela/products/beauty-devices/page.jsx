import Image from 'next/image'
import './category.css'

export default function Page() {
    return (
        <div style={{ marginBottom: '40px' }}>
            <div className="search-container">
                <span className="search-icon">🔍</span>
                <input type="text" className="search-input" placeholder="Search for products" />
                <a href="#" className="cancel-btn">
                    Cancel
                </a>
            </div>

            <div className="results-header">
                <h2>35 results for "Beauty Devices"</h2>
                <button className="filter-btn">FILTER ⚙️</button>
            </div>

            <div className="product-grid">
                <div className="product-card">
                    <Image src="/products/nuskin-renuspa-io.png" className="product-image" alt="RenuSpa" width={400} height={400} />
                    <div className="product-category">AGELOC WELLSPA IO</div>
                    <div className="product-title">Nu Skin® RenuSpa iO™</div>
                    <div className="product-price">$ 299.00</div>
                    <div className="product-sv">SV: 250</div>
                </div>

                <div className="product-card">
                    <Image src="/products/ageloc-rose-gold-lumispa-io.png" className="product-image" alt="LumiSpa Rose" width={400} height={400} />
                    <div className="product-category">AGELOC LUMISPA</div>
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
            </div>
        </div>
    )
}
