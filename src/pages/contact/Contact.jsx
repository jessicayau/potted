import React, { useState } from "react";
import Btn from "../../components/btn/Btn";
import FormInput from "../../components/formInput/FormInput";
import {
    ContactContainer,
    ContentWrapper,
    ContentTitle,
    ContentText,
    FormContainer,
    TextArea,
    TextAreaLabel,
    SuccessMessageContainer,
} from "./Contact.styles";

const Contact = () => {
    const [formInfo, setFormInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });
    const [successMessage, setSuccessMessage] = useState("");

    const { firstName, lastName, email, message } = formInfo;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInfo({ ...formInfo, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessMessage(
            "Thanks for contacting us! We'll get in touch with you soon!"
        );
        setFormInfo({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
        });
        setTimeout(() => setSuccessMessage(""), 5000);
    };

    return (
        <ContactContainer>
            <ContentWrapper>
                <ContentTitle>Get in touch</ContentTitle>
                <ContentText>
                    We'd love to hear from you! Our team will help you in any
                    way that we can. Write to us with any comments, questions,
                    or order inquiries. We'll respond as soon as we can, but
                    please give us at least a few days.
                </ContentText>
            </ContentWrapper>
            <FormContainer>
                <form className="sign-up-form" onSubmit={handleSubmit}>
                    <FormInput
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={firstName}
                        onChange={handleChange}
                        label="First Name"
                        required
                    />
                    <FormInput
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={lastName}
                        onChange={handleChange}
                        label="Last Name"
                        required
                    />
                    <FormInput
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        label="Email"
                        required
                    />
                    <TextAreaLabel htmlFor="message">Write to us</TextAreaLabel>
                    <TextArea
                        name="message"
                        id="message"
                        value={message}
                        onChange={handleChange}
                        placeholder="Type here..."
                        required
                    />
                    <Btn secondaryBtn type="submit">
                        submit
                    </Btn>
                </form>
                {successMessage && (
                    <SuccessMessageContainer>
                        {successMessage}
                    </SuccessMessageContainer>
                )}
            </FormContainer>
        </ContactContainer>
    );
};

export default Contact;
