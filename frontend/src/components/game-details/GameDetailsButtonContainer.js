import {Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    acceptBtn: {
        backgroundColor: "#2b6777",
        color: "white",
        "&:hover": {
            backgroundColor: "#52ab98",
        },

        marginLeft: "10px",
        marginRight: "10px",
    },

    declineBtn: {
        backgroundColor: "#c8d8e4",
        color: "black",
        "&:hover": {
            backgroundColor: "#dbdbdb",
        },
        marginLeft: "10px",
        marginRight: "10px",
    },
}));

const GameDetailsButtonContainer = ()=>{
    const classes = useStyles();
    return (
        <div style={{textAlign: "right", paddingTop: "10px", paddingBottom: "10px"}}>
            <Button className={classes.acceptBtn}>Accept</Button>
            <Button className={classes.declineBtn}>Decline</Button>
        </div>
    )
}
export default GameDetailsButtonContainer
