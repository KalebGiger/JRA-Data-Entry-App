import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export function TextInput(props) {
    const {
        label,
        id,
        value,
        handleChange,
        className,
        checkChange,
        notAnsweredOption,
        description
    } = props;

    const [textValue, setTextValue] = React.useState("");
    const [checkValue, setCheckValue] = React.useState("");


    function handleTextChange(e) {
        setTextValue(e.target.value)
        setCheckValue("")
        handleChange(e)
    }

    function handleCheckChange(e) {
        setCheckValue(e.target.value)
        handleChange(e)
    }

    function handleValueChange(e) {
        if (textValue) {
            handleChange(e)
        }
        else if (checkValue) {
            checkChange(e, "0")
        }
    }

    return (
        <div>
            <div>
                <TextField
                    id={id}
                    className={className}
                    label={label}
                    margin="normal"
                    variant="outlined"
                    value={value}
                    onChange={handleTextChange}
                    multiline={description ? true : false}
                    rows={3}
                    rowsMax={10}
                />
            </div>
            {notAnsweredOption &&
                <div>
                    <FormControl name="Choose" component="fieldset" id={"Choose"}>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        //checked={value}
                                        onChange={handleCheckChange}
                                        value={"null"}
                                        color="secondary"
                                        disabled={textValue ? true : false}
                                        checked={checkValue ? true : false}
                                    />
                                }
                                label={"Not Answered"}
                            />
                        </FormGroup>
                    </FormControl>
                </div>
            }
        </div>
    )
}