import React from 'react';
import { Grid, GridPhoto, PhotoContainer } from './PhotoGrid.styles';

const PhotoGrid = () => {
    return (
        <Grid>
            <PhotoContainer>
                <GridPhoto src="/images/succulents.png" />
            </PhotoContainer>
            <PhotoContainer bgColor="#a0cfb05c">
                <GridPhoto  src="/images/succulent1.png" />
            </PhotoContainer>
            <PhotoContainer>
                <GridPhoto src="/images/succulent3.png" />
            </PhotoContainer>
            <PhotoContainer bgColor="#a0cfb05c">
                <GridPhoto src="/images/succulent4.png" />
            </PhotoContainer>
        </Grid>
    )
}

export default PhotoGrid;
