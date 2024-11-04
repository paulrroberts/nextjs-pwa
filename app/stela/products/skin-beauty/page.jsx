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
                <h2>35 results for "Skin & Beauty"</h2>
                <button className="filter-btn">FILTER ⚙️</button>
            </div>

            <div className="product-grid">
                <div className="product-card">
                    <Image src="/products/ageloc-rose-gold-lumispa-io.png" className="product-image" alt="RenuSpa" width={400} height={400} />
                    <div className="product-title">ageLOC Rose Gold LumiSpa® iO</div>
                    <div className="product-price">$ 245.00</div>
                </div>

                <div className="product-card">
                    <span className="bundle-tag">Bundle</span>
                    <Image src="/products/tru-face-peptide-retinol.png" className="product-image" alt="LumiSpa Rose" width={400} height={400} />
                    <div className="product-title">ageLOC® Tru Face® Peptide Retinol Complex + Uplifting Cream Bundle</div>
                    <div className="product-price">$ 200.00</div>
                </div>

                <div className="product-card">
                    <Image src="/products/dermatic-effects.png" className="product-image" alt="LumiSpa Blue" width={400} height={400} />
                    <div className="product-title">ageLOC® Dermatic Effects® Body Contouring Lotion</div>
                    <div className="product-price">$ 56.00</div>
                </div>

                <div className="product-card">
                    <span className="bundle-tag">Bundle</span>
                    <Image src="/products/clear-line-bundle.png" className="product-image" alt="LumiSpa Rose Bundle" width={400} height={400} />
                    <div className="product-title">Clear Line Bundle</div>
                    <div className="product-price">$ 127.00</div>
                </div>
            </div>
        </div>
    )
}
