import { useState } from "react";
import { data } from "./data";
import './App.css';

function Tips({selfcareTips}) {

    const [showMore, setShowMore] = useState(false);
    const [showText, setShowText] = useState(false);
    
    const showTextCLick = (element) => {
        element.showMore = !element.showMore
        setShowText(!showText)
      }

    return(<div className="selfcare-tips layout-container">
        {selfcareTips.map((element => {
            const { name, description, image, showMore } = element;
            return(
                <div className="selfcare-card" key="id">
                    <img className="img-card" src={image} width="300px" alt="pic"/>
                <div>
                    <h2 className="tipHeading">{name}</h2>

                <div>
                    <p className="descr">{showMore ? description : description.substring(0,70) + "...."}
                    <button className="btnshow" onClick={() => showTextCLick(element)}>{showMore ? "Show less" : "Show more"}</button>
          </p>
                </div>
                </div>
                </div>
            )

        }))}
    </div>)
}

export default Tips;