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
                <p>4 results for "Nutrition"</p>
            </div>

            <div className="product-grid">
                <div className="product-card">
                    <Image src="/products/pharmanex-e2.webp" className="product-image" alt="RenuSpa" width={400} height={400} />
                    <div className="product-title">Pharmanex® E2®</div>
                    <div className="product-price">$ 53.00</div>
                </div>

                <div className="product-card">
                    <Image src="/products/estera-cranberry.png" className="product-image" alt="LumiSpa Rose" width={400} height={400} />
                    <div className="product-title">Estera® Cranberry</div>
                    <div className="product-price">$ 34.00</div>
                </div>

                <div className="product-card">
                    <Image src="/products/probiotic.webp" className="product-image" alt="LumiSpa Blue" width={400} height={400} />
                    <div className="product-title">ProBio PCC®</div>
                    <div className="product-price">$ 51.00</div>
                </div>

                <div className="product-card">
                    <Image src="/products/jungamals.webp" className="product-image" alt="LumiSpa Rose Bundle" width={400} height={400} />
                    <div className="product-title">Pharmanex® Kids Jungamals®</div>
                    <div className="product-price">$ 209.00</div>
                </div>
            </div>
        </div>
    )
}
