import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { TextInput } from './TextInput'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
    component: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export function Household(props) {

    const classes = useStyles();

    const {
        age,
        setAge,
        label,
        options,
        value,
        handleChange,
        className,
        people
    } = props;

    return (
        <div>
            <Grid container spacing={3}>
                {people && people.map((person, index) => (
                    <Grid key={index} item xs={4}>
                        <Paper>
                            <div className={classes.component} >
                                Person {index + 1}
                                <TextInput label="Age" value={value} handleChange={(e) => handleChange(e, index, 0)} />
                                <FormControl>
                                    <InputLabel>Gender</InputLabel>
                                    <Select
                                        native
                                        value={value}
                                        onChange={(e) => handleChange(e, index, 1)}
                                    >
                                        <option value="" />
                                        {options && options.map((option, index) => (
                                            <option key={index} value={option}>{option}</option>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>

    )
}