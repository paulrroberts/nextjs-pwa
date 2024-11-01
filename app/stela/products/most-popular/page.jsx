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
                <h2>35 results for "Most Popular"</h2>
                <button class="filter-btn">FILTER ⚙️</button>
            </div>

            <div class="product-grid">
                <div class="product-card">
                    <Image src="/products/ageloc-scalp-hair-serum.png" class="product-image" alt="RenuSpa" width={400} height={400} />
                    <div class="product-category">AGELOC WELLSPA IO</div>
                    <div class="product-title">ageLOC® Scalp & Hair Serum</div>
                    <div class="product-price">$ 64.00</div>
                </div>

                <div class="product-card">
                    <Image
                        src="/products/ageloc-dermatic-effects-body-contouring-lotion.png"
                        class="product-image"
                        alt="LumiSpa Rose"
                        width={400}
                        height={400}
                    />
                    <div class="product-category">AGELOC LUMISPA</div>
                    <div class="product-title">ageLOC® Dermatic Effects® Body Contouring Lotion</div>
                    <div class="product-price">$ 56.00</div>
                </div>

                <div class="product-card">
                    <Image src="/products/toothbrush.png" class="product-image" alt="LumiSpa Blue" width={400} height={400} />
                    <div class="product-title">AP 24® Smile Pop® Toothbrush Single</div>
                    <div class="product-price">$ 2.00</div>
                </div>

                <div class="product-card">
                    <Image src="/products/toothpaste.jpg" class="product-image" alt="LumiSpa Rose Bundle" width={400} height={400} />
                    <div class="product-title">AP 24® Whitening Fluoride Toothpaste</div>
                    <div class="product-price">$ 23.00</div>
                </div>
            </div>
        </div>
    )
}
