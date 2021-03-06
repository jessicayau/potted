import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import FavoriteIcon from "../../components/favoriteIcon/FavoriteIcon";
import { BiArrowBack } from "react-icons/bi";
import {
    IoSunny,
    IoSunnyOutline,
    IoWater,
    IoWaterOutline,
} from "react-icons/io5";
import { IoMdPaw } from "react-icons/io";
import {
    AddToCartBtn,
    BackButton,
    DetailsContainer,
    FavoriteIconContainer,
    Image,
    ImageContainer,
    PetFriendlyContainer,
    ProductDescription,
    ProductDetailsContainer,
    ProductPrice,
    ProductTitle,
    SideIconsContainer,
    Specs,
} from "./ProductDetails.styles";
import { addToCart } from "../../redux/cart/cartSlice";

const ProductDetails = ({ currentProduct }) => {
    const { name, imageUrl, price, water, light, petFriendly } = currentProduct;
    const history = useHistory();
    const dispatch = useDispatch();

    const addItemHandler = () => {
        dispatch(addToCart(currentProduct));
    };

    const icons = (num) => {
        let iconSet = [];
        for (let i = 0; i < 3; i++) {
            if (i < num) {
                iconSet.push(true);
            } else {
                iconSet.push(false);
            }
        }
        return iconSet;
    };

    return (
        <ProductDetailsContainer>
            <ImageContainer>
                <Image src={imageUrl} alt="plant" />
                <SideIconsContainer>
                    <BackButton>
                        <BiArrowBack
                            size="1.5rem"
                            onClick={() => history.goBack()}
                        />
                    </BackButton>
                    <FavoriteIcon item={currentProduct} />
                </SideIconsContainer>
            </ImageContainer>
            <DetailsContainer>
                <ProductTitle>{name}</ProductTitle>
                <ProductPrice>${price.toFixed(2)}</ProductPrice>
                <FavoriteIconContainer>
                    <FavoriteIcon item={currentProduct} />
                    <span>Add to Favorites</span>
                </FavoriteIconContainer>
                <ProductDescription>
                    Raspberries green tea bruschetta cherry almond milk chai
                    latte crispy potato summertime with banh mi salad rolls
                    Bolivian rainbow pepper Indian spiced. Pinch of yum vitamin
                    glow strawberry mango smoothie simmer Mexican fiesta
                    seasonal apricot almond milk Thai dessert lime enchiladas
                    arugula salad pomegranate creamy cauliflower alfredo.
                </ProductDescription>
                {petFriendly && (
                    <PetFriendlyContainer>
                        <IoMdPaw />
                        <span>Pet Friendly</span>
                    </PetFriendlyContainer>
                )}
                <Specs>
                    <div className="specs">
                        Water
                        {icons(water).map((icon, index) =>
                            icon ? (
                                <span key={index}>
                                    <IoWater />
                                </span>
                            ) : (
                                <span key={index}>
                                    <IoWaterOutline />
                                </span>
                            )
                        )}
                    </div>
                    <div className="specs">
                        Light
                        {icons(light).map((icon, index) =>
                            icon ? (
                                <span key={index}>
                                    <IoSunny />
                                </span>
                            ) : (
                                <span key={index}>
                                    <IoSunnyOutline />
                                </span>
                            )
                        )}
                    </div>
                </Specs>
                <AddToCartBtn onClick={addItemHandler}>
                    Add to cart
                </AddToCartBtn>
            </DetailsContainer>
        </ProductDetailsContainer>
    );
};

export default ProductDetails;
