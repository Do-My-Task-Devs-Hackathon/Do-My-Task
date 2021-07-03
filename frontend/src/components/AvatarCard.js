import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Card, } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "15px",
    },
}));


export default function AvatarCard(props) {
    const fname = props.Fname
    const lname = props.Lname
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <Avatar src="https://scontent-akl1-1.xx.fbcdn.net/v/t1.6435-1/cp0/p50x50/193711539_3958024440945392_5869130516519871956_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=7206a8&_nc_ohc=W9St27I77bEAX-18tT8&_nc_ht=scontent-akl1-1.xx&tp=27&oh=e0a68393dcd12c50eb9513053c17efaa&oe=60E456B4">{fname.charAt(0).toUpperCase() + lname.charAt(0).toUpperCase()}</Avatar>
            <h1>{fname + " " + lname}</h1>

        </Card>
    )
}
