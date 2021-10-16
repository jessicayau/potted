import React from "react";
import PhotoGrid from "../../components/photoGrid/PhotoGrid";
import {
    AboutPageContainer,
    AboutTitle,
    ContentContainer,
} from "./About.styles";

const About = () => {
    return (
        <AboutPageContainer>
            <AboutTitle>Our Story</AboutTitle>
            <ContentContainer>
                <p>
                    Creamy cauliflower alfredo fig arugula cashew salad red
                    pepper tempeh balsamic vinaigrette fiery fruit mediterranean
                    cool seasonal main course Southern Italian chocolate peanut
                    butter dip smoky maple tempeh glaze bananas banana bread
                    cilantro picnic salad guacamole black beans shiitake
                    mushrooms tabasco pepper portobello mushrooms dark and
                    stormy appetizer.
                </p>
                <p>
                    Avocado enchiladas miso turmeric glazed aubergine coconut
                    sugar entree udon noodles lemon lime minty edamame hummus
                    kale lemongrass Bolivian rainbow pepper mangos almond milk
                    chai latte apple vinaigrette a delicious meal hummus açai
                    bite sized lentils lime mango crisp arugula salad salad
                    banana bread. Cinnamon sweet potato red curry tofu noodles
                    pumpkin orange pasta coconut rice sleepy morning tea
                    pomegranate lemon homemade balsamic sandwiches four-layer
                    coconut milk cilantro lime vinaigrette candy cane winter.
                </p>
            </ContentContainer>
            <PhotoGrid />
        </AboutPageContainer>
    );
};

export default About;
