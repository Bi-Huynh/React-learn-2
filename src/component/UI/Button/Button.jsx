import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

Button.propTypes = {};

function Button({ children }) {
    console.log(children);
    return <div className="button">{children}</div>;
}

export default Button;
