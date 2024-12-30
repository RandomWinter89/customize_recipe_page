import { RecipeForm, recipe01 } from '../data';

const Homepage = () => {

    const renderGallery = () => {
        return recipe01.map((recipe, index) => (
            <div className="Grid-Prop" key={index}> 
                {recipe.thumbnail && <img src={`${recipe.thumbnail}`} alt={`${recipe.recipeName}`}/>}
                <p className="Sub-Header__Card">{`${recipe.recipeName}`}</p>
            </div>
        ))
    }
    

    return(
        <>
            <div className="Grid-Wrapper">
                {renderGallery()}
            </div>
        </>
    );
}


                {/* <div className="Card">
                    <p className="Sub-Header">Curry Rice</p>
                    <p className="Sub-Description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus debitis dolorum, eligendi voluptate impedit labore quod dicta repudiandae nam architecto accusamus in provident reprehenderit facilis a deserunt voluptatibus tenetur soluta.</p>
                </div>

                <div className="Card">
                    <p className="Sub-Header">Curry Rice</p>
                    <p className="Sub-Description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus debitis dolorum, eligendi voluptate impedit labore quod dicta repudiandae nam architecto accusamus in provident reprehenderit facilis a deserunt voluptatibus tenetur soluta.</p>
                </div>

                <div className="Card">
                    <p className="Sub-Header">Curry Rice</p>
                    <p className="Sub-Description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus debitis dolorum, eligendi voluptate impedit labore quod dicta repudiandae nam architecto accusamus in provident reprehenderit facilis a deserunt voluptatibus tenetur soluta.</p>
                </div>

                <div className="Card">
                    <p className="Sub-Header">Curry Rice</p>
                    <p className="Sub-Description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus debitis dolorum, eligendi voluptate impedit labore quod dicta repudiandae nam architecto accusamus in provident reprehenderit facilis a deserunt voluptatibus tenetur soluta.</p>
                </div> */}

export default Homepage;