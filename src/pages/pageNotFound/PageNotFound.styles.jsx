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
`;

export const Button = styled(Btn)`
    margin-top: 2rem;
    min-width: 200px;
    width: 40%;
`;
