import React, { useState } from 'react';
import SHOP_DATA from '../../assets/data/shopData';
import ProductCard from '../../components/productCard/ProductCard';
import FormInput from '../../components/formInput/FormInput';
import { Banner, BannerContainer, Filters, ProductsContainer, ShopContainer } from './Shop.styles';

const Shop = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }
    
    return (
        <ShopContainer>
            <BannerContainer>
                <Banner src="images/succulents.png" />
            </BannerContainer>
            <Filters>
                <FormInput
                    type="search"
                    name="search"
                    value={searchTerm}
                    label='Search...'
                    onChange={handleChange}
                    required
                />
            </Filters>
            <ProductsContainer>
                {SHOP_DATA.map(item => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </ProductsContainer>
        </ShopContainer>
    )
}

export default Shop;
