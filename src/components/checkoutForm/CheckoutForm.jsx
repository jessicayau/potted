import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { clearAllFromCart } from "../../redux/cart/cartSlice";
import FormInput from "../formInput/FormInput";
import {
    ErrorMessage,
    Form,
    FormGroup,
    FormGroupTitle,
    FormRow,
    PaymentBtn,
    SuccessTitle,
    SuccessMessage,
    TestMessage,
} from "./CheckoutForm.styles";

const CARD_OPTIONS = {
    hidePostalCode: true,
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#949cc4",
            color: "black",
            fontWeight: 500,
            fontFamily: "Quicksand, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": {
                color: "white",
            },
            "::placeholder": {
                color: "#949cc4",
            },
        },
        invalid: {
            iconColor: "#eb437b",
            color: "#eb437b",
        },
    },
};

const CheckoutForm = () => {
    const dispatch = useDispatch();
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [cardComplete, setCardComplete] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [billingInfo, setBillingInfo] = useState({
        name: "",
        email: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zipCode: "",
    });
    const [shippingInfo, setShippingInfo] = useState({
        name: "",
        email: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zipCode: "",
    });
    const [sameBillingShipping, setSameBillingShipping] = useState(false);

    const handleBillingChange = (e) => {
        const { name, value } = e.target;
        setBillingInfo({
            ...billingInfo,
            [name]: value,
        });
    };

    const handleShippingChange = (e) => {
        const { name, value } = e.target;
        setShippingInfo({
            ...shippingInfo,
            [name]: value,
        });
    };

    const handleCheckboxToggle = (e) => {
        if (e.target.checked) {
            setBillingInfo(shippingInfo);
            setSameBillingShipping(true);
        } else {
            setBillingInfo({
                name: "",
                email: "",
                address1: "",
                address2: "",
                city: "",
                state: "",
                zipCode: "",
            });
            setSameBillingShipping(false);
        }
    };

    const handleCard = (e) => {
        setError(e.error);
        setCardComplete(e.complete);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        if (error) {
            elements.getElement("card").focus();
            return;
        }

        if (cardComplete) {
            setProcessing(true);
        }

        const payload = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });

        setProcessing(false);

        const reset = () => {
            setError(null);
            setProcessing(false);
            setPaymentMethod(null);
            setSameBillingShipping(false);
            setBillingInfo({
                name: "",
                email: "",
                address1: "",
                address2: "",
                city: "",
                state: "",
                zipCode: "",
            });
            setShippingInfo({
                name: "",
                email: "",
                address1: "",
                address2: "",
                city: "",
                state: "",
                zipCode: "",
            });
            dispatch(clearAllFromCart());
        };

        if (payload.error) {
            setError(payload.error);
        } else {
            setPaymentMethod(payload.paymentMethod);
            setTimeout(() => reset(), 5000);
        }
    };

    return paymentMethod ? (
        <div>
            <SuccessTitle role="alert">
                Your order has been placed!
            </SuccessTitle>
            <SuccessMessage>
                Thanks for shopping with us!
                <br />
                Your order# is {paymentMethod.id.slice(5, 15)}
            </SuccessMessage>
        </div>
    ) : (
        <Form onSubmit={handleSubmit}>
            <FormGroupTitle>Shipping Information</FormGroupTitle>
            <FormGroup>
                <FormInput
                    label="Full Name"
                    id="shippingFullName"
                    name="name"
                    type="text"
                    value={shippingInfo.name}
                    autocomplete="name"
                    handleChange={handleShippingChange}
                    required
                />
                <FormInput
                    label="Address1"
                    id="shippingAddress1"
                    name="address1"
                    type="text"
                    autocomplete="address-line1"
                    value={shippingInfo.address1}
                    handleChange={handleShippingChange}
                    required
                />
                <FormInput
                    label="Address2"
                    id="shippingAddress2"
                    name="address2"
                    type="text"
                    autocomplete="address-line2"
                    value={shippingInfo.address2}
                    handleChange={handleShippingChange}
                />
                <FormInput
                    label="City"
                    id="shippingCity"
                    name="city"
                    type="text"
                    autocomplete="address-level2"
                    value={shippingInfo.city}
                    handleChange={handleShippingChange}
                    required
                />
                <FormInput
                    label="State"
                    id="shippingState"
                    name="state"
                    type="text"
                    maxlength="2"
                    autocomplete="address-level1"
                    value={shippingInfo.state}
                    handleChange={handleShippingChange}
                    required
                />
                <FormInput
                    label="Zip Code"
                    id="shippingZipCode"
                    name="zipCode"
                    type="text"
                    autocomplete="postal-code"
                    value={shippingInfo.zipCode}
                    handleChange={handleShippingChange}
                    required
                />
            </FormGroup>
            <label htmlFor="sameShippingBilling">
                <input
                    type="checkbox"
                    id="sameShippingBilling"
                    onClick={handleCheckboxToggle}
                />
                Billing and shipping information are the same
            </label>
            <FormGroupTitle>Billing Information</FormGroupTitle>
            {sameBillingShipping ? (
                <FormGroup>
                    <FormInput
                        label="Email"
                        id="billingEmail"
                        name="email"
                        type="text"
                        autocomplete="email"
                        value={billingInfo.email}
                        handleChange={handleBillingChange}
                        required
                    />
                </FormGroup>
            ) : (
                <FormGroup>
                    <FormInput
                        label="Full Name"
                        id="billingFullName"
                        name="name"
                        type="text"
                        required
                        autocomplete="name"
                        value={billingInfo.name}
                        handleChange={handleBillingChange}
                    />
                    <FormInput
                        label="Email"
                        id="billingEmail"
                        name="email"
                        type="text"
                        autocomplete="email"
                        value={billingInfo.email}
                        handleChange={handleBillingChange}
                        required
                    />
                    <FormInput
                        label="Address1"
                        id="billingAddress1"
                        name="address1"
                        type="text"
                        autocomplete="address-line1"
                        value={billingInfo.address1}
                        handleChange={handleBillingChange}
                        required
                    />
                    <FormInput
                        label="Address2"
                        id="billingAddress2"
                        name="address2"
                        type="text"
                        autocomplete="address-line2"
                        value={billingInfo.address2}
                        handleChange={handleBillingChange}
                    />
                    <FormInput
                        label="City"
                        id="billingCity"
                        name="city"
                        type="text"
                        autocomplete="address-level2"
                        value={billingInfo.city}
                        handleChange={handleBillingChange}
                        required
                    />
                    <FormInput
                        label="State"
                        id="billingState"
                        name="state"
                        type="text"
                        maxlength="2"
                        autocomplete="address-level1"
                        value={billingInfo.state}
                        handleChange={handleBillingChange}
                        required
                    />
                    <FormInput
                        label="Zip Code"
                        id="billingZipCode"
                        name="zipCode"
                        type="text"
                        autocomplete="postal-code"
                        value={billingInfo.zipCode}
                        handleChange={handleBillingChange}
                        required
                    />
                </FormGroup>
            )}
            <FormGroup className="card">
                <FormRow>
                    <CardElement options={CARD_OPTIONS} onChange={handleCard} />
                </FormRow>
            </FormGroup>
            {error && (
                <ErrorMessage role="alert">
                    <svg width="20" height="20" viewBox="0 0 17 17">
                        <path
                            fill="#eb437b"
                            d="M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z"
                        />
                    </svg>
                    {error.message}
                </ErrorMessage>
            )}
            <PaymentBtn
                secondaryBtn
                type="submit"
                disabled={processing || !stripe}
            >
                {processing ? "Processing..." : "Place Order"}
            </PaymentBtn>
            <TestMessage>
                *Please use the following test credit card*
                <br />
                4242 4242 4242 4242 - Exp: 04/24 - CVV: 242
            </TestMessage>
        </Form>
    );
};

export default CheckoutForm;
