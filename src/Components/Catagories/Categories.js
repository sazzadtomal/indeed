import React,{Component} from "react";
import Carousel from "../../Containers/Carousel/Carousel";
import CarouselItem from "../../Containers/Carousel/CarouselItem/CarouselItem"
import music from "../../assets/images/cat_music.jpg"
import movie from "../../assets/images/cat_movies.jpg"
import book from "../../assets/images/cat_book.jpg"
import recipe from "../../assets/images/cat_recipe.jpg"
import hobbies from "../../assets/images/cat_hobbies.jpg"





class Categories extends Component{


        state={
                categories:[{src:music,alt:"category-music", name:"Music",des:"Poweful Music to Cheer You up!",path:"/music"},
                {src:movie,alt:"category-Movie", name:"Movies",des:"Movies that You can enjoy!",path:"/movies"},
                {src:book,alt:"category-book", name:"Books",des:"A releif from Digitalization!",path:"/books"},
                {src:recipe,alt:"category-music", name:"Recipes",des:"Mouth watering recipes!",path:"/recipes" },
                {src:hobbies,alt:"category-hobbies", name:"Hobbies",des:"Hobbies that make you feel at ease",path:"/hobbies"}]
            }

    
        clickedHandler=(type)=>{
      
                this.props.history.push(type)
        }

        render(){ 
        
              const items=this.state.categories.map(cat=>{
                        return <CarouselItem key={cat.name}  name={cat.name} src={cat.src} alt={cat.alt} des={cat.des} clicked={(event)=>{this.clickedHandler(cat.path)}} />
                    })
               
               
                
               return (<Carousel>
                         {items}
                      </Carousel>)
        
        }
    


        }



export default Categories