import React, { useState } from 'react';
import Btn from '../../components/btn/Btn';
import FormInput from '../../components/formInput/FormInput';
import { ContactContainer, ContentWrapper, ContentTitle, ContentText, FormContainer, TextArea, TextAreaLabel } from './Contact.styles';

const Contact = () => {
    const [formInfo, setFormInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    })

    const { firstName, lastName, email, message } = formInfo;

    const handleChange = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setFormInfo({ ...formInfo, [name]: value });
    }

    return (
        <ContactContainer>
            <ContentWrapper>
                <ContentTitle>Get in touch</ContentTitle>
                <ContentText>We'd love to hear from you! Our team will help you in any way that we can. Write to us with any comments, questions, or order inquiries. We'll respond as soon as we can, but please give us at least a few days.</ContentText>            
            </ContentWrapper>
            <FormContainer>
                <form className='sign-up-form'>
                    <FormInput
                        type='text'
                        name='firstName'
                        value={firstName}
                        onChange={handleChange}
                        label='First Name'
                        required
                    />
                    <FormInput
                        type='text'
                        name='lastName'
                        value={lastName}
                        onChange={handleChange}
                        label='Last Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        label='Email'
                        required
                    />
                    <TextAreaLabel htmlFor="message">Write to us</TextAreaLabel>
                    <TextArea
                        // type='textarea'
                        name='message'
                        value={message}
                        onChange={handleChange}
                        placeholder="Type here..."
                        required
                    />
                    <Btn type='submit'>submit</Btn>
                </form>
            </FormContainer>
        </ContactContainer>
    )
}

export default Contact;
