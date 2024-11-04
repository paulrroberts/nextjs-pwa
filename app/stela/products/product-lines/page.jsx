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
                <h2>35 results for "Product Lines"</h2>
                <button className="filter-btn">FILTER ⚙️</button>
            </div>

            <div className="product-grid">
                <div className="product-card">
                    <Image src="/images/imageNotFound.webp" className="product-image" alt="RenuSpa" width={400} height={400} />
                    <div className="product-title">MYND360™</div>
                </div>

                <div className="product-card">
                    <Image src="/images/imageNotFound.webp" className="product-image" alt="LumiSpa Rose" width={400} height={400} />
                    <div className="product-title">Promotions</div>
                </div>

                <div className="product-card">
                    <Image src="/images/imageNotFound.webp" className="product-image" alt="LumiSpa Blue" width={400} height={400} />
                    <div className="product-title">Kits & Bundles</div>
                </div>

                <div className="product-card">
                    <Image src="/products/ageloc.png" className="product-image" alt="LumiSpa Rose Bundle" width={400} height={400} />
                    <div className="product-title">ageLOC</div>
                </div>

                <div className="product-card">
                    <Image src="/images/imageNotFound.webp" className="product-image" alt="LumiSpa Blue" width={400} height={400} />
                    <div className="product-title">Nu Skin</div>
                </div>

                <div className="product-card">
                    <Image src="/products/pharmanex.png" className="product-image" alt="LumiSpa Rose Bundle" width={400} height={400} />
                    <div className="product-title">Pharmanex</div>
                </div>
            </div>
        </div>
    )
}
