import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, CardActions, Button, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    card: {
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        minWidth: "250px",
        height: "250px",
        maxWidth: "320px",
        overflow: "auto",
        "&:hover": {
            opacity: 0.6,
            cursor: "pointer",
        },
    },
    plusIcon: {
        margin: "auto",
    },
    addCard: {
        display: "flex",
    },

    projectheader: {
        backgroundColor: "#2b6777",
        color: "#ffffff",
        textAlign: "center",
    },
}));

export default function ProjectCard(props) {
    const classes = useStyles();
    return (<>
        {!props.isAdd?
            <Grid item lg={3} md={3} sm={6} xs={12} className={classes.projectgrid}>
                <Card className={classes.card}>
                    <CardHeader className={classes.projectheader} title="Project A" />
                    <CardContent><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div></CardContent>
                </Card>
            </Grid>
            :
            <Grid item lg={3} md={3} sm={6} xs={12}>
                <Card className={`${classes.card} ${classes.addCard}`}>
                    <AddIcon fontSize="large" className={classes.plusIcon} />
                </Card>
            </Grid>
        }
        </>
    )
}
