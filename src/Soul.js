import { useEffect, useState } from "react";
import { data } from "./dataForSoul";
import './App.css';
import LoaderPage from "./Loader/LoaderPage";

function Soul() {

    const [stateLoader, setStateLoader] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setStateLoader(false), 3000);
      return () => clearTimeout(timer)
    }, [])

    const [place, setPlace] = useState(0);
    const {name, description, image} = data[place];

    const previousPlace = () => {
        setPlace((place) =>{
        place --;
          if (place < 0) {
            return data.length-1;
          }
          return place;
        })
      }
      
      const nextPlace = () => {
        setPlace((place) =>{
            place ++;
          if (place > data.length - 1) {
            place = 0;
          }
          return place;
        })
      }

    return (<div >

        { stateLoader && <LoaderPage/>}

        <div className="layout-container">
        <h1 className="title-page">Self-Care for the Soul</h1>
        <h2>Does anyone else feel the need for a hard reset, a refocus on physical and mental wellness? In order to actually hit the Hard Reset button, there is nothing better than travelling and exploring new countries, cities, towns and wonders of the nature. Here are some great and not widely known locations to start your Bucket List.</h2>
        
        <div>
        <div className="container">
        <img className="img-card soul" src={image} height='300px' alt='place'/>
        </div>

        <div className="container">
        <h2 className="tipHeading">{name}</h2>
        </div>

        <div className="container">
        <p className="descr">{description}</p>
        </div>

        <div className="btn container">
        <button className="btnStyle btnsoul" onClick={previousPlace}>Previous</button>
        <button className="btnStyle btnsoul" onClick={nextPlace}>Next</button>
        </div>

        </div>
        
        </div>
        
        </div>)


}

export default Soul;