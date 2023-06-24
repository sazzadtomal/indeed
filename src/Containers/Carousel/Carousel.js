import React,{Component} from "react";
import classes from "./Carousel.css"


class Carousel extends Component{




         render(){

          const style=[classes.Carousel]

          if(this.props.vertical){

            style.push(classes.Vertical)

          }
          return (
          
                 <div className={style.join(" ")}>
                     {this.props.children}
                 </div>
              )
            
         }






}



export default Carousel;