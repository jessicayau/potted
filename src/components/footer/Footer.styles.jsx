import styled from "styled-components";
import { Link } from "react-router-dom";
import Btn from "../btn/Btn";

export const FooterContainer = styled.footer`
    min-height: 30vh;
    padding: 4rem 7% 0;
    background-color: var(--primary-bgcolor);
`;

export const FooterContent = styled.div`
    display: grid;
    row-gap: 2rem;
    grid-template-columns: 1fr 1fr;

    .subscribe {
        grid-column: 1/3;
    }

    @media screen and (min-width: 768px) {
        grid-template-columns: 1fr 1.5fr 1.5fr;

        .subscribe {
            grid-column: initial;
        }
    }
`;
export const FooterTitle = styled.h3`
    padding-bottom: 0.5rem;
`;

export const Links = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FooterLink = styled(Link)`
    padding: 0.5rem 0;
    margin-right: auto;

    &:hover {
        font-weight: 700;
    }
`;

export const Location = styled.div`
    padding-top: 0.5rem;
`;

export const SubscribeContainer = styled.div`
    width: 100%;
    height: 100%;

    .subscribe-form {
        width: 100%;
    }
`;

export const SubscribeButton = styled(Btn)`
    width: 50%;
`;

export const SuccessMessage = styled.div`
    padding-top: 1rem;
    font-weight: 500;
`;

export const FooterSocials = styled.div`
    max-width: 350px;
    margin: 1rem auto 2rem;
    display: flex;
    justify-content: space-around;
`;

export const SocialLink = styled.a`
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        transform: scale(1.3);
        transition: transform 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
`;
export const FooterBottom = styled.div`
    text-align: center;
    padding-bottom: 1rem;
`;
