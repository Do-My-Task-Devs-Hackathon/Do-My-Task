import React from 'react';
import TaskCard from '../components/MemberCardGrid';
import TaskCardGrid from '../components/MemberCardGrid';
import MemberCardGrid from '../components/MemberCardGrid';
import { makeStyles } from '@material-ui/core/styles';

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

export default function HostView() {
    // const classes = useStyles();
    const classes = useStyles();
    return (
        <div className={classes.hostedSection}> 
            <h1>Task: Implementing UI</h1>
            {/* <h2>Hosted Tasks:</h2> */}
            <section>
                <MemberCardGrid> this</MemberCardGrid>
            </section>
            {/* <h2>Invited Tasks</h2> */}
            <section>

            </section>
        </div>
    )
}
