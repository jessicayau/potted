import React from 'react';
import { useHistory } from 'react-router';
import { Card, CardContainer, CardContent, CardImage, HeartIcon, ViewButton } from './ProductCard.styles';

const ProductCard = ({ item }) => {
    const history = useHistory();

    return (
        <Card>
            <CardContainer>
                <CardContent>
                    <h4>{item.name}</h4>
                    <p>${item.price.toFixed(2)}</p>
                </CardContent>
                <CardImage src={item.imageUrl} />
                <HeartIcon item={item} />
                <ViewButton onClick={() => history.push(`/shop/${item.linkUrl}`)}>View</ViewButton>
            </CardContainer>
        </Card>
    )
}

export default ProductCard;
