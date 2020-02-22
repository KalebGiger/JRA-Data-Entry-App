import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { TextInput } from '../shared/form-components/TextInput';
import { SelectInput } from '../shared/form-components/SelectInput';
import { MultipleChoice } from '../shared/form-components/MultipleChoice'
import { MultipleChoiceIfYes } from '../shared/form-components/MultipleChoiceIfYes'
import { Household } from '../shared/form-components/Household'
import { RankChoice } from '../shared/form-components/RankChoice'
import { DEFAULT_FORM_VALUES, FormComponents } from '../pages/FormConfig'
import Button from '@material-ui/core/Button';
import { surveys } from '../data/presets'
import Divider from '@material-ui/core/Divider';
import { MultiSelect } from '../shared/form-components/MultiSelect'
import { MultiSelectOther } from '../shared/form-components/MultiSelectOther'
import { MultipleChoiceOther } from '../shared/form-components/MultipleChoiceOther'


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
    multiText: {
        margin: theme.spacing(1),
        width: 300
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
        textTransform: 'none',
        margin: theme.spacing(2)
    }
}));

export function Form(props) {

    const {
        prevPage,
        selectedSurvey,
        store,
        formPage,
        nextFormPage,
        prevFormPage,
        setDataForm,
        rankArray,
        setRankArray

    } = props
    let { familyArray, dataForm } = props

    const classes = useStyles();

    const handleChange = (e, index) => {
        dataForm[(index + 1)] = e.target.value;
        console.log("value " + e.target.value)
        console.log("dataForm ", dataForm)
    }

    let reset = false;

    const people = ["1", "2", "3", "4", "5", "6", "7", "8"]

    function handleFamilyChange(e, index, indexOfComp, indexOfComponent) {
        familyArray[index].splice(indexOfComp, 1, e.target.value)


        let objs = familyArray.map(function (x) {
            return {
                age: x[0],
                gender: x[1]
            };
        });

        dataForm[(indexOfComponent + 1)] = objs.map(obj => (obj.age + (obj.gender && ":") + obj.gender));

        console.log("familyArray ", familyArray)

        console.log("dataForm[(indexOfComponent + 1) ", dataForm[(indexOfComponent + 1)])
        console.log("objs ", objs)
        console.log("dataForm ", dataForm)
    }

    let arr = [];

    function handleRankChoice(e, index2, indexOfComponent) {
        if (dataForm[(indexOfComponent + 1)] instanceof Array) {
            dataForm[(indexOfComponent + 1)].splice(index2, 1, e.target.value)
        }
        else {
            dataForm[(indexOfComponent + 1)] = ["", "", "", ""]
            dataForm[(indexOfComponent + 1)].splice(index2, 1, (e.target.value ? e.target.value : null))
        }

        console.log("dataForm[(indexOfComponent + 1)] ", dataForm[(indexOfComponent + 1)])

    }

    function handleExtraOption(e, indexOfComponent) {
        dataForm[(indexOfComponent + 1)] = "Yes:" + e.target.value
        console.log(dataForm)
    }

    function getBlockComponent(block, indexOfComponent) {
        const { component, options, extra, extraOptions, page } = block;
        const genderOptions = ["Man", "Woman", "Trans man", "Trans woman", "Nonbinary", "Gender Queer or Questioning", "Prefer not to answer"]
        let label = "Q" + (indexOfComponent + 1);
        let indexPlusOne = (indexOfComponent + 1)
            let extraQuestion = (indexOfComponent + "A")
        //console.log("TEST")

        if (page === formPage) {
            switch (component) {
                case 'select':
                    return (
                        <div><Divider variant="middle" className={classes.dividerColor} /><h3>{label}</h3><SelectInput className={classes.inputs} label={label} value={dataForm[indexOfComponent + 1]} handleChange={(e) => handleChange(e, indexOfComponent)} options={options} /><Divider variant="middle" className={classes.dividerColor} /></div>
                    )
                case 'text':
                    return (
                        <div><Divider variant="middle" className={classes.dividerColor} /><h3>{label}</h3><TextInput notAnsweredOption checkChange={(e, index) => checkboxChangeCallback(e, index, indexOfComponent)} className={classes.inputs} label={label} value={dataForm[indexOfComponent + 1]} handleChange={(e) => handleChange(e, indexOfComponent)} /><Divider variant="middle" className={classes.dividerColor} /></div>
                    )
                case 'multi-text':
                    return (
                        <div><Divider variant="middle" className={classes.dividerColor} /><h3>{label}</h3><TextInput notAnsweredOption className={classes.multiText} label={label} value={dataForm[indexOfComponent + 1]} handleChange={(e) => handleChange(e, indexOfComponent)} /><Divider variant="middle" className={classes.dividerColor} /></div>
                    )
                case 'multiple-choice':
                    return <div><Divider variant="middle" className={classes.dividerColor} /><h3>{label}</h3><MultipleChoice reset={reset} extra={extra} extraOptions={extraOptions} className={classes.inputs} label={label} value={dataForm[indexOfComponent + 1]} handleChange={(e) => handleChange(e, indexOfComponent)} options={options} /><Divider variant="middle" className={classes.dividerColor} /></div>

                case 'multiple-choice-other':
                    return (
                        <div>
                            <Divider variant="middle" className={classes.dividerColor} />
                            <h3>{label}</h3>
                            <MultipleChoiceOther handleExtraOption={(e) => handleExtraOption(e, indexOfComponent)} className={classes.inputs} label={label} value={dataForm[indexOfComponent + 1]} extraOptions={extraOptions} handleChange={(e) => handleChange(e, indexOfComponent)} options={options} />
                            <Divider variant="middle" className={classes.dividerColor} />
                        </div>
                    )
                case 'multiple-choice-if-yes':
                    return (
                        <div>
                            <Divider variant="middle" className={classes.dividerColor} />
                            <h3>{label}</h3>
                            <MultipleChoiceIfYes handleExtraOption={(e) => handleExtraOption(e, indexOfComponent)} className={classes.inputs} label={label} value={dataForm[indexOfComponent + 1]} extraOptions={extraOptions} handleChange={(e) => handleChange(e, indexOfComponent)} options={options} />
                            {/* {dataForm[indexOfComponent + 1] === "Yes" && <MultipleChoice options={extraOptions} value={dataForm[indexOfComponent + 1]} handleChange={(e) => handleChange(e, extraQuestion)} className={classes.inputs} label={label} />} */}
                            <Divider variant="middle" className={classes.dividerColor} />
                        </div>
                    )
                case 'household':
                    return (
                        <>
                            <Divider variant="middle" className={classes.dividerColor} />
                            <h3>{label}</h3>

                            <Household people={familyArray} className={classes.inputs} label={label} value={dataForm[indexOfComponent + 1]} handleChange={(e, index, indexOfComp) => handleFamilyChange(e, index, indexOfComp, indexOfComponent)} options={genderOptions} />

                            <Divider variant="middle" className={classes.dividerColor} />
                        </>
                    )

                case 'additional-comments':
                    return <div><Divider variant="middle" className={classes.dividerColor} /><h3>{label}</h3><TextInput notAnsweredOption className={classes.description} label={label} value={dataForm[indexOfComponent + 1]} handleChange={(e) => handleChange(e, indexOfComponent)} /><Divider variant="middle" className={classes.dividerColor} /></div>

                case 'rank-choice':
                    return <div><Divider variant="middle" className={classes.dividerColor} /><h3>{label}</h3><RankChoice className={classes.inputs} options={options} values={dataForm[indexOfComponent + 1]} handleChange={(e, index2) => handleRankChoice(e, index2, indexOfComponent)} /><Divider variant="middle" className={classes.dividerColor} /></div>

                case 'multi-select':
                    return <div><Divider variant="middle" className={classes.dividerColor} /><h3>{label}</h3><MultiSelect className={classes.inputs} label={label} value={dataForm[indexOfComponent + 1]} handleChange={(e, index) => checkboxChangeCallback(e, index, indexOfComponent)} options={options} /><Divider variant="middle" className={classes.dividerColor} /></div>

                case 'multi-select-other':
                    return <div><Divider variant="middle" className={classes.dividerColor} /><h3>{label}</h3><MultiSelectOther handleArrayChange={(array) => handleArrayChange(array, indexOfComponent)} className={classes.inputs} label={label} value={dataForm[indexOfComponent + 1]} handleChange={(e, textValue) => checkboxOtherChangeCallback(e, indexOfComponent, textValue)} options={options} /><Divider variant="middle" className={classes.dividerColor} /></div>

                default:
                    return <div className="no_block_type" />
            }
        }
    }

    function handleArrayChange(array, indexOfComponent) {
        dataForm[(indexOfComponent + 1)] = array
        console.log("dataForm[(indexOfComponent + 1)] ", dataForm[(indexOfComponent + 1)])

    }

    const [value, setValue] = React.useState(null);


    function checkboxOtherChangeCallback(e, indexOfComponent, textValue) {


        console.log("e.target.value", e.target.value)

        if (textValue || textValue === "") {
            setValue(e.target.value)
            if (dataForm[(indexOfComponent + 1)] instanceof Array) {
                let arr = dataForm[(indexOfComponent + 1)];
                let index = value ? arr.indexOf(value) : arr.indexOf("");
                if (value === null || value === "") {
                    arr.push(e.target.value)
                }
                else if (e.target.value)
                    arr.splice(index, 1, e.target.value)
                else {
                    arr.splice(index, 1)
                }
            }
            else {
                dataForm[(indexOfComponent + 1)] = []
                dataForm[(indexOfComponent + 1)].splice(0, 1, (e.target.value ? e.target.value : null))
            }
        }
        else {
            if (dataForm[(indexOfComponent + 1)] instanceof Array) {
                let arr = dataForm[(indexOfComponent + 1)];
                let index = arr.indexOf(e.target.value)
                if (e.target.checked)
                    dataForm[(indexOfComponent + 1)].push(e.target.value)
                else if (e.target.checked === false) {
                    arr.splice(index, 1)
                }
            }
            else {
                dataForm[(indexOfComponent + 1)] = []
                dataForm[(indexOfComponent + 1)].splice(0, 1, (e.target.checked ? e.target.value : null))
            }
        }
        console.log("dataForm[(indexOfComponent + 1)] ", dataForm[(indexOfComponent + 1)])
    }

    function checkboxChangeCallback(e, indexOfComponent, index) {
        if (dataForm[(indexOfComponent + 1)] instanceof Array) {
            if (e.target.checked)
                dataForm[(indexOfComponent + 1)].push(e.target.value)
            else if (e.target.checked === false) {
                dataForm[(indexOfComponent + 1)].pop(e.target.value)
            }
        }
        else {
            dataForm[(indexOfComponent + 1)] = []
            dataForm[(indexOfComponent + 1)].splice(index, 1, (e.target.checked ? e.target.value : null))
        }

        console.log("dataForm[(indexOfComponent + 1)] ", dataForm[(indexOfComponent + 1)])
        //dataForm[(indexOfComponent + 1)] = objs.map(obj => (obj.age + (obj.gender && ":") + obj.gender));
    }



    let count = 0;

    return (
        <div>
            <div className={classes.header}><h1>Survey Version: {selectedSurvey === "0" ? "A" : selectedSurvey === "1" ? "B" : selectedSurvey === "2" ? "C" : null}</h1></div>
            {surveys.content[selectedSurvey].body.map((block, index) => getBlockComponent(block, index))}
        </div >
    )
}