import React, { useState } from "react";
import { Paper, Select, FormControl, InputLabel } from '@material-ui/core';

export function ComponentConfig(props) {
    const {
        key
    } = props;

    const [typeOfComponent, setTypeOfComponent] = useState("Textfield")

    function handleChange(key, value) {
        console.log("Key and value " + key + value);
    }

    return (
        <Paper>
            <FormControl variant="outlined">
                <InputLabel>
                    Age
                </InputLabel>
                <Select
                    native
                    value={typeOfComponent}
                    onChange={handleChange}
                    //labelWidth={labelWidth}
                    inputProps={{
                        name: 'age',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                </Select>
            </FormControl>
        </Paper>
    )
}