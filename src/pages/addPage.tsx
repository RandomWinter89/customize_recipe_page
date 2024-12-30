import { useState } from 'react';
//import { useDispatch } from 'react-redux';

const AddRecipe = () => {
    const [recipeName, setRecipeName] = useState<string>("");
    const [desc, setDesc] = useState<string>("");
    const [thumbnail, setThumbnail] = useState<string>("https://joyfoodsunshine.com/wp-content/uploads/2022/07/best-omelette-recipe-1.jpg");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <div className="Modal__Open">
            <div className="Modal__Header">Create new recipe</div>
            <form onSubmit={handleSubmit}>
                <img
                    src={thumbnail ? thumbnail:"https://joyfoodsunshine.com/wp-content/uploads/2022/07/best-omelette-recipe-1.jpg" }
                    alt="Upload Thumbnail"
                    className='Modal__Thumbnail'
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

                <label>Recipe Desription: </label>
                <input
                    type="text"
                    name="description"
                    placeholder="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
                    value={desc || ""}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setDesc(e.target.value);
                    }}
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
                ></input>
                <input type="submit" />
            </form>

        </div>
    );
}



export default AddRecipe;