import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { TextInput } from './TextInput'
import Checkbox from '@material-ui/core/Checkbox';

export function MultipleChoiceOther(props) {
    const {
        label,
        options,
        value,
        handleChange,
        className,
        extra,
        extraOptions,
        reset
    } = props;

    const [textValue, setTextValue] = React.useState("");
    const [selection, setSelection] = React.useState(null);

    function handleTextChange(e, index) {
        setSelection(null)
        setTextValue(e.target.value)
        handleChange(e, index)
    }

    function handleSelection(e, index){
        setTextValue("")
        setSelection(e.target.value)
        handleChange(e, index)
    }

    return (
        <>
            <FormControl name="Choose" component="fieldset" id={"Choose"} className={className}>
                <RadioGroup name="Choose" id={"Choose"} value={selection} onChange={handleSelection}>
                    {options && options.map((option, index) => (
                        <FormControlLabel
                            name="Choose"
                            id={"Choose"}
                            value={option}
                            control={<Radio />}
                            label={option === "Other" ?
                                <TextInput label="Other" handleChange={handleChange} value={value} /> : option}
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
                <TextInput label="Other" handleChange={handleTextChange} value={textValue} />
            </FormControl>
        </>
    )

    // return (
    //     <>
    //         {options && options.map((option, index) => (
    //             <>
    //                 <FormControlLabel
    //                     required
    //                     id="check"
    //                     checked={value}
    //                     value={option}
    //                     control={<Checkbox checked={value} onChange={handleChange} color="primary" />}
    //                     label={option}
    //                     labelPlacement="end"

    //                 />
    //                 {option === "Other" &&
    //                     <TextInput handleChange={handleChange} value={value} />}
    //             </>
    //         ))}
    //     </>
    // )


}

