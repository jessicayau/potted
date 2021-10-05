import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube } from 'react-icons/fa';
import FormInput from '../formInput/FormInput';
import { FooterContainer, FooterTitle, Links, Location, FooterBottom, FooterContent, FooterLink, FooterSocials, SocialLink, SubscribeButton, SubscribeContainer, SuccessMessage } from './Footer.styles';


const Footer = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
        console.log(email)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('Thanks for subscribing!');
        setEmail('');
        setTimeout(() => { setMessage(''); }, 2000);
    }

    return (
        <FooterContainer>
            <FooterContent>
                <div>
                    <FooterTitle>Links</FooterTitle>
                    <Links>
                        <FooterLink to='/about'>Our Shop</FooterLink>
                        <FooterLink to='/contact'>Contact Us</FooterLink>
                        <FooterLink to='/'>FAQ</FooterLink>
                    </Links>
                </div>
                <div>
                    <FooterTitle>Location</FooterTitle>
                    <Location>
                        <a href="https://www.google.com/maps">
                            <span>1 Sunflower Drive</span>
                            <br />
                            <span>Boston, Massachusetts 02114</span>
                        </a>
                    </Location>
                </div>         
                <div className="subscribe">
                    <FooterTitle>Subscribe to our newsletter!</FooterTitle>
                    <SubscribeContainer>
                        <form className="subscribe-form" onSubmit={handleSubmit}>
                            <FormInput
                                type="email"
                                name="email"
                                value={email}
                                label='Email'
                                onChange={handleChange}
                                required
                            />
                            <SubscribeButton type="submit">Subscribe</SubscribeButton>
                        </form>
                        <SuccessMessage>{message}</SuccessMessage>
                    </SubscribeContainer>
                </div>
            </FooterContent>
            <FooterSocials>
                    <SocialLink href=""><FaFacebookF /></SocialLink>
                    <SocialLink href=""><FaInstagram /></SocialLink>
                    <SocialLink href=""><FaPinterestP /></SocialLink>
                    <SocialLink href=""><FaYoutube /></SocialLink>
            </FooterSocials>
            <FooterBottom>
                <p>Designed &amp; Created by Jess &#169;2021</p>
            </FooterBottom>
        </FooterContainer>
    )
}

export default Footer;
