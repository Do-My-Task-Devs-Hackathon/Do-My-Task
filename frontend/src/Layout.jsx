import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  }));

export function Layout(props) {
    const classes = useStyles();


    return (
        <div>
            {props.children}
        </div>
    );

}