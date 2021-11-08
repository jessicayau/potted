import styled from "styled-components";
import Btn from "../../components/btn/Btn";

export const PageContainer = styled.div`
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 5%;
    text-align: center;

    p {
        font-size: 1.1rem;
    }
`;

export const Button = styled(Btn)`
    margin-top: 2rem;
    width: 200px;
    gap: 0.3rem;
`;
