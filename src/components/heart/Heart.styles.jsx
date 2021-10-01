import styled from "styled-components";
import { FiHeart } from 'react-icons/fi'

export const HeartIcon = styled(FiHeart)`
    fill: ${props => props.color};
    cursor: pointer;
    font-size: 1.5rem;
`