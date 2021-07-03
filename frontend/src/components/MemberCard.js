import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, CardActions, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "345px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },

    header: {
        textAlign: "center",
        backgroundColor: "#5eff74"
    },

    content: {
        display: "flex",
        flexDirection: "column",
    },

    action: {
        display: "flex",
        justifyContent: "space-between",
    },

    noTopBotMargin: {
        marginTop: 0,
        marginBottom: 0,
    },

    invisible: {
        visibility: "hidden"
    },

    delegateBtn: {
        backgroundColor: "blue",
        color: "white",
        "&:hover": {
            backgroundColor: "#8478ff",
        },
        visibility: "hidden"
    },

    detailsBtn: {
        backgroundColor: "#d7d4ff",
        "&:hover": {
            backgroundColor: "#e5e3ff",
        }
    },

    red: {
        color: "red",
        fontWeight: "normal"
    },
    green: {
        color: "green",
        fontWeight: "normal"
    },
    purple: {
        color: "purple",
        fontWeight: "normal"
    }
}));

export default function TaskCard(props) {
    const classes = useStyles();
    console.log(props.status)

    if (props.status == "busy") {
        return (
            <Card className={classes.root}>
                <CardHeader title={props.name} className={classes.header} />

                <CardContent className={classes.content}>
                    <p className={classes.noTopBotMargin}><b>Status:</b> <b className={classes.red}>{props.status}</b></p>
                    <p className={classes.noTopBotMargin, classes.invisible}><b>Description:</b> {props.description}</p>
                </CardContent>

                <CardActions className={classes.action}>
                    <Button className={classes.delegateBtn}>
                        Delegate
                    </Button>

                    <Button className={classes.detailsBtn}>
                        Invite
                    </Button>
                </CardActions>
            </Card>
        )

    }
    else if (props.status  == "available") {
        return (
            <Card className={classes.root}>
                <CardHeader title={props.name} className={classes.header} />

                <CardContent className={classes.content}>
                    <p className={classes.noTopBotMargin}><b>Status:</b> <b className={classes.green}>{props.status}</b></p>
                    <p className={classes.noTopBotMargin, classes.invisible}><b>Description:</b> {props.description}</p>
                </CardContent>

                <CardActions className={classes.action}>
                    <Button className={classes.delegateBtn}>
                        Delegate
                    </Button>

                    <Button className={classes.detailsBtn}>
                    Invite
                    </Button>
                </CardActions>
            </Card>
        )

    }
    else if (props.status  == "not busy") {
        return (
            <Card className={classes.root}>
                <CardHeader title={props.name} className={classes.header} />

                <CardContent className={classes.content}>
                    <p className={classes.noTopBotMargin}><b>Status:</b> <b className={classes.purple}>{props.status}</b></p>
                    <p className={classes.noTopBotMargin, classes.invisible}><b>Description:</b> {props.description}</p>
                </CardContent>

                <CardActions className={classes.action}>
                    <Button className={classes.delegateBtn}>
                        Delegate
                    </Button>

                    <Button className={classes.detailsBtn}>
                    Invite
                    </Button>
                </CardActions>
            </Card>
        )

    }
    return (
        <Card className={classes.root}>
            <CardHeader title={props.name} className={classes.header} />

            <CardContent className={classes.content}>
                <p className={classes.noTopBotMargin}><b>Status:</b> <b className={classes.purple}>{props.status}</b></p>
                <p className={classes.noTopBotMargin, classes.invisible}><b>Description:</b> {props.description}</p>
            </CardContent>

            <CardActions className={classes.action}>
                <Button className={classes.delegateBtn}>
                    Delegate
                </Button>

                <Button className={classes.detailsBtn}>
                    Details
                </Button>
            </CardActions>
        </Card>
    )
}