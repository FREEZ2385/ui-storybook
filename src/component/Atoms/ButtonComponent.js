import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const buttonStyle = makeStyles((theme) => ({
    large: {
      width: 256,
      marginRight: 20,
    },
    middle: {
      width: 164,
      marginRight: 20,
    },
    small: {
      width: 75,
      marginRight: 20,
    },
  }));

export const ButtonComponent = ({ ...props }) => {
    const { text, size, onClick } = props;
    const sizeStyle = buttonStyle();

    return (
        <Button variant="contained" color="Secondary" className={sizeStyle[size]} onClick={onClick}>
        {text}
        </Button>
        );
}
