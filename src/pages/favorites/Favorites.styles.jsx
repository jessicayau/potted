import styled from "styled-components";

export const FavoritesContainer = styled.div`
    min-height: 45vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3.5rem 0 2rem;
`

export const FavoriteProductsContainer = styled.div`
    width: 100%;
    padding: 2rem 5%;
    display: grid;
    column-gap: 1rem;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, 200px);
    row-gap: 2rem;

    @media screen and (max-width: 425px) {
        grid-template-columns: 1fr 1fr;
    }
`

export const EmptyMessage = styled.p`
    margin-top: 2rem;
`