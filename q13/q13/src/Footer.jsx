import { useContext } from "react";
import { DataContext } from "./Datacontext";

function Footer(){
    const{islogin}=useContext(DataContext);
    return(
        <div>
            <h2>{islogin?"Welcome, User":"Please log in"}</h2>
        </div>
    )
}export default Footer;