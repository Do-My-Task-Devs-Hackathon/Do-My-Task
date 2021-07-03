import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TaskCard from '../components/TaskCard';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Footer from '../components/Footer';

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
    },

    sectionPadding: {
        paddingLeft: "7%",
        paddingRight: "7%",
        paddingTop: "15px",
        paddingBottom: "80px",
    },

    hostedSection: {
        backgroundColor: "#c8d8e4",
    },

    taskGrid: {
        maxWidth: "100%",
    },

    invitedSection: {
        backgroundColor: "#f2f2f2",
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
    return (
        <div>
            <section className={`${classes.hostedSection} ${classes.sectionPadding}`}>
                <div className={classes.hostHeader}>
                    <h1 className={classes.heading}>Hosted Tasks:</h1>
                    <Button className={classes.createBtn}><AddIcon />Create Task</Button>
                </div>
                <Grid container spacing={5}>
                    <Grid item lg={3} md={4} sm={6} xs={12} className={classes.taskGrid}>
                        <TaskCard host="Weak af guy who can't finish this task alone" description="I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000." />
                    </Grid>

                    <Grid item lg={3} md={4} sm={6} xs={12} className={classes.taskGrid}>
                        <TaskCard host="Weak af guy who can't finish this task alone" description="I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000." />
                    </Grid>

                    <Grid item lg={3} md={4} sm={6} xs={12} className={classes.taskGrid}>
                        <TaskCard host="Weak af guy who can't finish this task alone" description="I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000." />
                    </Grid>

                    <Grid item lg={3} md={4} sm={6} xs={12} className={classes.taskGrid}>
                        <TaskCard host="Weak af guy who can't finish this task alone" description="I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000." />
                    </Grid>

                    <Grid item lg={3} md={4} sm={6} xs={12} className={classes.taskGrid}>
                        <TaskCard host="Weak af guy who can't finish this task alone" description="I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000." />
                    </Grid>
                </Grid>
            </section>

            <section className={`${classes.invitedSection} ${classes.sectionPadding}`}>
                <h1 className={classes.heading}>Invited Tasks</h1>
                <Grid container spacing={5}>
                    <Grid item lg={3} md={4} sm={6} xs={12} className={classes.taskGrid}>
                        <TaskCard host="Weak af guy who can't finish this task alone" description="I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000." />
                    </Grid>

                    <Grid item lg={3} md={4} sm={6} xs={12} className={classes.taskGrid}>
                        <TaskCard host="Weak af guy who can't finish this task alone" description="I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000." />
                    </Grid>

                    <Grid item lg={3} md={4} sm={6} xs={12} className={classes.taskGrid}>
                        <TaskCard host="Weak af guy who can't finish this task alone" description="I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000." />
                    </Grid>

                    <Grid item lg={3} md={4} sm={6} xs={12} className={classes.taskGrid}>
                        <TaskCard host="Weak af guy who can't finish this task alone" description="I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000." />
                    </Grid>

                    <Grid item lg={3} md={4} sm={6} xs={12} className={classes.taskGrid}>
                        <TaskCard host="Weak af guy who can't finish this task alone" description="I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000." />
                    </Grid>
                </Grid>
            </section>

            <Footer/>
        </div>
    )
}