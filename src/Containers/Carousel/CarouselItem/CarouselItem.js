import React,{Component} from "react";
import { withRouter } from "react-router-dom";
import classes from "./CarouselItem.css"



class CarouselItem extends Component{





         render(){
           return <div onClick={this.props.clicked} className={classes.CarouselItem}>
                 <img src={this.props.src} alt={this.props.alt}/>
                 <p>Playful musics to cheer you up!</p>
                 <h2>{this.props.name}</h2>
                 
           </div>
         }






}



export default withRouter(CarouselItem);