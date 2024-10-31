import Image from 'next/image'
import { FormControl, InputLabel, Input, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import './products.css'

export default function Page() {
    return (
        <div className="category-wrapper">
            <div className="search-bar">
                <FormControl variant="standard" sx={{ width: '100%', marginBottom: '10px' }}>
                    <TextField
                        // label="With normal TextField"
                        placeholder="Search for products"
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: '25ch' }}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                )
                            }
                        }}
                        style={{ width: '100%', margin: 0 }}
                    />
                </FormControl>
            </div>

            <div className="product-category">
                <Image src="/images/beauty-devices.png" alt="Beauty Devices" width={424} height={140} />
                <div className="product-category-text">Beauty Devices</div>
                <div className="product-category-subtext">Products</div>
                <ArrowForwardIosIcon className="continue-arrow" />
            </div>

            <div className="product-category">
                <Image src="/images/skinandbeauty.png" alt="Skin & Beauty" width={424} height={140} />
                <div className="product-category-text">Skin & Beauty</div>
                <div className="product-category-subtext">Products</div>
                <ArrowForwardIosIcon className="continue-arrow" />
            </div>

            <div className="product-category">
                <Image src="/images/nutrition.png" alt="Nutrition" width={424} height={140} />
                <div className="product-category-text">Nutrition</div>
                <div className="product-category-subtext">Products</div>
                <ArrowForwardIosIcon className="continue-arrow" />
            </div>

            <div className="product-category">
                <Image src="/images/product-lines.png" alt="Product Lines" width={424} height={140} />
                <div className="product-category-text">Product Lines</div>
                <div className="product-category-subtext">Products</div>
                <ArrowForwardIosIcon className="continue-arrow" />
            </div>

            <div className="product-category">
                <Image src="/images/most-popular.png" alt="Product Lines" width={424} height={140} />
                <div className="product-category-text">Most Popular</div>
                <div className="product-category-subtext">Products</div>
                <ArrowForwardIosIcon className="continue-arrow" />
            </div>
        </div>
    )
}
