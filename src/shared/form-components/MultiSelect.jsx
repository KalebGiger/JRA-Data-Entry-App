import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import blue from '@material-ui/core/colors/blue';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import { TextInput } from './TextInput'

export function MultiSelect(props) {

    const { options, checkboxValue, checkboxLabel, checked, handleChange, value } = props;


    const [textValue, setTextValue] = React.useState("")

    function handleTextChange(e, index) {
        setTextValue(e.target.value)
        handleCheckboxChange(e, index)
    }

    function handleCheckboxChange(e, index) {
        handleChange(e, index);
    };

    return (
        <FormControl name="Choose" component="fieldset" id={"Choose"}>
            <FormGroup>
                {options && options.map((option, index) =>
                    <>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    //checked={value}
                                    onChange={(e) => handleCheckboxChange(e, index)}
                                    value={option}
                                    color="secondary"
                                />
                            }
                            label={option}

                        />
                    </>
                )}
                <FormControlLabel
                    control={
                        <Checkbox
                            //checked={value}
                            onChange={(e) => handleCheckboxChange(e)}
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
    )

}
