import React from "react";
import { Grid, GridPhoto, PhotoContainer } from "./PhotoGrid.styles";

const gridImages = [
    "/images/succulent2.png",
    "/images/succulent1.png",
    "/images/succulent3.png",
    "/images/succulent4.png",
];

const PhotoGrid = () => {
    return (
        <Grid>
            {gridImages.map((image, index) => (
                <PhotoContainer key={index}>
                    <GridPhoto src={image} alt="plant" />
                </PhotoContainer>
            ))}
        </Grid>
    );
};

export default PhotoGrid;
