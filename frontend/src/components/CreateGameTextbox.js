import React from 'react'
import TextField from '@material-ui/core/TextField'
import './CreateGameTextbox.css'
const CreateGameTextbox = ()=>{
    return (
        <div style={{marginTop:"20px"}}>
            <TextField
                className="inputbox"
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue="Default Value"
                variant="outlined"
            />
        </div>

    )
}

export default CreateGameTextbox