import BottomMainRight from "./BottomMainRight";

function BottomMain({username}){
    console.log(username);
    return(
        <div>
            <BottomMainRight username={username}/>
        </div>
    )
}
export default BottomMain;