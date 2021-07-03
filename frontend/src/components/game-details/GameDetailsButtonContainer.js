import CommonButton from '../CommonButton'

const GameDetailsButtonContainer = ()=>{
    return (
        <div style={{textAlign: "right", paddingTop: "10px", paddingBottom: "10px"}}>
            <CommonButton name="Accept" color="primary" />
            <CommonButton name="Decline" color="secondary" />
        </div>
    )
}
export default GameDetailsButtonContainer
