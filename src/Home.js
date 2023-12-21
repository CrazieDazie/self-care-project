import { useState } from "react";
import { data } from './data';
import Tips from "./Tips";
import Buttons from "./Buttons";

function Home() {

    const [tips, setTips] = useState(data);

  const chosenTips = (searchTerm) => {
    const newTips = data.filter(element => element.searchTerm === searchTerm);
    setTips(newTips);
  }

  return(<div>
    <div className="layout-container">
      <h1 className="title-page">Selfcare Ideas for the Happy Lifestyle</h1>
      <h2> After these past few years we are all carrying a lot of heartaches and stressful baggage. The benefits of taking time to recover every week CAN NOT be overstated.</h2> 
      <h2>It's very important to make yourself priority Number One and give your mind, body and soul the love you deserve!  By carving out at least a few minute a day to focus on your wellbeing, you'll be giving yourself the gift of happiness and focus in the long run. It will be even more beneficial if you are able to incorporate some self-care activities in your daily life to avoid burnout or extreme fatigue.</h2>
    </div>
    <Buttons filteredTips={chosenTips}/>
    <Tips selfcareTips={tips}/>
  </div>)
}

export default Home;

