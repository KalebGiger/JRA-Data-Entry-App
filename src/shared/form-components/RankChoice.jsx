import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export function RankChoice(props) {
    const {
        values,
        handleChange,
        className,
        options
    } = props;


    return (
        <div>
            {options && options.map((option, index2) =>
                <div>
                    <TextField
                        //className={className}
                        label={option}
                        margin="normal"
                        variant="outlined"
                        value={values}
                        onChange={(e) => handleChange(e, index2)}
                    />

                </div>
            )}
        </div>
    )
}