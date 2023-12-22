import { useEffect, useState } from 'react';
import './App.css';
import MyRecipesComponents from './MyRecipesComponent';
import { LoaderPage } from './Loader/LoaderPage';

function SelfCareBody() {

const MY_ID = "2ad15b19";
const MY_KEY = "a8f1f64b33eaf4c5cf3ae2a15bc439fc";

const [mySearch, setMySearch] = useState("");
const [myRecipes, setMyRecipes] = useState([]);
const [wordSubmitted, setWordSubmitted] = useState("lemon");
const [stateLoader, setStateLoader] = useState(false);

useEffect(() => {
    setStateLoader(true)
    const getRecipe = async () => {
        const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
        const data = await response.json();
        setMyRecipes(data.hits);
        setStateLoader(false)
    }
    getRecipe()
}, [wordSubmitted])



const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
}

const finalSearch = (e) => {
    e.preventDefault()
    setWordSubmitted(mySearch)
}

    return (
    <div>
        {stateLoader && <LoaderPage/>}

        <div className="layout-container">
            <h1 className="title-page">Self-Care for the Body</h1>
            <h2>Practising self-care is about making yourself a priority so that you can better serve yourself and the ones around you.</h2>

            <h2 className="tipHeading">Cooking for yourself is one of the greatest gifts you can give to your health as part of self-care for the body.</h2>
            
            <h2>The idea is simple: Just open your fridge and pantry, list few main ingredients you have in the box below and click ABRACADABRA! and viola! Over 2.3 million recipes to choose from!</h2>
        </div>

        <div className="App"> 
            <div className='body-container'>
                <form onSubmit={finalSearch}>
                    <input className='search' placeholder='list ingredient here...' onChange={myRecipeSearch} value={mySearch}></input>
                </form>
            </div>

            <div className='body-container'>
                <button className='buttonRecipe' onClick={finalSearch}>ABRACADABRA!</button>
            </div>

        {myRecipes.map((element, index) => {
            return <MyRecipesComponents key={index}
            label={element.recipe.label} 
            image={element.recipe.image} 
            ingredients={element.recipe.ingredientLines}
            instructions={element.recipe.instructionLines}
            />
        })}

        </div>


        </div>
    );
}

export default SelfCareBody;

