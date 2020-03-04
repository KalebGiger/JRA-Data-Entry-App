import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import ControlPages from './pages/ControlPages'
import { customTheme } from './theme/theme'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
//import firebase from 'firebase'
import 'firebase/auth';
import { firebaseConfig } from './firebase';
import { firebaseApp } from './firebase'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { LoginPage } from './pages/LoginPage'
import { Loading } from './shared/components/Loading'
import { SnackbarProvider, useSnackbar } from 'notistack';
//import { lightTheme, darkTheme } from './theme/theme';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

require('firebase/auth');

const useStyles = makeStyles(theme => ({
  form: {
    textAlign: 'center',
    overflowX: 'hidden',
    overflowY: 'hidden',
  },
  paper: {
    // marginLeft: 'auto',
    // marginRight: 'auto',
    //width: 500,
    // margin: theme.spacing(1),
    // marginTop: theme.spacing(5),
    position: 'absolute',
    top: '50%',
    left: '50%',
    height: '20%',
    width: '50%',
    margin: '-15% 0 0 -25%',
    //height: 125
  },
  button: {
    textTransform: 'none',
  },

}));

//const firebaseApp = firebase.initializeApp(firebaseConfig)

const Auth = firebaseApp.auth();
// const providers = {
//   googleProvider: new firebase.auth.GoogleAuthProvider(),
// };

export function Control(props) {

  let {familyArray} = props;

  const { setIsLight } = props;
  const [survey, setSurvey] = React.useState('0');
  const [user, setUser] = React.useState("");
  const [showLogin, setShowLogin] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [errors, setErrors] = React.useState("");
  const [showSignup, setShowSignup] = React.useState(false);
  const [name, setName] = React.useState("");
  const [allowLogin, setAllowLogin] = React.useState(false);
  const [access, setAccess] = React.useState(false);
  const [theme, setTheme] = React.useState("dark");
  let dataForm = { version: survey === "0" ? "A" : survey === "1" ? "B" : survey === "2" ? "C" : null };


  const { enqueueSnackbar } = useSnackbar();

  const classes = useStyles();

  const Store = window.require('electron-store');

  const store = new Store();

  function signUp(e) {
    e.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function (result) {
        return result.user.updateProfile({
          displayName: name
        })
      }).catch(function (error) {
        setErrors(error.toString(error))
      });
  };

  function setAll(obj, val) {
    /* Duplicated with @Maksim Kalmykov
        for(index in obj) if(obj.hasOwnProperty(index))
            obj[index] = val;
    */
    Object.keys(obj).forEach(function (index) {
      obj[index] = val
    });
  }

  function setNull(obj) {
    setAll(obj, null);
  }

  function nextPage() {
    setUser("Guest")
  }

  function logout() {
    firebase.auth().signOut().then(function () {
      setUser("")
    }).catch(function (error) {
      return <span>Unable to logout</span>
    });
  }

  function guestLogin() {
    setUser("guest");
    enqueueSnackbar("You do not have permission to submit survey data.", { variant: "error", preventDuplicate: true }) //, action: <Button variant="outlined" className={classes.button} onClick={requestAccess}>Contact</Button> 
  }

  function login(e) {
    e.preventDefault();
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(function () {
        return firebase.auth().signInWithEmailAndPassword(email, password)
          .then(res => {
            setUser(res);
            setPassword("")
            setName("")
            setEmail(res.user.email)
            enqueueSnackbar("Welcome! You are ready to submit survey data.", { variant: "success", preventDuplicate: true, })

          })

      }).catch(function (error) {
        setErrors(error.toString(error))
      });
  };

  function showApp() {
    setAllowLogin(true)
  }

  function showNoAccess() {
    setAllowLogin(false)
  }


  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setUser(user)
      }
      else
        setShowLogin(true)
    });
  }, []);


  function handleShowSignup(e) {
    e.preventDefault()
    setErrors("")
    setShowSignup(!showSignup)
  }

  return (
    <div className={classes.form} >
      {user ?
        <ControlPages
          setIsLight={setIsLight}
          user={user}
          access={access}
          setAccess={setAccess}
          email={email}
          logout={logout}
          store={store}
          survey={survey}
          setSurvey={setSurvey}
          dataForm={dataForm}
          familyArray={familyArray}
          setNull={setNull}
        />
        :
        showLogin ?
          <LoginPage
            password={password}
            setPassword={setPassword}
            email={email}
            setEmail={setEmail}
            showSignup={showSignup}
            setShowSignup={setShowSignup}
            errors={errors}
            setErrors={setErrors}
            handleShowSignup={handleShowSignup}
            login={login}
            signUp={signUp}
            name={name}
            setName={setName}
            nextPage={nextPage}
            guestLogin={guestLogin}
          />
          :
          <Loading />
      }
    </div>

  );
}