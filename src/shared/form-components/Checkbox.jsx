import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export function Checkbox() {
    const {
        value,
        onChange,
        label,
        checked
    } = props;

    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={checked}
                    onChange={onChange}
                    value={value} />
            }
            label= {label}
        />
    )
}