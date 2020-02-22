import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import firebase from 'firebase'
import 'firebase/auth';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


require('firebase/auth');

const useStyles = makeStyles(theme => ({
    form: {
        textAlign: 'center',
        overflowX: 'hidden',
        overflowY: 'hidden',


    },
    paper: {
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: 700,
        marginTop: theme.spacing(10),
        textAlign: 'center',
    },
    signUpPaper: {
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: 700,
        marginTop: theme.spacing(10),
        textAlign: 'center',
    },
    loginButton: {
        textTransform: 'none',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        textAlign: 'center',
    },
    needAccButton: {
        textTransform: 'none',
        // marginLeft: theme.spacing(20),
        // margin: theme.spacing(2),
        textAlign: 'center',
    },
    guestButton: {
        textTransform: 'none',
        // marginRight: theme.spacing(15),
        // margin: theme.spacing(2),
        textAlign: 'center',
    },
    login: {
        margin: theme.spacing(1),
        //marginTop: theme.spacing(2)

    }

}));


export function LoginPage(props) {

    const {
        password,
        setPassword,
        email,
        setEmail,
        showSignup,
        setShowSignup,
        errors,
        setErrors,
        handleShowSignup,
        login,
        signUp,
        name,
        setName,
        nextPage,
        guestLogin
    } = props;

    const classes = useStyles();

    return (
        <div className={classes.form} >

            {showSignup === true ?
                <Paper className={classes.signUpPaper}>
                    <div className={classes.login}>
                        <h2>If you would like to request an account from the admin, submit the form below.</h2>

                        <form onSubmit={signUp}>
                            <div><TextField label={"First and Last Name"} value={name} onChange={e => setName(e.target.value)} /></div>
                            <div><TextField label={"Email"} value={email} onChange={e => setEmail(e.target.value)} /></div>
                            {/* <div><TextField label={"Password"} type="password" value={password} onChange={e => setPassword(e.target.value)} /></div> */}

                            <div><Button type="submit" className={classes.loginButton} variant="contained" color="Secondary" onClick={signUp} >
                                Request Account
                            </Button>
                            </div>
                        </form>
                        {errors && errors}
                        <Grid container spacing={3}>
                            <Grid item sm={6}>
                                <Button className={classes.guestButton} onClick={guestLogin} >Sign in as guest</Button>
                            </Grid>
                            <Grid item sm={6}>
                                <Button variant="outlined" className={classes.needAccButton} onClick={(e) => handleShowSignup(e)}>Already have an account?</Button>
                            </Grid>
                        </Grid>
                    </div>
                </Paper>

                :

                <Paper className={classes.paper}>
                    <div className={classes.login}>
                        <h2>Please sign in.</h2>
                        <form onSubmit={login}>
                            <div><TextField label={"Email"} value={email} onChange={e => setEmail(e.target.value)} /></div>
                            <div><TextField label={"Password"} type="password" value={password} onChange={e => setPassword(e.target.value)} /></div>

                            <div><Button type="submit" className={classes.loginButton} variant="contained" color="Secondary" onClick={login} >
                                Sign in
                            </Button>
                            </div>
                        </form>
                        {errors && errors}
                        <Grid container spacing={3}>
                            <Grid item sm={6}>
                                <Button className={classes.guestButton} onClick={guestLogin} >Sign in as guest</Button>
                            </Grid>
                            <Grid item sm={6}>
                                <Button variant="outlined" className={classes.needAccButton} onClick={(e) => handleShowSignup(e)}>Need an account?</Button>
                            </Grid>
                        </Grid>
                    </div>
                </Paper>

            }
        </div>
    );
}


