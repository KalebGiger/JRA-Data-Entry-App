import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormConfig } from './FormConfig'
import { Form } from './Form'
import { SelectSurvey } from './SelectSurvey'
import Button from '@material-ui/core/Button';
import { NewDrawer } from '../shared/components/Drawer'
import { NewDialog } from '../shared/components/NewDialog'
import DoubleArrow from '@material-ui/icons/DoubleArrow';
import { surveys } from '../data/presets'
import { db } from '../firebase'
import firebase from 'firebase'


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    inputs: {
        margin: theme.spacing(1),
    },
    form: {
        textAlign: 'center',
    },
    header: {
        textAlign: 'center',
    },
    dividers: {
        margin: theme.spacing(2)
    },
    description: {
        margin: theme.spacing(1),
        width: 750,
    },
    dividerColor: {
        margin: theme.spacing(2),
        background: 'radial-gradient(circle, #3c3c3c, #3a3a3a, #373737, #353535, #333333, #323232, #313131, #303030, #303030, #303030, #303030, #303030)',
        border: 0,
        borderRadius: 3,
        //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        //color: 'white',
        height: 2,
        padding: '0 30px',
    },
    csv: {
        textAlign: 'center',
    },
    bottomButtons: {
        width: 300,
        textTransform: 'none',
        margin: theme.spacing(2)
    },
    // arrow: {
    //     marginRight: theme.spacing(2)
    // }
}));

export function ControlFormPages(props) {

    const { rankArray, setRankArray, handleChange, setDataForm, dataFormComplete, setDataFormComplete, store, prevPage, selectedSurvey, submitTime, previousCount, setPreviousCount } = props
    let { familyArray, dataForm } = props

    

    //TODO: Because we are changing state in parent, the DOM rerenders

    const classes = useStyles();

    const [formPage, setFormPage] = React.useState(1);


    let dataSet = (
        store.has('surveyData.data') ? store.get('surveyData.data') : []
    )

    useEffect(() => {
        //store.clear('surveyData')
        console.log("store", store.get('surveyData.data'))
        console.log("dataSet in useEffect ", dataSet)
    }, []);

    function nextFormPage() {

        window.scrollTo(0, 0)
        setFormPage(formPage + 1)

        // let questionCount = 0;

        // surveys.content[selectedSurvey].body.map((block, index) => {
        //     if (block.page === formPage) {
        //         questionCount++
        //         setDataFormComplete(dataFormComplete.splice(index, Object.keys(dataForm).length, dataForm))

        //     }
        // })
        // console.log("must equal ", questionCount + 2)
        // console.log("dataForm.length ", Object.keys(dataForm).length)
        // if (Object.keys(dataForm).length === questionCount + 2) {
        //     setPreviousCount(Object.keys(dataForm).length);
        //     console.log("questionCount in if ", previousCount)

        //     window.scrollTo(0, 0)
        //     setFormPage(formPage + 1)
        // }
        // else
        //     questionCount = previousCount;
    }

    function prevFormPage() {
        setFormPage(formPage - 1)
    }

    function nextForm() {
        document.getElementById("create-form").reset();
    }

    function writeSurveyData() {
        const fb = firebase.database().ref();

        fb.child('surveys/').push(dataForm);
    }

    function submitForm(e) {

        store.set('surveyData.currentSurvey', selectedSurvey)

        dataSet.push(dataForm)

        writeSurveyData();

        // db.collection("surveys").add({
        //     dataSet
        // })
        //     .then(function () {
        //         console.log("Document successfully written!");
        //     })
        //     .catch(function (error) {
        //         console.error("Error writing document: ", error);
        //     });

        //console.log("dataSet before store.set after push ", dataSet)

        let date = new Date()

        store.set('surveyData.data', dataSet)
        store.set('surveyData.time', date.toLocaleString())

        console.log("store: ", store.get('surveyData.data'))

        nextForm()

        // console.log("count" + count)
        // //store.set('count', count)
        // e.preventDefault();
        // console.log("dataForm " + JSON.stringify(dataSet))

        // //dataSet[0].push(new Date())
        // if (count === 0) {
        //     dataSet.splice(0, 1, new Date(), store.get('surveys'), dataForm);
        //     count++;
        // }
        // else {
        //     dataSet.splice(0, 1, new Date(), dataForm);
        // }


        // console.log("dataSet before", JSON.stringify(dataSet));

        // //dataSet.push(dataForm)  

        // console.log("dataSet after", JSON.stringify(dataSet));


        // console.log("Before store", store.get('surveys'));
        // //store.set('surveyData.surveys', dataForm);
        // store.set('surveys', dataSet);
        // console.log("after store", store.get('surveys'));

        // nextForm();

    }

    return (
        <div>
            {console.log("completeDataForm ", dataFormComplete)}
            <form onSubmit={submitForm} id="create-form" className={classes.form}>

                <Form rankArray={rankArray} setRankArray={setRankArray} handleChange={handleChange} setDataForm={setDataForm} familyArray={familyArray} dataForm={dataForm} formPage={formPage} nextFormPage={nextFormPage} prevFormPage={prevFormPage} prevPage={prevPage} selectedSurvey={selectedSurvey} store={store} submitTime={submitTime} />

                {formPage > 2 &&
                    < Button variant="outlined" className={classes.bottomButtons} onClick={prevFormPage}>
                        Back
                    </Button>
                }
                {formPage < 6 &&
                    <Button color="primary" variant="outlined" className={classes.bottomButtons} onClick={nextFormPage}>
                        Next
                        <DoubleArrow className={classes.arrow} />
                    </Button>
                }

                {formPage === 6 &&
                    < Button variant="contained" color="Secondary" className={classes.bottomButtons} type="submit">
                        Submit
                    </Button>
                }

            </form>
        </div >
    );
}