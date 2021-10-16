import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import ProductDetails from "./ProductDetails";
import Spinner from "../../components/spinner/Spinner";
import { selectProducts } from "../../redux/shop/shopSlice";
import PageNotFound from "../pageNotFound/PageNotFound";

const ProductDetailsContainer = () => {
    const products = useSelector(selectProducts);
    const { itemName } = useParams();
    const currentProduct = products.find(
        (product) => product.linkUrl === itemName
    );

    if (!currentProduct) {
        return <PageNotFound />;
    }

    return (
        <div>
            {!products.length ? (
                <Spinner />
            ) : (
                <ProductDetails currentProduct={currentProduct} />
            )}
        </div>
    );
};

export default ProductDetailsContainer;
