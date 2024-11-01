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
                <h2>35 results for "Nutrition"</h2>
                <button class="filter-btn">FILTER ⚙️</button>
            </div>

            <div class="product-grid">
                <div class="product-card">
                    <Image src="/products/pharmanex-e2.webp" class="product-image" alt="RenuSpa" width={400} height={400} />
                    <div class="product-title">Pharmanex® E2®</div>
                    <div class="product-price">$ 53.00</div>
                </div>

                <div class="product-card">
                    <Image src="/products/estera-cranberry.png" class="product-image" alt="LumiSpa Rose" width={400} height={400} />
                    <div class="product-title">Estera® Cranberry</div>
                    <div class="product-price">$ 34.00</div>
                </div>

                <div class="product-card">
                    <Image src="/products/probiotic.webp" class="product-image" alt="LumiSpa Blue" width={400} height={400} />
                    <div class="product-title">ProBio PCC®</div>
                    <div class="product-price">$ 51.00</div>
                </div>

                <div class="product-card">
                    <Image src="/products/jungamals.webp" class="product-image" alt="LumiSpa Rose Bundle" width={400} height={400} />
                    <div class="product-title">Pharmanex® Kids Jungamals®</div>
                    <div class="product-price">$ 209.00</div>
                </div>
            </div>
        </div>
    )
}
