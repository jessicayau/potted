import React from 'react'
import { useHistory } from 'react-router';
import { Content, HeroButton, HeroContainer, Image, ImageContainer, Text, Title } from './Hero.styles';

const Hero = () => {
    const history = useHistory();
    return (
        <HeroContainer>
            <ImageContainer>
                <Image src="/images/slider3.jpg" />
            </ImageContainer>
            <Content>
                <Title>Brighten Up Your Interior</Title>
                <Text>Lavender lemonade parsley mint lime taco salsa Thai sparkling pomegranate</Text>
                <HeroButton onClick={() => history.push('/shop')}>Shop Plants</HeroButton>
            </Content>
        </HeroContainer>
    )
}

export default Hero;
