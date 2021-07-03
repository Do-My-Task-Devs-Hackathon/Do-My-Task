import Paper from '@material-ui/core/Paper'
import CreateGameTextbox from './CreateGameTextbox'
import CreateGameSingleLineInput from './CreateGameSingleLineInput'
import './CreateGame.css'
const CreateGame = ()=>{
    return (
        <Paper className="container">
            <CreateGameSingleLineInput />
            <CreateGameTextbox />
        </Paper>
    )
}

export default CreateGame