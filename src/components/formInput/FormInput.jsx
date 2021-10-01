import React from 'react';
import { FormInputContainer, FormInputLabel, GroupContainer } from './FormInput.styles';

const FormInput = ({ handleChange, label, ...otherFormProps}) => {
    return (
        <GroupContainer>
            <FormInputContainer onChange={handleChange} {...otherFormProps} />
            {label ?
                (<FormInputLabel className={`${otherFormProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</FormInputLabel>)
                : null
            }
        </GroupContainer>
    )
}

export default FormInput;
