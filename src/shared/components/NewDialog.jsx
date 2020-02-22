import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
    closeButton: {
        textTransform: 'none',
        marginRight: theme.spacing(2)
    },
    backButton: {
        textTransform: 'none',
    },
}));

export function NewDialog(props) {
    const classes = useStyles();

    const {
        open,
        handleClose,
        handleBack
    } = props

    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Erase data in current form?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Once you go back, the data in the survey you are currently working on will be lost. All previously submitted data is saved.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button className={classes.closeButton} onClick={handleClose} variant="outlined" color="secondary">
                        Cancel
                    </Button>
                    <Button className={classes.backButton} onClick={handleBack} variant="contained" color="secondary">
                        Go back to first page
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}