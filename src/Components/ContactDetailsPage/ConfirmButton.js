
// confirm button, this button links back to the reservation step page

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link, Router } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      size: 'large',
    },
  },
}));

export default function ConfirmButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* this button links to the final book page (the next page) */}
      <Link to={process.env.PUBLIC_URL + '/finalbook'}>
        <Button variant="contained" color="secondary">
          Confirm
        </Button>
      </Link>

    </div>
  );
}
