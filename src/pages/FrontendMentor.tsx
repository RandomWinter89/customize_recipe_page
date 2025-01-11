import { RecipeForm, recipe01 } from "../data";
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useRef } from "react";

const FrontendMentor: React.FC<{recipeID ?: number}> = ({recipeID}) => {
    let recipe: RecipeForm | undefined = undefined;
    if (recipeID) {
        recipe = useSelector((e:RootState) => 
            e.recipe.find((recipe) => recipe.id === recipeID)
        ) as NonNullable<RecipeForm>;
    }

    const firstRecipe = useRef<RecipeForm>(recipe || recipe01[0]);
    const total: number = firstRecipe.current.cookTime + firstRecipe.current.prepTime;

    const renderIngredient = () => {
        return firstRecipe.current.ingredients.map((ingre) => (
            <li><p>{ingre}</p></li>
        ));
    }

    const renderInstruction = () => {
        return (
            < > 
                {firstRecipe.current.instructions.map((ingre) => {
                    const part = ingre.split(':');
                    return (
                        < >
                            <li><strong>{part[0]}</strong>: {part[1]}</li>
                        </>
                    );
                })}
            </>
        )
    }

    return(
        <div className="--page">
            <img className="--img-thumbnail" src={firstRecipe.current.thumbnail}/>
            <h1>{firstRecipe.current.recipeName}</h1>
            <p>{firstRecipe.current.description}</p>
            <div className="--bg-duration">
                <h4>Preparation time</h4>
                <ul>
                    <li><strong>Total:</strong> Approximately {total} minutes</li>
                    <li><strong>Preparation:</strong> {firstRecipe.current.prepTime} minutes</li>
                    <li><strong>Cooking:</strong> {firstRecipe.current.cookTime} minutes</li>
                </ul>
            </div>
            <div className="--listing">
                <h2>Ingredients</h2>
                {firstRecipe.current.ingredients && <ul>{renderIngredient()}</ul>}
            </div>
            <hr />
            <div className="--listing">
                <h2>Instructions</h2>
                {firstRecipe.current.ingredients && <ol>{renderInstruction()}</ol>}
            </div>
            <hr/>
            <div className="--nutrition-form">
                <h2>Nutrition</h2>
                <p>The table below shows nutritional values per serving without the additional fillings.</p>
                <div className="--nutrition-list">
                    <p>Calories</p>
                    <strong>{firstRecipe.current.nutrition.Calories}kcal</strong>
                </div>
                <div className="--nutrition-list">
                    <p>Carb</p>
                    <strong>{firstRecipe.current.nutrition.Carb}g</strong>
                </div>
                <div className="--nutrition-list ">
                    <p>Protein</p>
                    <strong>{firstRecipe.current.nutrition.Protein}g</strong>
                </div>
                <div className="--nutrition-list 4">
                    <p>Fat</p>
                    <strong>{firstRecipe.current.nutrition.Fat}g</strong>
                </div>
            </div>
        </div>
    );
}

export default FrontendMentor;