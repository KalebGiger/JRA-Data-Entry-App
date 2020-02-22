import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import blue from '@material-ui/core/colors/blue';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import { TextInput } from './TextInput'

export function MultiSelectOther(props) {

    const { options, checkboxValue, checkboxLabel, checked, handleChange, value } = props;

    const [textValue, setTextValue] = React.useState(null)

    function handleTextChange(e, index) {
        setTextValue(e.target.value)
        handleChange(e, e.target.value)
    }

    function handleCheckboxChange(e, index) {
        handleChange(e);
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
                <TextInput label="Other" handleChange={handleTextChange} value={textValue} />
                {/* <FormControlLabel
                    control={
                        <Checkbox
                            //checked={value}
                            onChange={(e) => handleCheckboxChange(e, options.length)}
                            value={textValue}
                            color="secondary"
                        />
                    }
                    label={<TextInput label="Other" handleChange={(e) => handleTextChange(e)} value={textValue} />}
                /> */}
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
