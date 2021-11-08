import React from "react";
import { useHistory } from "react-router";
import { BsArrowLeft } from "react-icons/bs";
import { Button, PageContainer } from "./PageNotFound.styles";

const PageNotFound = () => {
    const history = useHistory();

    return (
        <PageContainer>
            <h1>OOPS!</h1>
            <h2>404 - Page Not Found</h2>
            <p>The page you're looking for isn't here</p>
            <Button onClick={() => history.push("/")}>
                <BsArrowLeft />
                Home
            </Button>
        </PageContainer>
    );
};
export default PageNotFound;
