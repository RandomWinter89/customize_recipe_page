import { useSelector, useDispatch } from 'react-redux';
import { removeRecipe } from "../features/recipeSlice"
import { RootState } from '../store';
import { useState } from "react";

import RenderGrid from "../components/Grid";
import Modal from '../components/modal'

const Library = () => {
    const data = useSelector((e: RootState) => e.recipe);
    const [recipeID, setRecipeID] = useState<number>(-1);
    const [open, setOpen] = useState<boolean>(false);
    const [isImageLoaded, setImageLoadedState] = useState<boolean[]>(data.map(() => false));
    const dispatch = useDispatch();

    const setImageLoaded = (index: number) => {
        setImageLoadedState((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
        });
    };

    const handleClose = () => {
        setRecipeID(-1);
        setOpen(false);
    };

    const handleOpen = (index: number) => {
        setRecipeID(index);
        setOpen(true);
    };

    const handleRemoval = (index: number) => {
        setImageLoadedState((prev) => {
            const updated = [...prev];
            updated[index - 1] = false;
            return updated;
        });

        dispatch(removeRecipe(index));
    };

    return (
        <div className="--public-page">
            <h1>Personal Recipe</h1>
            <div className="Grid-Wrapper">
                <RenderGrid
                    page={data}
                    handleRemoval={handleRemoval}
                    handleOpen={handleOpen}
                    isImageLoaded={isImageLoaded}
                    setImageLoaded={setImageLoaded}
                />
            </div>
            <Modal isPreview={false} isOpen={recipeID !== -1 && open} onClose={handleClose} recipeID={recipeID} />
        </div>
    );
};

export default Library;
