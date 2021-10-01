import React from 'react';
import { CustomButtonContainer } from './MyBtn.styles';

const MyBtn = ({ children, ...props }) => {
    const handleClick = () =>
        console.log(props)
    
    return (
        <CustomButtonContainer onClick={handleClick} {...props}>{children}</CustomButtonContainer>
    )
}

export default MyBtn;