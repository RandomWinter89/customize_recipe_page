import React from "react";
import UpdateRecipe from "../pages/updatePage";
import FrontendMentor from "../pages/FrontendMentor";

type ModalType = { 
    isPreview: boolean;
    isOpen: boolean;
    recipeID: number;
    onClose: () => void;
};

const Modal: React.FC<ModalType> = ({ isPreview, isOpen, onClose, recipeID }) => {
    if (!isOpen) return null;
        
    return (
        <div className="--Modal-Closed">
            <div className="--Modal-Box">
                { !isPreview && <UpdateRecipe recipeID={recipeID}/> }
                {  isPreview && <FrontendMentor recipeID={recipeID}/> }
                <button onClick={onClose}>Closed</button>
            </div>
        </div>
    );
}

export default Modal;