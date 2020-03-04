import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { TextInput } from './TextInput'
import Checkbox from '@material-ui/core/Checkbox';
import { MultipleChoiceOther } from './MultipleChoiceOther'
import FormGroup from '@material-ui/core/FormGroup';


export function MultipleChoiceIfYesMulti(props) {
    const {
        label,
        options,
        value,
        handleChange,
        className,
        extra,
        extraOptions,
        reset,
        handleExtraOption
    } = props;

    const [yesSelected, setYesSelected] = React.useState(false);
    const [selection, setSelection] = React.useState(null);
    const [textValue, setTextValue] = React.useState(null)


    function handleSelection(e, index) {
        setSelection(e.target.value)
        handleExtraOption(e)
    }

    function handleTextChange(e, index) {
        setTextValue(e.target.value)
        handleExtraOption(e, e.target.value)
    }

    function handleChoice(e, index) {
        if (e.target.value === "Yes") {
            setYesSelected(true)
            handleChange(e)
        }
        else {
            handleChange(e)
        }

    }

    return (
        <>
            <FormControl name="Choose" component="fieldset" id={"Choose"} className={className}>
                <RadioGroup name="Choose" id={"Choose"} value={value} onChange={handleChoice}>
                    {options && options.map((option, index) => (
                        <FormControlLabel
                            name="Choose"
                            id={"Choose"}
                            value={option}
                            control={<Radio />}
                            label={option}
                        />
                    ))}
                    <FormControlLabel
                        name="Choose"
                        id={"Choose"}
                        value={"null"}
                        control={<Radio />}
                        label={"Not Answered"}
                    />
                </RadioGroup>
            </FormControl>
            {yesSelected &&
                <FormControl name="Choose" component="fieldset" id={"Choose"}>
                    <FormGroup>
                        {extraOptions && extraOptions.map((option, index) =>
                            <>
                                {option === "Other" ? <TextInput label="Other" handleChange={handleTextChange} value={textValue} />
                                    :
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                onChange={(e) => handleSelection(e, index)}
                                                value={option}
                                                color="secondary"
                                            />
                                        }
                                        label={option}
                                    />
                                }
                            </>
                        )}
                        <FormControlLabel
                            control={
                                <Checkbox
                                    //checked={value}
                                    onChange={(e) => handleSelection(e)}
                                    value={"null"}
                                    color="secondary"
                                //disabled={multiSelect}
                                //checked={checkValue ? true : false}
                                />
                            }
                            label={"Not Answered"}
                        />
                    </FormGroup>

                </FormControl>
            }
        </>
    )


}

