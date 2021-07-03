import Paper from '@material-ui/core/Paper'
import CreateGameTextbox from './CreateGameTextbox'
import CreateGameSingleLineInput from './CreateGameSingleLineInput'
import CreateGameButtonContainer from './CreateGameButtonContainer'
import Typography from '@material-ui/core/Typography'
import BuildIcon from '@material-ui/icons/Build';
import './CreateGame.css'

const CreateGame = () => {
    const header = () => {
        return (
            <Paper className="container header">
                <Typography className="header-element-text" variant="h6" component="h6">
                    Create Task to Invite Others
                </Typography>
            </Paper>

        )
    }

    const details = () => {
        return (
            <Paper className="container">
                <CreateGameSingleLineInput/>
                <CreateGameTextbox/>
                <CreateGameButtonContainer/>
            </Paper>
        )
    }
    return (
        <>
            {header()}
            {details()}
        </>

    )
}
export default CreateGame