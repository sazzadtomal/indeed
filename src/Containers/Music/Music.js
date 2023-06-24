import React,{Component} from "react";
import classes from "./Music.css"
import Carousel from "../Carousel/Carousel";
import CarouselItem from "../Carousel/CarouselItem/CarouselItem";

class Music extends Component{

    state={
        music:[{src:"#",alt:"typeRock", name:"Rock"},
        {src:"#",alt:"typePop", name:"Metal"},
        {src:"#",alt:"typeJazz", name:"Jazz"},
        {src:"#",alt:"typeBlues", name:"Blues"}]
    }

    clickedHandler=()=>{
         this.props.history.push("/music")
    } 




    render(){

        const items=this.state.music.map(genre=>{
            return <CarouselItem key={genre.name}  name={genre.name} src={genre.src} alt={genre.alt}/>
        })

        return (<div>
            <div className={classes.Music}>
            <Carousel vertical={true}>
                {items}
            </Carousel>
            </div>
        </div>)

    }

}


export default Music