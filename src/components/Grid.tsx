import { RecipeForm } from "../data";

type RenderListProp = {
    page: RecipeForm[];
    handleRemoval?: (id: number, imageID: number) => void;
    handleOpen?: (id: number) => void;
    isImageLoaded: boolean[];
    setImageLoaded: (index: number) => void;
};

const RenderGrid: React.FC<RenderListProp> = ({ page, handleRemoval, handleOpen, isImageLoaded, setImageLoaded }) => {
    return (
        <>
            {page.map((recipe, index) => {
                const duration: number = Number(recipe.cookTime) + Number(recipe.prepTime);
                
                return (
                    <div className="Card" key={recipe.id}>
                        {handleRemoval && (
                            <button className="Item-Removal" onClick={() => handleRemoval(recipe.id, index)}>X</button>
                        )}
                        <div onClick={() => handleOpen && handleOpen(recipe.id)}>
                            {recipe.thumbnail && (
                                <img
                                    src={`${recipe.thumbnail}`}
                                    alt={`${recipe.recipeName}`}
                                    style={{ display: isImageLoaded[index] ? "block" : "none" }}
                                    onLoad={() => { setImageLoaded(index)}}
                                />
                            )}
                            {!isImageLoaded[index] && (
                                <div className="Block">
                                    <span>PLACEHOLDER</span>
                                </div>
                            )}
                            <p className="Sub-Header">{`${recipe.recipeName}`}</p>
                            <p className="Sub-Description">
                                <strong>Recipe Time</strong>: {duration} mins
                            </p>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default RenderGrid;
