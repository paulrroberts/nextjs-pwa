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
                <h2>35 results for "Skin & Beauty"</h2>
                <button class="filter-btn">FILTER ⚙️</button>
            </div>

            <div class="product-grid">
                <div class="product-card">
                    <Image src="/products/ageloc-rose-gold-lumispa-io.png" class="product-image" alt="RenuSpa" width={400} height={400} />
                    <div class="product-title">ageLOC Rose Gold LumiSpa® iO</div>
                    <div class="product-price">$ 245.00</div>
                </div>

                <div class="product-card">
                    <span class="bundle-tag">Bundle</span>
                    <Image src="/products/tru-face-peptide-retinol.png" class="product-image" alt="LumiSpa Rose" width={400} height={400} />
                    <div class="product-title">ageLOC® Tru Face® Peptide Retinol Complex + Uplifting Cream Bundle</div>
                    <div class="product-price">$ 200.00</div>
                </div>

                <div class="product-card">
                    <Image src="/products/dermatic-effects.png" class="product-image" alt="LumiSpa Blue" width={400} height={400} />
                    <div class="product-title">ageLOC® Dermatic Effects® Body Contouring Lotion</div>
                    <div class="product-price">$ 56.00</div>
                </div>

                <div class="product-card">
                    <span class="bundle-tag">Bundle</span>
                    <Image src="/products/clear-line-bundle.png" class="product-image" alt="LumiSpa Rose Bundle" width={400} height={400} />
                    <div class="product-title">Clear Line Bundle</div>
                    <div class="product-price">$ 127.00</div>
                </div>
            </div>
        </div>
    )
}
