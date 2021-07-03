import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TaskCard from '../components/TaskCard';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import HelpIcon from '@material-ui/icons/Help';
import Footer from '../components/Footer';
import MousePopover from '../components/MousePopover';

const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: "40px",
    },

    hostHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    createBtn: {
        backgroundColor: "#2b6777",
        height: "fit-content",
        color: "#ffffff",
        marginTop: "auto",
        marginBottom: "auto",
        padding: "10px",
        "&:hover": {
            backgroundColor: "#547e8a",
        }
    },

    sectionPadding: {
        paddingLeft: "7%",
        paddingRight: "7%",
        paddingTop: "15px",
        paddingBottom: "80px",
    },

    sectionTitle: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },

    helpIcon: {
        marginLeft: "10px",
        marginRight: "10px",
        "&:hover": {
            cursor: "pointer",
        },
    },

    hostedSection: {
        backgroundColor: "#f2f2f2",
    },

    taskGrid: {
        maxWidth: "100%",
    },

    invitedSection: {
        backgroundColor: "#c8d8e4",
    },
    

    footer: {
        display: "flex",
        flexDirection: "row",
        padding: "0px 10%",
        boxSizing: "content-box",
        justifyContent: "space-between",
        backgroundColor: "#2b6777",
        color: "white",
    },

    flexRow: {
        display: "flex",
        flexDirection: "row",
    },

    linkIcon: {
        height: "30px",
        alignSelf: "center",
        margin: "0px 5px",
    }
}));

export default function Dashboard() {
    const classes = useStyles();

    const [anchorElHostHelp, setAnchorElHostHelp] = React.useState(null);
    const handlePopoverOpenHost = (event) => {
        setAnchorElHostHelp(event.currentTarget);
    };
    const handlePopoverCloseHost = () => {
        setAnchorElHostHelp(null);
    };

    const [anchorElHostInvi, setAnchorElHostInvi] = React.useState(null);
    const handlePopoverOpenInvi = (event) => {
        setAnchorElHostInvi(event.currentTarget);
    };
    const handlePopoverCloseInvi = () => {
        setAnchorElHostInvi(null);
    };

    return (
        <div>
            <section className={`${classes.invitedSection} ${classes.sectionPadding}`}>
                <div className={classes.hostHeader}>
                    <div className={classes.sectionTitle}>
                        <h1 className={classes.heading}>Members of <u>Project A</u>:</h1>
                        <HelpIcon className={classes.helpIcon} onMouseEnter={handlePopoverOpenHost} onMouseLeave={handlePopoverCloseHost} />
                    </div>
                </div>
            </section>

            <section className={`${classes.hostedSection} ${classes.sectionPadding}`}>
                <div className={classes.hostHeader}>
                    <div className={classes.sectionTitle}>
                        <h1 className={classes.heading}>Hosted Tasks:</h1>
                        <HelpIcon className={classes.helpIcon} onMouseEnter={handlePopoverOpenHost} onMouseLeave={handlePopoverCloseHost} />
                    </div>


                    <Button className={classes.createBtn}><AddIcon />Create Task</Button>
                </div>
                <Grid container spacing={3}>
                    <Grid item lg={3} md={3} sm={6} xs={12} className={classes.taskGrid}>
                        <TaskCard host="Weak af guy who can't finish this task alone" description="I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000." />
                    </Grid>

                    <Grid item lg={3} md={3} sm={6} xs={12} className={classes.taskGrid}>
                        <TaskCard host="Weak af guy who can't finish this task alone" description="I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000." />
                    </Grid>

                    <Grid item lg={3} md={3} sm={6} xs={12} className={classes.taskGrid}>
                        <TaskCard host="Weak af guy who can't finish this task alone" description="I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000." />
                    </Grid>

                    <Grid item lg={3} md={3} sm={6} xs={12} className={classes.taskGrid}>
                        <TaskCard host="Weak af guy who can't finish this task alone" description="I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000." />
                    </Grid>

                    <Grid item lg={3} md={3} sm={6} xs={12} className={classes.taskGrid}>
                        <TaskCard host="Weak af guy who can't finish this task alone" description="I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000." />
                    </Grid>
                </Grid>
            </section>

            <section className={`${classes.invitedSection} ${classes.sectionPadding}`}>
                <div className={classes.sectionTitle}>
                    <h1 className={classes.heading}>Invited Tasks:</h1>
                    <HelpIcon className={classes.helpIcon} onMouseEnter={handlePopoverOpenInvi} onMouseLeave={handlePopoverCloseInvi}/>
                </div>
                <Grid container spacing={5}>
                    <Grid item lg={3} md={3} sm={6} xs={12} className={classes.taskGrid}>
                        <TaskCard isInvitation={true} host="Weak af guy who can't finish this task alone" description="I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000." />
                    </Grid>

                    <Grid item lg={3} md={3} sm={6} xs={12} className={classes.taskGrid}>
                        <TaskCard isInvitation={true} host="Weak af guy who can't finish this task alone" description="I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000." />
                    </Grid>

                    <Grid item lg={3} md={3} sm={6} xs={12} className={classes.taskGrid}>
                        <TaskCard isInvitation={true} host="Weak af guy who can't finish this task alone" description="I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000." />
                    </Grid>

                    <Grid item lg={3} md={3} sm={6} xs={12} className={classes.taskGrid}>
                        <TaskCard isInvitation={true} host="Weak af guy who can't finish this task alone" description="I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000." />
                    </Grid>

                    <Grid item lg={3} md={3} sm={6} xs={12} className={classes.taskGrid}>
                        <TaskCard isInvitation={true} host="Weak af guy who can't finish this task alone" description="I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000." />
                    </Grid>
                </Grid>
            </section>

            <Footer />

            <MousePopover anchorEl={anchorElHostHelp} handlePopoverClose={handlePopoverCloseHost}>
                <img src="https://user-images.githubusercontent.com/41566813/124340855-4cbb6580-dc0c-11eb-8979-2cbb5882bfb0.png" />
            </MousePopover>

            <MousePopover anchorEl={anchorElHostInvi} handlePopoverClose={handlePopoverCloseInvi}>
                <img src="https://user-images.githubusercontent.com/41566813/124340855-4cbb6580-dc0c-11eb-8979-2cbb5882bfb0.png" />
            </MousePopover>
        </div>
    )
}
