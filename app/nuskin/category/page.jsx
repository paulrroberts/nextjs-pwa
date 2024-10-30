import Image from 'next/image'
import Link from 'next/link'
import './category.css'

export default function ProductCategory() {
    const products = [
        {
            title: 'MYND360™ Body Care Bundle',
            image: '/images/mynd-body-care-bundle.png',
            price: '$57.00'
        },
        {
            title: 'MYND360™ Supplement Bundle',
            image: '/images/mynd-supplement-bundle.png',
            price: '$263.00'
        },
        {
            title: 'MYND360™ Relaxing Body Cream',
            image: '/images/mynd-relaxing-body-cream.png',
            price: '$35.00'
        },
        {
            title: 'MYND360™ Energizing Hand and Body Wash',
            image: '/images/mynd-energizing-hand-body-wash.png',
            price: '$22.00'
        },
        {
            title: 'MYND360™ Mind Full',
            image: '',
            price: '$85.00'
        },
        {
            title: 'MYND360™ Feel Calm',
            image: '',
            price: '$68.00'
        },
        {
            title: 'MYND360™ Sharp Focus',
            image: '',
            price: '$50.00'
        },
        {
            title: 'MYND360™ Night Time',
            image: '',
            price: '$60.00'
        }
    ]

    return (
        <div className="container">
            <p className="category-title">
                MYND360™ <span>8(products)</span>
            </p>
            <section>
                {products.map((product) => (
                    <div className="product-card" key={product.title}>
                        <div className="image-wrapper">
                            {product.image.length > 0 ? (
                                <Link href="">{<Image src={product.image} width={246} height={200} alt={product.title} />}</Link>
                            ) : (
                                <Image src="/images/imageNotFound.webp" width={246} height={200} alt={product.title} />
                            )}
                        </div>
                        <div className="product-info">
                            <p className="title">{product.title}</p>
                            <p className="price">{product.price}</p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}
