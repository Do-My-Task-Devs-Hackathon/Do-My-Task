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

    delegateBtn: {
        backgroundColor: "blue",
        color: "white",
        "&:hover": {
            backgroundColor: "#8478ff",
        },
    },

    detailsBtn: {
        backgroundColor: "#d7d4ff",
        "&:hover": {
            backgroundColor: "#e5e3ff",
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
