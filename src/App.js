import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Control } from './Control'
import { SnackbarProvider, useSnackbar } from 'notistack';
import AppThemeOptions from "./theme/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { light } from './theme/types';
import { dark } from './theme/types';

const lightTheme = createMuiTheme(light);
const darkTheme = createMuiTheme(dark)

export default function App() {
    const [isLight, setIsLight] = React.useState(false);

    let familyArray = [["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""]];

    function changeTheme() {
        setIsLight(!isLight)
    }

    return (
        <MuiThemeProvider theme={isLight ? lightTheme : darkTheme}>
            <SnackbarProvider anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} maxSnack={3}>
                <CssBaseline />
                <Control familyArray={familyArray} setIsLight={changeTheme} />
            </SnackbarProvider>
        </MuiThemeProvider>
    );
}