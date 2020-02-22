import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { InputButton } from '../shared/components/InputButton'
import Paper from '@material-ui/core/Paper';
import { List } from '../shared/components/List'
import { TextInput } from '../shared/form-components/TextInput'

export const DEFAULT_FORM_VALUES = {};

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    paper: {
        marginLeft: 'auto',
        marginRight: 'auto',
        'max-width': 500,
    },
    content: {
        textAlign: 'center'
    },
    inputButton: {
        width: '100%',
    },
}));

export function FormConfig(props) {
    const classes = useStyles();

    const {
        input,
        nextPage,
        addComponent,
        handleChange,
        componentValue,
        componentList,
        setComponentList,
    } = props;

    return (
        <Paper className={classes.paper}>
            <div className={classes.content}>
                <form onSubmit={addComponent} >
                    <TextInput
                        onChange={handleChange}
                        value={componentValue}
                        label="Add Component"
                    />
                </form>

                {componentList && <List componentList={componentList} setComponentList={setComponentList} className={classes.inputButton} />}

                <Button onClick={nextPage}>
                    Tesssss
                </Button>
            </div>
        </Paper>

    )
}