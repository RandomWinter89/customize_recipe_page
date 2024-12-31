import { createSlice } from '@reduxjs/toolkit';
import { recipe01, RecipeForm } from '../data';

const recipeSlice = createSlice({
    name: 'recipe',
    initialState: recipe01,
    reducers: {
        createRecipe: (state, action) => {
            const newRecipe = <RecipeForm>{
                id: Date.now(),
                thumbnail: action.payload.thumbnail,
                recipeName: action.payload.recipeName,
                description: action.payload.description,
                prepTime: action.payload.prepTime,
                cookTime: action.payload.cookTime,
                ingredients: action.payload.ingredients,
                instructions: action.payload.instructions,
                nutrition: action.payload.nutrition,
            };
            state.push(newRecipe);
        },
        updateRecipe: (state, action) => {
            const index = state.findIndex((recipePost) => recipePost);
            if (index != null)
                state[index] = action.payload;
        },
        removeRecipe: (state, action) => {
            return state.filter((recipePost) => recipePost.id !== action.payload.id);
        }
    },
});

export const { createRecipe, updateRecipe, removeRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;