import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { SelectSurvey } from './SelectSurvey'
import { NewDrawer } from '../shared/components/Drawer'
import { NewDialog } from '../shared/components/NewDialog'
import { ControlFormPages } from './ControlFormPages'
import { db } from '../firebase'
import { surveys } from './../data/presets'
import { useSnackbar } from 'notistack';

const useStyles = makeStyles(theme => ({
    form: {
        textAlign: 'center',
    },

}));

export default function ControlPages(props) {

    const { enqueueSnackbar } = useSnackbar();

    const { setNull, survey, setSurvey, setIsLight, store, logout, email, access, setAccess, user } = props
    let { dataForm, familyArray } = props

    const classes = useStyles();

    const [page, setPage] = useState(0);
    const [componentValue, setComponentValue] = useState("");
    const [existing, setExisting] = useState('');
    const [submitTime, setSubmitTime] = useState('');
    const [componentList, setComponentList] = useState([]);
    const [displayDialog, setDisplayDialog] = useState(false);
    const [open, setOpen] = useState(false);
    // const [dataForm, setDataForm] = useState({})
    const [previousCount, setPreviousCount] = useState(0);
    const [dataFormComplete, setDataFormComplete] = useState([]);
    //const [surveys, setSurveys] = useState([{ user: store.has('surveyData.data') ? store.get('surveyData.data').length + 1 : 1, version: survey === "0" ? "A" : survey === "1" ? "B" : survey === "2" ? "C" : null }])
    const [rankArray, setRankArray] = useState([])
    const [themeType, setThemeType] = React.useState(false);
    const [complete, setComplete] = React.useState(false);
    const [resetForm, setResetForm] = React.useState(false);
    // const [missedQuestion, setMissedQuestion] = React.useState("");

    function nextPage() {
        setPage(1);
    }

    function prevPage() {
        setOpen(true)
    }

    function handleChange(e) {
        setComponentValue(e.target.value)
    }

    function handleClose() {
        setOpen(false)
    }

    function handleBack() {
        setPage(0)
        setOpen(false)
    }

    function addComponent(e) {
        e.preventDefault();
        setComponentList([{ name: componentValue }, ...componentList])
        setComponentValue("")
    }

    function displayExisting(data) {
        if (data) {
            setSurvey(store.get('surveyData.currentSurvey'));
            setSubmitTime(store.get('surveyData.time'))
            setExisting(store.get('surveyData.data'))
        }
    }

    useEffect(() => {
        displayExisting(store.get('surveyData'))
        if (store.has('surveyData.currentSurvey')) {
            nextPage()
        }
    }, []);

    function writeSurveyData() {
        const fb = db.ref();
        fb.child('surveys/').push(dataForm);
    }

    let dataSet = (
        store.has('surveyData.data') ? store.get('surveyData.data') : []
    )

    let missedQuestion;

    function checkComplete(e) {
        e.preventDefault();
        if (survey === '0' && Object.keys(dataForm).length === surveys.content[0].body.length + 1 || survey === '1' && Object.keys(dataForm).length === surveys.content[1].body.length + 1 || survey === '0' && Object.keys(dataForm).length === surveys.content[2].body.length + 1) {
            store.set('surveyData.currentSurvey', survey)
            dataSet.push(dataForm)
            let date = new Date()
            store.set('surveyData.data', dataSet)
            store.set('surveyData.time', date.toLocaleString())
            writeSurveyData();
            document.getElementById("create-form").reset();
            setNull(dataForm)

            window.location.reload(false);

            enqueueSnackbar("Survey successfully submitted.", { variant: "success", preventDuplicate: true })

        }
        else {
            for (let i = 1; i < surveys.content[0].body.length + 1; i++) {
                if (typeof dataForm[i] === "undefined") {
                    missedQuestion = i;
                    enqueueSnackbar("Question " + missedQuestion + " has not been entered", { variant: "warning", preventDuplicate: true })
                }
            }
        }
    }

    function handleSurveyChange(e) {
        setSurvey(e.target.value)
        dataForm = { version: survey === "0" ? "A" : survey === "1" ? "B" : survey === "2" ? "C" : null };
    }

    return (
        <NewDrawer setIsLight={setIsLight} handleSurveyChange={handleSurveyChange} logout={logout} store={store} survey={survey} page={page} prevPage={prevPage}>

            {open && <NewDialog handleBack={handleBack} open={open} handleClose={handleClose} />}

            {page === 0 ?
                <SelectSurvey
                    nextPage={nextPage}
                    componentValue={componentValue}
                    handleChange={handleChange}
                    addComponent={addComponent}
                    componentList={componentList}
                    setComponentList={setComponentList}
                    setSurvey={setSurvey}
                    survey={survey}
                    existing={existing}
                    store={store}
                    submitTime={submitTime}
                    email={email}
                />

                :

                <ControlFormPages
                    setPreviousCount={setPreviousCount}
                    previousCount={previousCount}
                    familyArray={familyArray}
                    dataForm={dataForm}
                    //setDataForm={setDataForm}
                    prevPage={prevPage}
                    selectedSurvey={survey}
                    store={store}
                    submitTime={submitTime}
                    setDataFormComplete={setDataFormComplete}
                    dataFormComplete={dataFormComplete}
                    handleChange={handleChange}
                    rankArray={rankArray}
                    setRankArray={setRankArray}
                    complete={complete}
                    setComplete={setComplete}
                    clearForm={setNull}
                    checkComplete={checkComplete}
                />
            }

        </NewDrawer>
    );
}
