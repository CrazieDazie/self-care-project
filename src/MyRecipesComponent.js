function MyRecipesComponents({label, image, ingredients, instructions}) {
    return(
    <div className="recipeBox">
        <div className="body-container">
            <h1>{label}</h1>
        </div>
        <div className="body-container">
            <img className="recipeImg" src={image} alt="img"/>
            <ul className="ingredientsTxt">
                {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
            ))}
            </ul>
        </div>
        <div className="body-container">
            <ol className="instructionsTxt">
                {instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
            ))}
            </ol>
        </div>

    </div>)
}

export default MyRecipesComponents;