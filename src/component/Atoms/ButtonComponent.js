import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const buttonStyle = makeStyles((theme) => ({
    large: {
      width: 256,
    },
    medium: {
      width: 164,
    },
    small: {
      width: 75,
    },
  }));

export const ButtonComponent = ({ ...props }) => {
    const { text, size, onClick } = props;
    const sizeStyle = buttonStyle();

    return (
        <Button variant="contained" style={{ borderRadius: 20,marginRight: 20, padding: '10px 5% ',}} color="Secondary" className={sizeStyle[size]} onClick={onClick}>
        {text}
        </Button>
        );
}

// ButtonComponent.PropTypes = {
//   text: PropTypes.string,
//   size: PropTypes.oneOf(['small', 'medium', 'large']),
//   onClick: PropTypes.func,
// };
