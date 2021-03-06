import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    left: 'auto',
    top: 'auto',
    right: 20,
    bottom: 20,
    position: 'fixed',

  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export const FloatingActionButtons = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
}