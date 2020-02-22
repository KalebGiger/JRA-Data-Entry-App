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

export function MultipleChoiceIfYes(props) {
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
    const [text, setText] = React.useState("");


    function handleTextChange(e, index){
        setText(e.target.value)
        setSelection(null)
        handleExtraOption(e, index)
    }

    function handleSelection(e, index){
        setText("")
        setSelection(e.target.value)
        handleExtraOption(e, index)
    }

    function handleChoice(e, index) {
        if (e.target.value === "Yes") {
            setYesSelected(true)
            handleChange(e, index)
        }
        else {
            setYesSelected(false)
            handleChange(e, index)
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
                <FormControl name="Choose" component="fieldset" id={"Choose"} className={className}>
                    <RadioGroup name="Choose" id={"Choose"} value={selection} onChange={handleSelection}>
                        {extraOptions && extraOptions.map((option, index) => (
                            option === "text-input" ?
                                <TextInput value={text} handleChange={handleTextChange} />
                                :
                                <FormControlLabel
                                    value={option}
                                    control={<Radio />}
                                    label={option}
                                />
                        ))}
                        <FormControlLabel
                            value={"null"}
                            control={<Radio />}
                            label={"Not Answered"}
                        />
                    </RadioGroup>
                </FormControl>
            }
        </>
    )


}

