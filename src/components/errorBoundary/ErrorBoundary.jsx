import React, { Component } from "react";
import { ErrorBoundaryContainer } from "./ErrorBoundary.styles";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <ErrorBoundaryContainer>
                    <h1>Uh Oh...</h1>
                    <p>Something went wrong</p>
                    <p>
                        Try refreshing the page or coming back in a few minutes
                    </p>
                </ErrorBoundaryContainer>
            );
        }
        return this.props.children;
    }
}
