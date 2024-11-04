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
                <h2>35 results for "Most Popular"</h2>
            </div>

            <div className="product-grid">
                <div className="product-card">
                    <Image src="/products/ageloc-scalp-hair-serum.png" className="product-image" alt="RenuSpa" width={400} height={400} />
                    <div className="product-category">AGELOC WELLSPA IO</div>
                    <div className="product-title">ageLOC® Scalp & Hair Serum</div>
                    <div className="product-price">$ 64.00</div>
                </div>

                <div className="product-card">
                    <Image
                        src="/products/ageloc-dermatic-effects-body-contouring-lotion.png"
                        className="product-image"
                        alt="LumiSpa Rose"
                        width={400}
                        height={400}
                    />
                    <div className="product-category">AGELOC LUMISPA</div>
                    <div className="product-title">ageLOC® Dermatic Effects® Body Contouring Lotion</div>
                    <div className="product-price">$ 56.00</div>
                </div>

                <div className="product-card">
                    <Image src="/products/toothbrush.png" className="product-image" alt="LumiSpa Blue" width={400} height={400} />
                    <div className="product-title">AP 24® Smile Pop® Toothbrush Single</div>
                    <div className="product-price">$ 2.00</div>
                </div>

                <div className="product-card">
                    <Image src="/products/toothpaste.jpg" className="product-image" alt="LumiSpa Rose Bundle" width={400} height={400} />
                    <div className="product-title">AP 24® Whitening Fluoride Toothpaste</div>
                    <div className="product-price">$ 23.00</div>
                </div>
            </div>
        </div>
    )
}
