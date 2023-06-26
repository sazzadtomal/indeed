import React,{Component} from "react";
import classes from "./Carousel.css"
import ScrollContainer from 'react-indiana-drag-scroll'
import { motion } from "framer-motion";

class Carousel extends Component{

        
 

         render(){

          const style=[classes.Carousel]

          if(this.props.vertical){

            style.push(classes.Vertical)

          }
          return (<motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
          
             <ScrollContainer hideScrollbars="false" className={style.join(" ")}>
                     {this.props.children}
            </ScrollContainer>

          </motion.div>)
            
         }






}



export default Carousel;