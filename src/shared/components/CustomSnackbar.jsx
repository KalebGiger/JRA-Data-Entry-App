import React from 'react';
import Button from '@material-ui/core/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';

export function CustomSnackbar(props) {
    const { type, requestAccess, content } = props;

    const { enqueueSnackbar } = useSnackbar();

    const snackbar = () => {
        enqueueSnackbar({ content }, { type });
    };

    return (
        <React.Fragment>
            {snackbar}
            <Button>Contact</Button>
        </React.Fragment>
    );
}