import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormConfig } from './FormConfig'
import { Form } from './Form'
import { SelectSurvey } from './SelectSurvey'
import Button from '@material-ui/core/Button';
import { NewDrawer } from '../shared/components/Drawer'
import { NewDialog } from '../shared/components/NewDialog'
import { CustomSnackbar } from '../shared/components/CustomSnackbar'
import { ControlFormPages } from './ControlFormPages'
import firebase from 'firebase'

const useStyles = makeStyles(theme => ({
    form: {
        textAlign: 'center',
    },
    
}));

export default function ControlPages(props) {

    const { store, logout, email, access, setAccess, user } = props

    const classes = useStyles();

    const [page, setPage] = useState(0);
    const [survey, setSurvey] = useState('0');
    const [componentValue, setComponentValue] = useState("");
    const [existing, setExisting] = useState('');
    const [submitTime, setSubmitTime] = useState('');
    const [componentList, setComponentList] = useState([]);
    const [displayDialog, setDisplayDialog] = useState(false);
    const [open, setOpen] = useState(false);
    let dataForm = { user: store.has('surveyData.data') ? store.get('surveyData.data').length + 1 : 1, version: survey === "0" ? "A" : survey === "1" ? "B" : survey === "2" ? "C" : null };
    let familyArray = [["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""]];
    const [previousCount, setPreviousCount] = useState(0);
    const [dataFormComplete, setDataFormComplete] = useState([]);
    const [surveys, setSurveys] = useState([{ user: store.has('surveyData.data') ? store.get('surveyData.data').length + 1 : 1, version: survey === "0" ? "A" : survey === "1" ? "B" : survey === "2" ? "C" : null }])
    const [rankArray, setRankArray] = useState([])

    //const [dataForm, setDataForm] = React.useState({ user: store.get('surveyData.data').length + 1, version: survey === "0" ? "A" : survey === "1" ? "B" : survey === "2" ? "C" : null });

    // const onUpdate = () => {
    //     const db = firebase.firestore();
    //     db.collection('surveys').doc(survey.id).set({ ...survey, dataForm})
    // }

    // const onDelete = () => {
    //     const db = firebase.firestore();
    //     db.collection('surveys').doc(survey.id).delete();
    // }

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
            console.log("THERE IS DATA! " + JSON.stringify(data))
            //setSurvey("0")
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

    return (
        <NewDrawer logout={logout} store={store} survey={survey} page={page} prevPage={prevPage}>

            {console.log("emailasdf: ", email)}

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
                    
                />
            }

        </NewDrawer>
    );
}
