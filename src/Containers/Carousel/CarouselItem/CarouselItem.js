import React,{Component} from "react";
import classes from "./CarouselItem.css"



class CarouselItem extends Component{



         render(){
           return <div className={classes.CarouselItem}>
                 <img src={this.props.src} alt={this.props.alt}/>
                 <p>Playful musics to cheer you up!</p>
                 <h2>{this.props.catType}</h2>
                 
           </div>
         }






}



export default CarouselItem;