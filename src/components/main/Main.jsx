import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { MainContainer } from "./Main.styles";
import { selectCurrentUser } from "../../redux/user/userSlice";
import { selectCartItemsTotal } from "../../redux/cart/cartSlice";
import PageNotFound from "../../pages/pageNotFound/PageNotFound";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import Spinner from "../spinner/Spinner";

const Home = lazy(() => import("../../pages/home/Home"));
const Shop = lazy(() => import("../../pages/shop/Shop"));
const About = lazy(() => import("../../pages/about/About"));
const Contact = lazy(() => import("../../pages/contact/Contact"));
const LoginAndSignUp = lazy(() =>
    import("../../pages/loginAndSignUp/LoginAndSignUp")
);
const Checkout = lazy(() => import("../../pages/checkout/Checkout"));
const ProductDetailsContainer = lazy(() =>
    import("../../pages/productDetails/ProductDetailsContainer")
);
const Favorites = lazy(() => import("../../pages/favorites/Favorites"));
const Review = lazy(() => import("../../pages/review/Review"));

const Main = () => {
    const currentUser = useSelector(selectCurrentUser);
    const cartItemsTotal = useSelector(selectCartItemsTotal);

    return (
        <MainContainer>
            {/* <Switch> */}
            <ErrorBoundary>
                <Suspense fallback={<Spinner />}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/shop" component={Shop} />
                        <Route
                            path="/shop/:itemName"
                            component={ProductDetailsContainer}
                        />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/favorites" component={Favorites} />
                        <Route
                            exact
                            path="/login"
                            render={() =>
                                currentUser ? (
                                    <Redirect to="/" />
                                ) : (
                                    <LoginAndSignUp />
                                )
                            }
                        />
                        <Route exact path="/review" component={Review} />
                        <Route
                            exact
                            path="/checkout"
                            render={() =>
                                cartItemsTotal ? (
                                    <Checkout />
                                ) : (
                                    <Redirect to="/" />
                                )
                            }
                        />
                        <Route component={PageNotFound} />
                    </Switch>
                </Suspense>
            </ErrorBoundary>
            {/* </Switch> */}
        </MainContainer>
    );
};

export default Main;
