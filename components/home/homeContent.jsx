import Image from 'next/image'
import './home.scss'
import Link from 'next/link'

export default function HomeContent() {
    return (
        <div className="container home">
            <section className="hero">
                <Image src="/images/hero-image.webp" alt="Hero Banner" width={800} height={467} />
                <div className="hero-caption">
                    <p className="heading-1">MYND360™</p>
                    <p className="heading-3">A holistic way to conquer a new day</p>
                    <Link type="button" href="/nuskin/category">
                        Shop Now
                    </Link>
                </div>
            </section>

            <section>
                <h2 className="section-header">Most Popular Products</h2>
                <div className="carousel-container">
                    <div className="carousel-item">
                        <Image src="/images/product1.png" alt="Product 1" width={301} height={250} />
                        <p>TFEU Refill Pouches</p>
                        <p>$161.00</p>
                        <button>Add to Cart</button>
                    </div>
                    <div className="carousel-item">
                        <Image src="/images/product2.png" alt="Product 2" width={301} height={250} />
                        <p>Nu Colour® Peptide Pout</p>
                        <p>$19.00</p>
                        <button>Add to Cart</button>
                    </div>
                    <div className="carousel-item">
                        <Image src="/images/beautyfocus.png" alt="Product 1" width={301} height={250} />
                        <p>Beauty Focus MultiBeauty</p>
                        <p>$57.00</p>
                        <button>Add to Cart</button>
                    </div>
                    <div className="carousel-item">
                        <Image src="/images/renuhairmask.png" alt="Product 2" width={301} height={250} />
                        <p>Renu Hair Mask</p>
                        <p>$31.00</p>
                        <button>Add to Cart</button>
                    </div>
                    <div className="carousel-item">
                        <Image src="/images/nubiome.png" alt="Product 2" width={301} height={250} />
                        <p>Pharmanex® Nu Biome®</p>
                        <p>$80.00</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="section-header">Our Top Categories</h2>
                <div className="carousel-container">
                    <div className="carousel-item">
                        <Image src="/images/category1.jpg" alt="Beauty Devices" width={230} height={260} />
                        <p>Beauty Devices</p>
                    </div>
                    <div className="carousel-item">
                        <Image src="/images/category2.jpg" alt="Multivitamins" width={230} height={260} />
                        <p>Multivitamins</p>
                    </div>
                    <div className="carousel-item">
                        <Image src="/images/anti-aging.jpg" alt="Anti-aging" width={230} height={260} />
                        <p>Anti-aging</p>
                    </div>
                    <div className="carousel-item">
                        <Image src="/images/targeted-wellness.jpg" alt="Targeted Wellness" width={230} height={260} />
                        <p>Targeted Wellness</p>
                    </div>
                    <div className="carousel-item">
                        <Image src="/images/facial-cleansers.jpg" alt="Facial Cleansers" width={230} height={260} />
                        <p>Facial Cleansers</p>
                    </div>
                    <div className="carousel-item">
                        <Image src="/images/oral-care.jpg" alt="Oral Care" width={230} height={260} />
                        <p>Oral Care</p>
                    </div>
                    <div className="carousel-item">
                        <Image src="/images/body-care.jpg" alt="Body Care" width={230} height={260} />
                        <p>Body Care</p>
                    </div>
                    <div className="carousel-item">
                        <Image src="/images/makeup.jpg" alt="Makeup" width={230} height={260} />
                        <p>Makeup</p>
                    </div>
                </div>
            </section>

            <section className="promo-banner">
                <div>
                    <h3>Get ready to reclaim whole-body wellness</h3>
                    <p>One personalized wellness and beauty device to restore, revitalize, and refresh.</p>
                    <button>Discover Now</button>
                </div>
                <Image src="/images/promo-image.webp" alt="Promo Image" style={{ maxWidth: '100%', borderRadius: '8px' }} width={642} height={481} />
            </section>

            <section>
                <h2 className="section-header">Explore Some of Our Brands</h2>
                <div className="brand-collection">
                    <div className="brand-item">
                        <Image src="/images/ageloc.png" alt="ageLOC" width={230} height={260} />
                        <p>ageLOC</p>
                    </div>
                    <div className="brand-item">
                        <Image src="/images/renuspaio.png" alt="RenuSpa iO" width={230} height={260} />
                        <p>RenuSpa iO</p>
                    </div>
                    <div className="brand-item">
                        <Image src="/images/lumispa.png" alt="ageLOC LumiSpa" width={230} height={260} />
                        <p>ageLOC LumiSpa</p>
                    </div>
                    <div className="brand-item">
                        <Image src="/images/pharmanex.png" alt="Pharmanex" width={230} height={260} />
                        <p>Pharmanex</p>
                    </div>
                    <div className="brand-item">
                        <Image src="/images/ap24.png" alt="AP 24" width={230} height={260} />
                        <p>AP 24</p>
                    </div>
                    <div className="brand-item">
                        <Image src="/images/nutricentials.png" alt="Nutricentials" width={230} height={260} />
                        <p>Nutricentials</p>
                    </div>
                    <div className="brand-item">
                        <Image src="/images/epoch.png" alt="Epoch" width={230} height={260} />
                        <p>Epoch</p>
                    </div>
                    <div className="brand-item">
                        <Image src="/images/sunright.png" alt="Sunright" width={230} height={260} />
                        <p>Sunright</p>
                    </div>
                    <div className="brand-item">
                        <Image src="/images/nucolor.png" alt="Nu Color" width={230} height={260} />
                        <p>Nu Color</p>
                    </div>
                    <div className="brand-item">
                        <Image src="/images/180system.png" alt="180 System" width={230} height={260} />
                        <p>180 System</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
