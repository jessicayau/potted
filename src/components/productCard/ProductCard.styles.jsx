import styled from "styled-components";
import Btn from "../btn/Btn";
import FavoriteIcon from "../favoriteIcon/FavoriteIcon";

export const Card = styled.div`
    width: 100%;
    height: 19rem;
    position: relative;
    cursor: pointer;

    &:hover {
        button {
            display: block;
        }

        img {
            opacity: 0.8;
        }
    }
`;

export const CardContainer = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 0.5rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;
export const CardContent = styled.div`
    padding: 0.5rem 0.5rem 1rem;
    height: 80%;
    background-color: var(--card-bgcolor);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    border-radius: 0.5rem;
`;

export const CardImage = styled.img`
    height: 230px;
    width: 150px;
    position: absolute;
    left: 50%;
    bottom: 27%;
    transform: translateX(-50%);
`;

export const CardItemName = styled.span`
    font-weight: 700;
`;

export const ViewButton = styled(Btn)`
    display: none;
    position: absolute;
    width: 70%;
    top: 60%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0.9;
    transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.95);
`;

export const HeartIcon = styled(FavoriteIcon)`
    position: absolute;
    top: 25%;
    right: 5%;
`;
