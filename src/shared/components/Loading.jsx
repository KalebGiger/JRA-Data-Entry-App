import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
    root: {
        //display: 'flex',
        // marginLeft: 'auto',
        // marginRight: 'auto',
        textAlign: 'center',
        marginTop: theme.spacing(20)

        //margin: theme.spacing(30),

    },
}));

export function Loading() {
    const classes = useStyles();

    return (
            <CircularProgress className={classes.root} size={100} color="secondary" />
    );
}