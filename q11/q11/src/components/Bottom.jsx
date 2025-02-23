import BottomMain from "./BottomMain";

function Bottom({username}){
    console.log(username);
return(
    <div>
        <BottomMain username={username}/>
    </div>
)
}
export default Bottom;