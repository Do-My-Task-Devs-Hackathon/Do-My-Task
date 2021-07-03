import Button from '@material-ui/core/Button'

const CommonButton = ({name})=>{
    return(
        <Button variant="contained" color="primary">
            {name}
        </Button>
    )
}

export default CommonButton