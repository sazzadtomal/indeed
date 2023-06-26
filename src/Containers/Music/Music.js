import React,{Component} from "react";
import classes from "./Music.css"
import Carousel from "../Carousel/Carousel";
import CarouselItem from "../Carousel/CarouselItem/CarouselItem";
import pop from "../../assets/images/music_pop.jpg"
import metal from "../../assets/images/music_metal.jpg"
import rock from "../../assets/images/music_rock.jpg"
import jazz from "../../assets/images/music_jazz.jpg"

class Music extends Component{

    state={
        music:[{src:rock,alt:"typeRock", name:"Rock",des: "We will, we will- Rock You!" , path:this.props.location.pathname+"/rock"},
        {src:metal,alt:"typeMetal", name:"Metal",des:"Blood! Sorrows and Violance", path:this.props.location.pathname+"/metal"},
        {src:jazz,alt:"typeJazz", name:"Jazz",des: "Smoothing and soul touching", path:this.props.location.pathname+"/jazz"},
        {src:pop,alt:"typePop", name:"Pop",des:"Groovy and the thing your heart wants", path:this.props.location.pathname+"/pop"}]
    }

      clickedHandler=(type)=>{
        this.props.history.push(type)
    }





    render(){

        const items=this.state.music.map(genre=>{
            return <CarouselItem key={genre.name}  name={genre.name} src={genre.src} alt={genre.alt} des={genre.des} clicked={()=>{this.clickedHandler(genre.path)}}/>
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