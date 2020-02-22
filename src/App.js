import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import ControlPages from './pages/ControlPages'
import { theme } from './theme/theme'
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
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
import { fs } from './firebase'

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
  loginButton: {
    textTransform: 'none',
    margin: theme.spacing(1),
    textAlign: 'center',
  },
  login: {
    marginTop: theme.spacing(6)
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

function App(props) {

  const [user, setUser] = React.useState("");
  const [showLogin, setShowLogin] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [errors, setErrors] = React.useState("");
  const [showSignup, setShowSignup] = React.useState(false);
  const [name, setName] = React.useState("");
  const [allowLogin, setAllowLogin] = React.useState(false);
  const [access, setAccess] = React.useState(false);


  const { enqueueSnackbar } = useSnackbar();

  // const [surveys, setSurveys] = React.useState([{ user: store.has('surveyData.data') ? store.get('surveyData.data').length + 1 : 1, version: survey === "0" ? "A" : survey === "1" ? "B" : survey === "2" ? "C" : null }])

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     const db = firebase.firestore()
  //     const data = await db.collection("surveys").get()
  //     setSurveys= (data.docs.map({...doc => doc.data(), id: doc.id}))
  //   }
  //   fetchData();
  // }, [])

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

  function nextPage() {
    setUser("Guest")
  }

  function requestAccess() {
    enqueueSnackbar("An access request email has been sent to your admin.", { variant: "success", preventDuplicate: true, })
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
    enqueueSnackbar("You do not have permission to submit survey data. Click the \"Contact\" button to request permission.", { variant: "error", preventDuplicate: true, action: <Button variant="outlined" className={classes.button} onClick={requestAccess}>Contact</Button> })
  }

  function login(e) {
    e.preventDefault();
    console.log("email ", email)
    console.log("password ", password)

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(function () {
        return firebase.auth().signInWithEmailAndPassword(email, password)
          .then(res => {
            console.log("firebase.auth().role", firebase.auth())
            console.log(res);
            setUser(res);
            setPassword("")
            setName("")
            setEmail(res.user.email)
            enqueueSnackbar("Welcome! You are ready to submit survey data.", { variant: "success", preventDuplicate: true, })

          })

      }).catch(function (error) {
        console.log(error.toString(error));
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
        console.log(user)
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


      <CssBaseline />
      {user ?
        <ControlPages
          user={user}
          access={access}
          setAccess={setAccess}
          email={email}
          logout={logout}
          store={store}
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

export default function IntegrationNotistack() {
  return (
    <MuiThemeProvider theme={theme}>
      <SnackbarProvider anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} maxSnack={3}>
        <App />
      </SnackbarProvider>
    </MuiThemeProvider>

  );
}