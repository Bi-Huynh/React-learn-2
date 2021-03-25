import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

Button.propTypes = {};

function Button({ children }) {
    return <div className="button">{children}</div>;
}

export default Button;
