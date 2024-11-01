import Image from 'next/image'
import './category.css'

export default function Page() {
    return (
        <div style={{ marginBottom: '40px' }}>
            <div class="search-container">
                <span class="search-icon">🔍</span>
                <input type="text" class="search-input" placeholder="Search for products" />
                <a href="#" class="cancel-btn">
                    Cancel
                </a>
            </div>

            <div class="results-header">
                <h2>35 results for "Beauty Devices"</h2>
                <button class="filter-btn">FILTER ⚙️</button>
            </div>

            <div class="product-grid">
                <div class="product-card">
                    <Image src="/products/nuskin-renuspa-io.png" class="product-image" alt="RenuSpa" width={400} height={400} />
                    <div class="product-category">AGELOC WELLSPA IO</div>
                    <div class="product-title">Nu Skin® RenuSpa iO™</div>
                    <div class="product-price">$ 299.00</div>
                    <div class="product-sv">SV: 250</div>
                </div>

                <div class="product-card">
                    <Image src="/products/ageloc-rose-gold-lumispa-io.png" class="product-image" alt="LumiSpa Rose" width={400} height={400} />
                    <div class="product-category">AGELOC LUMISPA</div>
                    <div class="product-title">ageLOC Rose Gold LumiSpa® iO</div>
                    <div class="product-price">$ 199.00</div>
                    <div class="product-sv">SV: 167</div>
                </div>

                <div class="product-card">
                    <span class="bundle-tag">Bundle</span>
                    <Image src="/products/ageloc-blue-lumispa-io-cleaser.png" class="product-image" alt="LumiSpa Blue" width={400} height={400} />
                    <div class="product-title">ageLOC Blue LumiSpa® iO + Cleanser</div>
                    <div class="product-price">$ 209.00</div>
                </div>

                <div class="product-card">
                    <span class="bundle-tag">Bundle</span>
                    <Image src="/products/ageloc-rose-gold-lumispa-io-cleaser.png" class="product-image" alt="LumiSpa Rose Bundle" width={400} height={400} />
                    <div class="product-title">ageLOC Rose Gold LumiSpa® iO + Cleanser</div>
                    <div class="product-price">$ 209.00</div>
                </div>
            </div>
        </div>
    )
}
