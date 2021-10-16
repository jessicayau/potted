import React from "react";
import {
    FormInputContainer,
    FormInputLabel,
    GroupContainer,
} from "./FormInput.styles";

const FormInput = ({ handleChange, id, label, ...otherFormProps }) => {
    return (
        <GroupContainer>
            <FormInputContainer
                onChange={handleChange}
                id={id}
                {...otherFormProps}
            />
            {label ? (
                <FormInputLabel
                    htmlFor={id}
                    className={`${
                        otherFormProps.value.length ? "shrink" : ""
                    } form-input-label`}
                >
                    {label}
                </FormInputLabel>
            ) : null}
        </GroupContainer>
    );
};

export default FormInput;
