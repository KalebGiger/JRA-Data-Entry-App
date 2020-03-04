import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Form } from './Form/Form'
import Button from '@material-ui/core/Button';
import DoubleArrow from '@material-ui/icons/DoubleArrow';

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

    const { checkComplete, clearForm, complete, setComplete, rankArray, setRankArray, handleChange, setDataForm, dataFormComplete, setDataFormComplete, store, prevPage, selectedSurvey, submitTime, previousCount, setPreviousCount } = props
    let { familyArray, dataForm } = props

    const classes = useStyles();

    const [formPage, setFormPage] = React.useState(1);

    function nextFormPage() {

        window.scrollTo(0, 0)
        setFormPage(formPage + 1)

    }

    function prevFormPage() {
        setFormPage(formPage - 1)
    }

    function submitForm(e) {
        e.preventDefault();
        checkComplete(e);
    }

    return (
        <div>
            <form onSubmit={submitForm} id="create-form" className={classes.form}>

                <Form
                    rankArray={rankArray}
                    setRankArray={setRankArray}
                    handleChange={handleChange}
                    setDataForm={setDataForm}
                    familyArray={familyArray}
                    dataForm={dataForm}
                    formPage={formPage}
                    nextFormPage={nextFormPage}
                    prevFormPage={prevFormPage}
                    prevPage={prevPage}
                    selectedSurvey={selectedSurvey}
                    store={store}
                    submitTime={submitTime}
                />

                < Button variant="contained" color="Secondary" className={classes.bottomButtons} type="submit">
                    Submit
                </Button>

            </form>
        </div >
    );
}