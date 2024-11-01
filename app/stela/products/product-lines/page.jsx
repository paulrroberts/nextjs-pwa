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
                <h2>35 results for "Product Lines"</h2>
                <button class="filter-btn">FILTER ⚙️</button>
            </div>

            <div class="product-grid">
                <div class="product-card">
                    <Image src="/images/imageNotFound.webp" class="product-image" alt="RenuSpa" width={400} height={400} />
                    <div class="product-title">MYND360™</div>
                </div>

                <div class="product-card">
                    <Image src="/images/imageNotFound.webp" class="product-image" alt="LumiSpa Rose" width={400} height={400} />
                    <div class="product-title">Promotions</div>
                </div>

                <div class="product-card">
                    <Image src="/images/imageNotFound.webp" class="product-image" alt="LumiSpa Blue" width={400} height={400} />
                    <div class="product-title">Kits & Bundles</div>
                </div>

                <div class="product-card">
                    <Image src="/products/ageLoc.png" class="product-image" alt="LumiSpa Rose Bundle" width={400} height={400} />
                    <div class="product-title">ageLOC</div>
                </div>

                <div class="product-card">
                    <Image src="/images/imageNotFound.webp" class="product-image" alt="LumiSpa Blue" width={400} height={400} />
                    <div class="product-title">Nu Skin</div>
                </div>

                <div class="product-card">
                    <Image src="/products/pharmanex.png" class="product-image" alt="LumiSpa Rose Bundle" width={400} height={400} />
                    <div class="product-title">Pharmanex</div>
                </div>
            </div>
        </div>
    )
}
