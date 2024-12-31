import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createRecipe } from "../features/recipeSlice"
//import { useDispatch } from 'react-redux';

type Nutrition = {
    Calories: number,
    Carb: number,
    Protein: number,
    Minerail: number
}

const AddRecipe = () => {
    const dispatch = useDispatch();

    const [thumbnail, setThumbnail] = useState<string>("https://joyfoodsunshine.com/wp-content/uploads/2022/07/best-omelette-recipe-1.jpg");
    const [recipeName, setRecipeName] = useState<string>("");
    const [desc, setDesc] = useState<string>("");
    const [preTime, setPreTime] = useState<number>(0);
    const [cookTime, setCookTime] = useState<number>(0);
    
    const [ingredient, setIngredient] = useState<string>("");
    const [ingredientList, setIngredientList] = useState<string[]>([]);
    const [instruction, setInstruction] = useState<string>("");
    const [instructionList, setInstructionList] = useState<string[]>([]);

    const [nutrition, setNutrition] = useState<Nutrition>({
        Calories: 0,
        Carb: 0,
        Protein: 0,
        Minerail: 0,
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        dispatch(
            createRecipe({
                thumbnail: thumbnail,
                recipeName: recipeName,
                description: desc,
                prepTime: preTime,
                cookTime: cookTime,
                ingredients: ingredientList,
                instructions: instructionList,
                nutrition: nutrition
            })
        );
        
        setThumbnail("");
        setRecipeName("");
        setDesc("");
        setPreTime(0);
        setCookTime(0);
        setIngredient("");
        setIngredientList([]);
        setInstruction("");
        setInstructionList([]);
        setNutrition({
            Calories: 0,
            Carb: 0,
            Protein: 0,
            Minerail: 0,
        });
    }

    const handleNutritionUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setNutrition((prev) => {
            return {...prev, [name]: value};
        });
    }

    //Remove Ingredient
    const removeIngredient = (index: number) => {
        setIngredientList((prevList) => prevList.filter((_item, i) => i !== index));
    }

    const HandleAddIngredient = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (ingredient.trim() === '')
            return;

        setIngredientList( [...ingredientList, ingredient] )
        setIngredient('');
    };

    const renderIngredientList = () => {
        return ingredientList.map((ingr, index) => (
            <div className="Ingredient__List" key={index}>
                <div className="Ingredient__List-Item">
                    {`${ingr}`}
                </div>
                <button onClick= {() => {removeIngredient(index)}} className="Button__Removal">X</button>
            </div>
        ));
    };

    //Remove Instruction
    const removeInstruction = (index: number) => {
        setInstructionList((prevList) => prevList.filter((_item, i) => i !== index));
    }

    const HandleAddInstruction = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (instruction.trim() === '')
            return;

        setInstructionList( [...instructionList, instruction] )
        setInstruction('');
    };

    const renderInstructionList = () => {
        return instructionList.map((instr, index) => (
            <div className="Instruction__List" key={index}>
                <div className="Instruction__List-Item">
                    {`${instr}`}
                </div>
                <button onClick= {() => {removeInstruction(index)}} className="Button__Removal">X</button>
            </div>
        ));
    };

    return (
        <div className="Modal__Open">
            <div className="Modal__Header">Create new recipe</div>
            <form onSubmit={handleSubmit}>
                <img
                    src={thumbnail ? thumbnail:"https://joyfoodsunshine.com/wp-content/uploads/2022/07/best-omelette-recipe-1.jpg" }
                    alt="Upload Thumbnail"
                    className='Modal__Thumbnail'
                />

                <label>Enter Thumbnail Link: </label>
                <input
                    type="text"
                    name="thumbnail"
                    placeholder={`${thumbnail}`}
                    value={thumbnail || ""}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setThumbnail(e.target.value);
                    }}
                />

                <label>Enter Recipe Name: </label>
                <input
                    type="text"
                    name="recipeName"
                    placeholder='ORIHAMA FOOD'
                    value={recipeName || ""}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setRecipeName(e.target.value);
                    }}
                />

                <label>Recipe Description: </label>
                <textarea
                    name="description"
                    placeholder="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
                    value={desc || ""}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                        setDesc(e.target.value);
                    }}
                />

                <label>Enter Prep Time: </label>
                <input
                    type="number"
                    placeholder={`${preTime}`}
                    value={preTime || ""}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setPreTime(e.target.valueAsNumber);
                    }}
                />

                <label>Enter Cook Time: </label>
                <input
                    type="number"
                    placeholder={`${cookTime}`}
                    value={cookTime || ""}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setCookTime(e.target.valueAsNumber);
                    }}
                />

                <label>Insert Ingredient List: </label>
                <div className="Ingredient__Add">
                    <input
                        type="text"
                        name="ingredient"
                        placeholder="Exp: 2 Eggs"
                        value={ingredient || ""}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setIngredient(e.target.value);
                        }}
                    />
                    <button onClick={HandleAddIngredient}>
                        Add Ingredient
                    </button>
                    <br/>
                    <div className="Sub__Wrapper">
                        {renderIngredientList()}
                    </div>
                </div>

                <label>Insert Instruction List: </label>
                <div className="Instruction__Add">
                    <input
                        type="text"
                        placeholder="Exp: You put egg inside"
                        value={instruction || ""}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setInstruction(e.target.value);
                        }}
                    />
                    <button onClick={HandleAddInstruction}>
                        Add Steps
                    </button>
                    <br/>
                    <div className="Sub__Wrapper">
                        {renderInstructionList()}
                    </div>
                </div>
                
                <div className="mini__wrapper">
                    <label>Nutrition: </label>
                    <input
                        type="number"
                        name="Calories"
                        placeholder={`0`}
                        onChange={handleNutritionUpdate}
                    />
                </div>

                <div className="mini__wrapper">
                    <label>Carbohyrdate: </label>
                    <input
                        type="number"
                        name="Carb"
                        placeholder={`0`}
                        onChange={handleNutritionUpdate}
                    />
                </div>

                <div className="mini__wrapper">
                    <label>Protein: </label>
                    <input
                        type="number"
                        name="Protein"
                        placeholder={`0`}
                        onChange={handleNutritionUpdate}
                    />
                </div>

                <div className="mini__wrapper">
                    <label>Minerail: </label>
                    <input
                        type="number"
                        name="Minerail"
                        placeholder={`0`}
                        onChange={handleNutritionUpdate}
                    />
                </div>

                <input type="submit" />
            </form>

        </div>
    );
}

export default AddRecipe;