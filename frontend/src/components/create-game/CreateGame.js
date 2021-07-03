import Paper from '@material-ui/core/Paper'
import CreateGameTextbox from './CreateGameTextbox'
import CreateGameSingleLineInput from './CreateGameSingleLineInput'
import CreateGameButtonContainer from './CreateGameButtonContainer'
import './CreateGame.css'
const CreateGame = ()=>{
    return (
        <Paper className="container">
            <CreateGameSingleLineInput />
            <CreateGameTextbox />
            <CreateGameButtonContainer />
        </Paper>
    )
}

export default CreateGame