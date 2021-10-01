import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainContainer } from './Main.styles';
import Home from '../../pages/home/Home'
import Shop from '../../pages/shop/Shop';
import About from '../../pages/about/About';
import Contact from '../../pages/contact/Contact';
import LoginAndSignUp from '../../pages/loginAndSignUp/LoginAndSignUp';
import ProductDetails from '../../pages/productDetails/ProductDetails';
import Checkout from '../../pages/checkout/Checkout';

const Main = () => {
    return (
        <MainContainer>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/shop" component={Shop} />
                <Route path="/shop/:itemName" component={ProductDetails} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/login" component={LoginAndSignUp} />
                <Route exact path="/checkout" component={Checkout} />
            </Switch>
        </MainContainer>
    )
}

export default Main
