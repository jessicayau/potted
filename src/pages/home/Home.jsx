import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Hero from '../../components/hero/Hero';
import ProductCard from '../../components/productCard/ProductCard';
import { selectBestsellers } from '../../redux/shop/shopSlice';
import { AboutContent, AboutSection, Cards, FindPlantButton, FindPlantContent, FindPlantContainer, FindPlantText, ImageContainer, PlantImage, Section, SectionTitle } from './Home.styles';

const Home = () => {
    const bestsellers = useSelector(selectBestsellers)


    return (
        <div className="home-container">
            <Hero />
            <Section>
                <AboutSection>
                    <AboutContent>
                        <Link to='/about'><h2>Our Potted Plants</h2></Link>
                        <p>Sweet potato apples peanut butter comforting pumpkin spice latte coconut sugar red grapes salad walnut pesto tart green tea lime farro platter lavender lemonade eating together miso turmeric glazed aubergine roasted peanuts heat kale pineapple salsa lemonade</p>
                    </AboutContent>
                    <ImageContainer>
                        <img src="/images/plants1.png" alt="plants" />
                    </ImageContainer>
                </AboutSection>
            </Section>
            <Section bgColor="white">
                <SectionTitle>Best Sellers</SectionTitle>
                <Cards>
                    {bestsellers.map(product => (
                        <ProductCard key={product.id} item={product} />
                    ))}
                </Cards>    
            </Section>
            <Section>
                <SectionTitle>Find The Perfect Plant</SectionTitle>
                <FindPlantContainer>
                    <FindPlantContent>
                        <FindPlantText>Green onions dill pumpkin coconut macadamia nut cookies garlic sriracha noodles cashew sesame soba noodles lychee falafel bites lemon red lentil soup roasted peanuts cranberry spritzer</FindPlantText>
                        <FindPlantButton>Plant Quiz</FindPlantButton>
                    </FindPlantContent>
                    <PlantImage src="/images/succulents.png" alt="succulent" />
                </FindPlantContainer>
            </Section>
        </div>
    )
}

export default Home;
