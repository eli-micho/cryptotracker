import React from 'react';
import './style.scss';

const FormButton = ({children, ...otherProps}) => {
    return (
        <button {...otherProps}>
            {children}
        </button>
    );
};

export default FormButton;