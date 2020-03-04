import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { surveys } from './../data/presets'
import { Loading } from '../shared/components/Loading'


export const DEFAULT_FORM_VALUES = {};

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(30),
    },
    content: {
        textAlign: 'center',
        'max-width': 500,
        margin: theme.spacing(5),
    },

    button: {
        textTransform: 'none',
        margin: theme.spacing(1),
        textAlign: 'center',
    },
    continueButton: {
        textTransform: 'none',
    },
    continueButtonDiv: {
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2),
        textAlign: 'center',
    },

    inputButton: {
        width: '100%',
    },

    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    loginButton: {
        textTransform: 'none',
        margin: theme.spacing(1),
        textAlign: 'center',
    },
    login: {
        marginTop: theme.spacing(6)
    }
}));

export function SelectSurvey(props) {

    const [readWriteAccess, setReadWriteAccess] = React.useState(true);
    const [showNotAuth, setShowNotAuth] = React.useState(false);

    const classes = useStyles();

    const [error, setError] = React.useState(false);

    const {
        email,
        nextPage,
        setSurvey,
        survey,
        existing,
        store,
        authenticated
    } = props;

    function handleNextPage() {
        if (survey) {
            nextPage();
        }
        else
            setError(true)
    }

    function handleSurveyChange(e) {
        setSurvey(e.target.value)
        setError(false)
    }

    function continueNextPage() {
        setSurvey(existing[1].version ? existing[1].version : "-1")
        nextPage()
        setError(false)
    }

    return (
        <>
            {readWriteAccess ?
                <Paper className={classes.paper}>
                    <div className={classes.content}>
                        <FormControl className={classes.formControl} error={error}>
                            <InputLabel htmlFor="age-native-simple">Select Survey</InputLabel>
                            <Select
                                native
                                value={survey}
                                onChange={handleSurveyChange}
                                inputProps={{
                                    id: 'survey-select',
                                }}
                            >
                                <option value="" />
                                {surveys && surveys.content.map((survey, index) =>
                                    <option key={index} value={index}>{survey.name}</option>
                                )}
                            </Select>
                        </FormControl>
                        <div className={classes.button}>
                            <Button className={classes.button} variant="contained" color="secondary" onClick={handleNextPage}>
                                Next
                            </Button>
                        </div>
                    </div>
                </Paper>

                :
                showNotAuth ?
                    <Paper className={classes.paper}>
                        <div className={classes.content}>
                            <div>
                                <span>You do not have permission to read or write data. Upon clicking the button below, an email will be sent to the admin. The admin will then send you an email to the email you signed up with {email &&"("+email+")"} when or if you are granted access. Click the button below to request access.</span>
                            </div>
                            <div className={classes.button}>
                                <Button className={classes.button} variant="contained" color="Secondary">Request Access</Button>
                            </div>
                        </div>
                    </Paper>
                    :
                    <Loading />
            }
            {/* {store.has('surveyData.data') && <div className={classes.continueButtonDiv}><Button className={classes.continueButton} color="Primary" variant="contained" onClick={continueNextPage}>Continue current survey {surveyVersion === "0" ? "A" : surveyVersion === "1" ? "B" : surveyVersion === "2" ? "C" : ""} ({store.get('surveyData.time')})</Button></div>} */}
        </>

    )
}