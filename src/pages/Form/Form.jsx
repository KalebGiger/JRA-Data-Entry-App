import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { surveys } from '../../data/presets'
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { getBlockComponent } from './getBlockComponent'

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
    },
    pageDivide: {
        margin: theme.spacing(2),
        background: '#11b5e3',
        border: 0,
        borderRadius: 5,
        //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        //color: 'white',
        height: 10,
        padding: '0 30px',
    }
}));

export function Form(props) {

    const {
        selectedSurvey,
        formPage,
    } = props

    let { familyArray, dataForm } = props

    const classes = useStyles();

    const handleChange = (e, index) => {
        dataForm[index + 1] = e.target.value
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
    }

    function handleExtraOption(e, indexOfComponent) {
        dataForm[(indexOfComponent + 1)] = "Yes:" + e.target.value
    }

    const [extraOptions, setExtraOptions] = React.useState();

    function handleArrayChange(array, indexOfComponent) {
        dataForm[(indexOfComponent + 1)] = array
    }

    const [value, setValue] = React.useState(null);

    function checkboxOtherChangeCallback(e, indexOfComponent, textValue) {
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
    }

    let prevValue = 1;

    function handleBlockComponents(block, index) {
        //let prevValue;
        if (block.page != prevValue) {
            prevValue++
            return getBlockComponent(block, index, formPage, classes, dataForm, handleChange, checkboxOtherChangeCallback, reset, handleExtraOption, familyArray, handleFamilyChange, handleRankChoice, handleArrayChange)
        }
        else {
            return getBlockComponent(block, index, formPage, classes, dataForm, handleChange, checkboxOtherChangeCallback, reset, handleExtraOption, familyArray, handleFamilyChange, handleRankChoice, handleArrayChange)
        }
    }

    return (
        <div>
            <div className={classes.header}><h1>Survey Version: {selectedSurvey === "0" ? "A" : selectedSurvey === "1" ? "B" : selectedSurvey === "2" ? "C" : null}</h1></div>
            {surveys.content[selectedSurvey].body.map((block, index) =>
                <>
                    {block.page != prevValue &&
                        <>
                            <Divider name={"page" + (index + 1)} className={classes.pageDivide} />
                            <Typography variant="subtitle1" ><i>Page {block.page}</i></Typography>
                        </>
                    }
                    {handleBlockComponents(block, index)}
                </>
            )}
        </div >
    )
}