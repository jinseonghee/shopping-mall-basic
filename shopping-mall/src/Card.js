import React from "react";
import PropTypes from "prop-types";
import styles from "./stories/button.css";

const  Card = ({ primary, backgroundColor, size, label, 
    ...props
 } ) =>  {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
        <div className="col-md-4">
            <img src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'} width="80%"/>
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.price}</p>
            <button
                type="button"
                className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
                style={backgroundColor && {backgroundColor}}
                {...props}
            >
                {label}
            </button>
        </div>
    )
}

Card.propTypes = {
    /**
     * Shoe index
     */
    i : PropTypes.number,
    /**
     * Is this the principal call to action on the page?
     */
    primary: PropTypes.bool,
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Button contents
     */
    label: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
};

Card.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: 'medium',
    onClick: undefined,
    label: 'Add'
};

export default Card;