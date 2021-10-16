import React from "react";
import { useHistory } from "react-router";
import {
    Card,
    CardContainer,
    CardContent,
    CardImage,
    CardItemName,
    HeartIcon,
    ViewButton,
} from "./ProductCard.styles";

const ProductCard = ({ item }) => {
    const history = useHistory();

    return (
        <Card>
            <CardContainer>
                <CardContent>
                    <CardItemName>{item.name}</CardItemName>
                    <span>${item.price.toFixed(2)}</span>
                </CardContent>
                <CardImage src={item.imageUrl} alt={item.name} />
                <HeartIcon item={item} />
                <ViewButton
                    onClick={() => history.push(`/shop/${item.linkUrl}`)}
                >
                    View
                </ViewButton>
            </CardContainer>
        </Card>
    );
};

export default ProductCard;
