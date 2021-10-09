import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MainContainer } from './Main.styles';
import Home from '../../pages/home/Home'
import Shop from '../../pages/shop/Shop';
import About from '../../pages/about/About';
import Contact from '../../pages/contact/Contact';
import LoginAndSignUp from '../../pages/loginAndSignUp/LoginAndSignUp';
import Checkout from '../../pages/checkout/Checkout';
import { selectCurrentUser } from '../../redux/user/userSlice';
import ProductDetailsContainer from '../../pages/productDetails/ProductDetailsContainer';
import Favorites from '../../pages/favorites/Favorites';
import Review from '../../pages/review/Review';
import { selectCartItemsTotal } from '../../redux/cart/cartSlice';


const Main = () => {
    const currentUser = useSelector(selectCurrentUser);
    const cartItemsTotal = useSelector(selectCartItemsTotal);

    return (
        <MainContainer>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/shop" component={Shop} />
                <Route path="/shop/:itemName" component={ProductDetailsContainer} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/favorites" component={Favorites} />
                <Route
                    exact
                    path="/login"
                    render={() =>
                        currentUser ? <Redirect to="/" /> : <LoginAndSignUp />
                    }
                />
                <Route exact path="/review" render={() => cartItemsTotal ? <Review /> : <Redirect to="/" />} />
                <Route exact path="/checkout" render={() => cartItemsTotal ? <Checkout /> : <Redirect to="/" />} />
            </Switch>
        </MainContainer>
    )
}

export default Main
