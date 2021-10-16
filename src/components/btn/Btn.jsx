import React from "react";
import { StyledButton } from "./Btn.styles";

const Btn = ({ children, ...props }) => {
    return <StyledButton {...props}>{children}</StyledButton>;
};

export default Btn;
