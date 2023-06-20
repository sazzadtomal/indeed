import React,{Component} from "react";
import classes from "./Carousel.css"
import CarouselItem from "./CarouselItem/CarouselItem";
import music from "../../assets/images/music.jpg"
import movie from "../../assets/images/movie.jpg"
import book from "../../assets/images/book.jpg"

class Carousel extends Component{



         render(){
           return <div className={classes.Carousel}>
               <div className={classes.empty} ></div>
               <CarouselItem src={music} alt="category-music" catType="Music"/>
               <CarouselItem src={movie} alt="category-Movie" catType="Movies"/>
               <CarouselItem src={book} alt="category-book" catType="Books"/>
            
           </div>
         }






}



export default Carousel;