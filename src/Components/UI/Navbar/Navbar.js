import React from "react";
import Aux from "../../../Hoc/Auxilary";
import classes from "./Navbar.css"


const navBar=(props)=>{

    return <Aux>
       
            <nav className={classes.Navbar} >
                <ul>
                    <li>Suggest</li>
                    <li>Consume</li>
                </ul>
            </nav>
    </Aux>

}



export default navBar;