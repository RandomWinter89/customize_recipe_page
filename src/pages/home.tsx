import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useState } from "react";

import RenderGrid from "../components/Grid";
import Modal from '../components/modal'

const Homepage = () => {
    const data = useSelector((e: RootState) => e.recipe);
    const [recipeID, setRecipeID] = useState<number>(-1);
    const [open, setOpen] = useState<boolean>(false);
    const [isImageLoaded, setImageLoadedState] = useState<boolean[]>(data.map(() => false));

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

    return (
        <div className="--public-page">
            <h1>Personal Recipe</h1>
            <div className="Grid-Wrapper">
                <RenderGrid
                    page={data}
                    handleOpen={handleOpen}
                    isImageLoaded={isImageLoaded}
                    setImageLoaded={setImageLoaded}
                />
            </div>
            <Modal isPreview={true} isOpen={recipeID !== -1 && open} onClose={handleClose} recipeID={recipeID} />
        </div>
    );
}

export default Homepage;