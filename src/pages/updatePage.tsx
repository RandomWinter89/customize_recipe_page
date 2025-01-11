import { RecipeForm, Nutrition} from '../data';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { updateRecipe } from "../features/recipeSlice"

const UpdateRecipe: React.FC<{recipeID : number}> = ({recipeID}) => {
    const data = useSelector((e:RootState) => 
        e.recipe.find((recipe) => recipe.id === recipeID)
    ) as NonNullable<RecipeForm>;

    const dispatch = useDispatch();
    const resetRef: Nutrition = {
        Calories: 0,
        Carb: 0,
        Protein: 0,
        Fat: 0,
    };

    const resetRecipe = {
        id: 0,
        thumbnail: "https://joyfoodsunshine.com/wp-content/uploads/2022/07/best-omelette-recipe-1.jpg",
        recipeName: "",
        description: "",
        prepTime: 0,
        cookTime: 0,
        ingredients: [],
        instructions: [],
        nutrition: resetRef,
    };
    const [recipe, setRecipe] = useState<RecipeForm>(resetRecipe);
    const [ingredient, setIngredient] = useState<string>("");
    const [instruction, setInstruction] = useState<string>("");

    useEffect(() => {
        setRecipe(data);
    }, []);

    //General Function
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        dispatch(updateRecipe(recipe));
    }

    const handleRecipeUpdate = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        e.stopPropagation();
        
        const {name, value} = e.target;
        setRecipe((prev) => {
            return {...prev, [name]: value};
        })
    }

    const handleNutritionUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        e.stopPropagation();

        const {name, value} = e.target;
        setRecipe((prev) => ({
            ...prev,
            nutrition: {
                ...prev.nutrition,
                [name]: value,
            },
        }))
    }

    //Remove Ingredient
    const removeIngredient = (index: number, e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();

        const updateItem = recipe.ingredients.filter(
            (_, i) => i !== index
        );

        setRecipe((prev) => {
            return {...prev, ingredients: updateItem};
        })
    }

    const HandleAddIngredient = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();

        if (ingredient.trim() === '') return;
        setRecipe((prev) => {
            return {
                ...prev, 
                ingredients: [...prev.ingredients, ingredient]
            };
        })
        setIngredient("");
    };

    const renderIngredientList = () => {
        const dataList = recipe.ingredients;

        return dataList.map((ingr, index) => (
            <div className="Ingredient__List" key={index}>
                <p className="Ingredient__List-Item">{index + 1}. {ingr}</p>
                <button type="button" onClick={(e) => removeIngredient(index, e)} className="Button__Removal">X</button>
            </div>
        ));
    };

    //Remove Instruction
    const removeInstruction = (index: number, e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();

        const updateItem = recipe.instructions.filter(
            (_, i) => i !== index
        );

        setRecipe((prev) => {
            return {...prev, instructions: updateItem};
        })
    }

    const HandleAddInstruction = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        e.stopPropagation();

        if (instruction.trim() === '') return;
        console.log(instruction);

        setRecipe((prev) => {
            return {
                ...prev, 
                instructions: [...prev.instructions, instruction]
            };
        })
        setInstruction("");
    };

    const renderInstructionList = () => {
        const dataList = recipe.instructions;

        return dataList.map((instr, index) => (
            <div className="Instruction__List" key={index}>
                <p className="Instruction__List-Item">{index + 1}. {instr}</p>
                <button onClick= {(e) => removeInstruction(index, e)} className="Button__Removal">X</button>
            </div>
        ));
    };

    //<<<<RETURN TS>>>>>

    return (
        <>
            <div className="Modal__Open">
                <div className="Modal__Header">Edit this recipe</div>
                <form onSubmit={handleSubmit}>
                    <img
                        src={recipe.thumbnail ? recipe.thumbnail:"https://joyfoodsunshine.com/wp-content/uploads/2022/07/best-omelette-recipe-1.jpg" }
                        alt="Upload Thumbnail"
                        className='Modal__Thumbnail'
                    />

                    <label>Enter Thumbnail Link: </label>
                    <input
                        type="text"
                        name="thumbnail"
                        value={recipe.thumbnail}
                        placeholder={recipe.thumbnail}
                        onChange={handleRecipeUpdate}
                    />

                    <label>Enter Recipe Name: </label>
                    <input
                        type="text"
                        name="recipeName"
                        value={recipe.recipeName}
                        placeholder='ORIHAMA FOOD'
                        onChange={handleRecipeUpdate}
                    />

                    <label>Recipe Description: </label>
                    <textarea
                        name="description"
                        value={recipe.description}
                        placeholder="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
                        onChange={handleRecipeUpdate}
                    />

                    <label>Enter Prep Time: </label>
                    <input
                        type="number"
                        name="prepTime"
                        value={recipe.prepTime}
                        onChange={handleRecipeUpdate}
                    />

                    <label>Enter Cook Time: </label>
                    <input
                        type="number"
                        name="cookTime"
                        value={recipe.cookTime}
                        onChange={handleRecipeUpdate}
                    />

                    <label>Insert Ingredient List: </label>
                    <div className="Ingredient__Add">
                        <input
                            type="text"
                            value={ingredient}
                            placeholder="Exp: 2 Eggs"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setIngredient(e.target.value);
                            }}
                        />
                        <button onClick={HandleAddIngredient}>
                            Add Ingredient
                        </button>
                    </div>
                    <div className="Sub__Wrapper">
                        {renderIngredientList()}
                    </div>

                    <label>Insert Instruction List: </label>
                    <div className="Instruction__Add">
                        <input
                            type="text"
                            value={instruction}
                            placeholder="Exp: You put egg inside"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setInstruction(e.target.value);
                            }}
                        />
                        <button onClick={HandleAddInstruction}>
                            Add Steps
                        </button>
                    </div>
                    <div className="Sub__Wrapper">
                        {renderInstructionList()}
                    </div>
                    
                    <div className="NutritionSection">
                        <div className="mini__wrapper">
                            <label>Calories: </label>
                            <input
                                type="number"
                                name="Calories"
                                placeholder={`0`}
                                value={recipe.nutrition.Calories}
                                onChange={handleNutritionUpdate}
                            />
                        </div>

                        <div className="mini__wrapper">
                            <label>Carbohyrdate: </label>
                            <input
                                type="number"
                                name="Carb"
                                placeholder={`0`}
                                value={recipe.nutrition.Carb}
                                onChange={handleNutritionUpdate}
                            />
                        </div>

                        <div className="mini__wrapper">
                            <label>Protein: </label>
                            <input
                                type="number"
                                name="Protein"
                                placeholder={`0`}
                                value={recipe.nutrition.Protein}
                                onChange={handleNutritionUpdate}
                            />
                        </div>

                        <div className="mini__wrapper">
                            <label>Fat: </label>
                            <input
                                type="number"
                                name="Fat"
                                placeholder={`0`}
                                value={recipe.nutrition.Fat}
                                onChange={handleNutritionUpdate}
                            />
                        </div>
                    </div>

                    <input type="submit" />
                </form>

            </div>
        </>
    );
}

export default UpdateRecipe;