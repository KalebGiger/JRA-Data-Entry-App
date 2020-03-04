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

export function MultipleChoice(props) {
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

    return (
        <>
            <FormControl name="Choose" component="fieldset" id={"Choose"} className={className}>
                <RadioGroup name="Choose" id={"Choose"} value={value} onChange={handleChange}>
                    {options && options.map((option, index) => (
                        <FormControlLabel
                            key={index}
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

