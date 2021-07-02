import React from 'react';

export function Layout(props) {

    return (
        <div >
            <div >
                {props.children}
            </div>
        </div>
    );

}