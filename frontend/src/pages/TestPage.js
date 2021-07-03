import CreateGame from '../components/create-game/CreateGame'
import './TestPage.css'

import {useState} from 'react'
import Modal from '@material-ui/core/Modal';


const TestPage = ()=>{
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)
    const handleClose = () => {
        setOpen(false)
        console.log("close triggered")
    }

    return (
        <>
            <div>
                <button type="button" onClick={handleOpen}>
                    Open Modal
                </button>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <div style={{border:"1px solid red", position:"relative", height:"100vh"}} >
                        <div className="container" style={{position: "absolute", top:"50%", left:"50%", transform: "translate(-50%, -50%)"}}>
                            <CreateGame/>
                        </div>
                    </div>

                </Modal>
            </div>
        </>

    )
}


export default TestPage