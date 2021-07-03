import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, CardActions, Button  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "345px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },

    header: {
        textAlign: "center",
        backgroundColor: "#2b6777",
        // backgroundColor: "#52ab98",
        color:"#f2f2f2"
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

    delegateBtn: {
        backgroundColor: "#c8d8e4",
        color: "black",
        "&:hover": {
            backgroundColor:"#f1f0ff",
        },
    },

    detailsBtn: {
        backgroundColor: "#d4d4d4",
        "&:hover": {
            backgroundColor: "#f2f2f2",
        }
    },
}));

export default function TaskCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader title="Task Title" className={classes.header}/>

            <CardContent className={classes.content}>
                <p className={classes.noTopBotMargin}><b>Host:</b> {props.host}</p>
                <p className={classes.noTopBotMargin}><b>Description:</b> {props.description}</p>
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