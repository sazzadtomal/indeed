import React from "react";
import Carousel from "../../Containers/Carousel/Carousel";
import CarouselItem from "../../Containers/Carousel/CarouselItem/CarouselItem"
import music from "../../assets/images/music.jpg"
import movie from "../../assets/images/movie.jpg"
import book from "../../assets/images/book.jpg"



const Categories=(props)=>{

    let clickedHandler=(type)=>{
      
            props.history.push(type)
    }



   return <Carousel>
            <CarouselItem src={music} alt="category-music" name="Music"   clicked={()=>{clickedHandler("/music")}}/>
            <CarouselItem src={movie} alt="category-Movie" name="Movies"  clicked={()=>{clickedHandler("/movies")}}/>
            <CarouselItem src={book} alt="category-book" name="Books"     clicked={()=>{clickedHandler("/books")}}/>
            <CarouselItem src={music} alt="category-music" name="Recipes" clicked={()=>{clickedHandler("/recipes")}}/>
            <CarouselItem src={movie} alt="category-Movie" name="Nobles"  clicked={()=>{clickedHandler("/nobles")}}/>
            <CarouselItem src={book} alt="category-book" name="Hobbies"   clicked={()=>{clickedHandler("/hobbies")}}/>  
    </Carousel>


}

export default Categories