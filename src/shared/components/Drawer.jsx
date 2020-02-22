import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import logo from '../../media/JRA-circle.png'
import ArrowIcon from '@material-ui/icons/ArrowLeft';
import SaveIcon from '@material-ui/icons/SaveAlt';
import Button from '@material-ui/core/Button';
import { CSVLink } from "react-csv";
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import SettingsIcon from '@material-ui/icons/Settings';



const drawerWidth = 100;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        'justify-content': 'center',
        textAlign: 'center',
        overflowX: 'hidden',
        overflowY: 'hidden',
    },
    drawer: {
        overflowX: 'hidden',
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    logo: {
        'text-align': 'center'
    },
    button: {
        textTransform: 'none',
        'text-align': 'center'
    },
    csv: {
        //'text-align': 'center',
        bottom: '20px',
        left: '7px',
        position: 'absolute',
    },
    settings: {
        width: '80px',
        position: 'absolute',
        left: '50%',
        marginLeft: '-40px',
        bottom: '50px'
    },
children: {
    textAlign: 'center'
}
}));

export function NewDrawer(props) {
    const classes = useStyles();

    const {
        prevPage,
        store,
        page,
        survey,
        children,
        logout
    } = props

    const [open, setOpen] = React.useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleMore(e) {
        setAnchorEl(e.currentTarget);
        setOpen(true);
    }

    function handleClose() {
        setAnchorEl(null);
        setOpen(false)
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.logo}>
                    <img src={logo} alt="Logo" />
                </div>


                <Divider />

                {page === 1 &&
                    <>
                        <Button onClick={prevPage} className={classes.button} >
                            <ArrowIcon /> Select Survey
                        </Button>
                        <Divider />
                    </>
                }
                {page === 1 &&
                    <div className={classes.logo}>
                        <h4>Survey:</h4>
                        <h1>{survey === "0" ? "A" : survey === "1" ? "B" : survey === "2" ? "C" : null}</h1>
                    </div>
                }
                {/* {store.has('surveyData.data') &&
                    <div className={classes.logo}>
                        <h4>Completed:</h4>
                        <h1>{store.get('surveyData.data').length}</h1>
                    </div>
                } */}
                {/* {store.has('surveyData.data') &&
                    <div className={classes.csv} >
                        <CSVLink
                            data={store.get('surveyData.data') ? store.get('surveyData.data') : null}
                            filename={"survey-" + (survey === "0" ? "A" : survey === "1" ? "B" : survey === "2" ? "C" : "") + "-" + store.get('surveyData.time') + ".csv"}
                            className={classes.csv}
                            target="_blank"
                        >
                            <IconButton className={classes.csv}>
                                <SaveIcon fontSize="large" />
                            </IconButton>
                        </CSVLink>
                    </div>
                } */}

                <div className={classes.settings}>
                    <IconButton onClick={handleMore}>
                        <SettingsIcon fontSize="large" />
                    </IconButton>
                    <Menu
                        id="fade-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >
                        <MenuItem onClick={logout}>Logout</MenuItem>
                    </Menu>
                </div>
            </Drawer>
            <div className={classes.children} >
                {props.children}
            </div>
        </div>
    );
}