// import React from 'react';
// import MemberCard from '../components/MemberCardGrid';
// import MemberCardGrid from '../components/MemberCardGrid';
// import MemberCardGrid from '../components/MemberCardGrid';
// import { makeStyles } from '@material-ui/core/styles';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MemberCard from '../components/MemberCard';
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

export default function HostView() {
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


            <section className={`${classes.hostedSection} ${classes.sectionPadding}`}>
                <div className={classes.hostHeader}>
                    <div className={classes.sectionTitle}>
                        <h1 className={classes.heading}>Task: Implementing UI</h1>
                        <HelpIcon className={classes.helpIcon} onMouseEnter={handlePopoverOpenHost} onMouseLeave={handlePopoverCloseHost} />
                    </div>


                    {/* <Button className={classes.createBtn}><AddIcon />Create Task</Button> */}
                </div>
                <Grid container spacing={3}>
                    <Grid item lg={3} md={3} sm={6} xs={12} className={classes.taskGrid}>
                        <MemberCard name ="Josh Xi" status ="busy" host="Weak af guy who can't finish this task alone" description="I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000." />
                    </Grid>

                    <Grid item lg={3} md={3} sm={6} xs={12} className={classes.taskGrid}>
                        <MemberCard name ="Simon Cheng" status ="busy" host="Weak af guy who can't finish this task alone" description="I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000." />
                    </Grid>

                    <Grid item lg={3} md={3} sm={6} xs={12} className={classes.taskGrid}>
                        <MemberCard name ="Hajin Kim" status ="available" host="Weak af guy who can't finish this task alone" description="I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000." />
                    </Grid>

                    <Grid item lg={3} md={3} sm={6} xs={12} className={classes.taskGrid}>
                        <MemberCard name ="Kan Qi Wen" status ="available" host="Weak af guy who can't finish this task alone" description="I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000." />
                    </Grid>

                    <Grid item lg={3} md={3} sm={6} xs={12} className={classes.taskGrid}>
                        <MemberCard name ="James You" status ="not busy" host="Weak af guy who can't finish this task alone" description="I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000." />
                    </Grid>

                    <Grid item lg={3} md={3} sm={6} xs={12} className={classes.taskGrid}>
                        <MemberCard name ="Jinkai Zhang" status ="not busy" host="Weak af guy who can't finish this task alone" description="I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000." />
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

// export default function HostView2() {
//     // const classes = useStyles();
//     const classes = useStyles();
//     return (

        
//         <div className={classes.hostedSection}> 
//             <h1>Task: Implementing UI</h1>
//             {/* <h2>Hosted Tasks:</h2> */}
            // <section>
            //     <MemberCardGrid> this</MemberCardGrid>
            // </section>
//             {/* <h2>Invited Tasks</h2> */}
//             <section>

//             </section>
//         </div>
//     )
// }
