import React from 'react';
import { useHistory, useParams } from 'react-router';
import SHOP_DATA from '../../assets/data/shopData';
import Heart from "../../components/heart/Heart";
import { BiArrowBack } from 'react-icons/bi';
import { IoSunny, IoSunnyOutline, IoWater, IoWaterOutline } from 'react-icons/io5';
import { IoMdPaw } from 'react-icons/io'
import { AddToCartBtn, BackButtonContainer, DetailsContainer, HeartContainer, Image, ImageContainer, PetFriendlyContainer, ProductDescription, ProductDetailsContainer, ProductPrice, ProductTitle, SideIconsContainer, Specs } from './ProductDetails.styles';


const ProductDetails = () => {
    const { itemName } = useParams();
    const history = useHistory();

    const icons = (num) => {
        let iconSet = []
        for (let i = 0; i < 3; i++) {
            if (i < num) {
                iconSet.push(true)
            } else {
                iconSet.push(false)
            }
        }
        return iconSet;
    }
    

    const currentProduct = SHOP_DATA.filter(product => product.linkUrl === itemName)[0]
    console.log(currentProduct)

    const { id, name, imageUrl, price, water, light, bestseller, petFriendly } = currentProduct;
    
    return (
        <ProductDetailsContainer>
            <ImageContainer>
                <Image src={imageUrl} alt="plant" />
                <SideIconsContainer>
                    <BackButtonContainer>
                        <BiArrowBack size='1.5rem' onClick={() => history.goBack()} />
                    </BackButtonContainer>
                    <Heart />
                </SideIconsContainer>
            </ImageContainer>
            <DetailsContainer>
                <ProductTitle>{name}</ProductTitle>
                <ProductPrice>${price.toFixed(2)}</ProductPrice>
                <HeartContainer>
                    <Heart /><span>Add to Favorites</span>
                </HeartContainer>
                <ProductDescription>Raspberries green tea bruschetta cherry almond milk chai latte crispy potato summertime with banh mi salad rolls Bolivian rainbow pepper Indian spiced. Pinch of yum vitamin glow strawberry mango smoothie simmer Mexican fiesta seasonal apricot almond milk Thai dessert lime enchiladas arugula salad pomegranate creamy cauliflower alfredo.</ProductDescription>
                {petFriendly && (
                <PetFriendlyContainer>
                    <IoMdPaw />
                    <span>Pet Friendly</span>
                </PetFriendlyContainer>
                )}
                <Specs>
                <div className="specs">Water
                {icons(water).map((icon, index) => (
                    icon ? (
                        <span key={index}><IoWater /></span>
                    ) : (
                        <span key={index}><IoWaterOutline /></span>
                    )
                ))}
                </div>
                <div className="specs">Light
                {icons(light).map((icon, index) => (
                    icon ? (
                        <span key={index}><IoSunny /></span> 
                    ) : (
                        <span key={index}><IoSunnyOutline /></span>
                    )
                ))}
                </div>
                </Specs>
                <AddToCartBtn>Add to cart</AddToCartBtn>
            </DetailsContainer>
        </ProductDetailsContainer>
    )
}

export default ProductDetails;