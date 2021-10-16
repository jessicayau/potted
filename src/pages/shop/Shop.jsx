import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/productCard/ProductCard";
import {
    Banner,
    BannerContainer,
    SearchFilter,
    SearchInput,
    ProductsContainer,
    ShopContainer,
} from "./Shop.styles";
import { selectIsFetching, selectProducts } from "../../redux/shop/shopSlice";
import Spinner from "../../components/spinner/Spinner";
import { IoSearch } from "react-icons/io5";

const Shop = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const isFetching = useSelector(selectIsFetching);
    const products = useSelector(selectProducts);

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <ShopContainer>
            <BannerContainer>
                <Banner src="images/succulents.png" alt="banner" />
            </BannerContainer>
            <SearchFilter>
                <IoSearch />
                <SearchInput
                    type="search"
                    name="search"
                    value={searchTerm}
                    placeholder="Search Plants By Name..."
                    onChange={handleChange}
                />
            </SearchFilter>
            {!isFetching ? (
                <ProductsContainer>
                    {filteredProducts.map((item) => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                </ProductsContainer>
            ) : (
                <Spinner />
            )}
        </ShopContainer>
    );
};

export default Shop;
