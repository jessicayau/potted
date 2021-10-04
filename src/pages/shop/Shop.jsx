import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/productCard/ProductCard';
import FormInput from '../../components/formInput/FormInput';
import { Banner, BannerContainer, Filters, ProductsContainer, ShopContainer } from './Shop.styles';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
import { selectIsFetching, selectProducts } from '../../redux/shop/shopSlice';
import Spinner from '../../components/spinner/Spinner';


const Shop = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const isFetching = useSelector(selectIsFetching);
    const products = useSelector(selectProducts);

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
            {!isFetching ? (
                <ProductsContainer>
                    {products.map(item => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                </ProductsContainer>
            ) : (
                    <Spinner />
            )
        }
        </ShopContainer>
    )
}

export default Shop;
