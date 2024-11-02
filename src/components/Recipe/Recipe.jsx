import PropTypes from 'prop-types';
import { CiClock2 } from 'react-icons/ci';
import { AiOutlineFire } from 'react-icons/ai';

const Recipe = ({recipe,handleCookItem}) => {
    // console.log(recipe);
    const {recipe_img, recipe_name, description, preparing_time, 
        ingredients, calories} = recipe;
    return (
        <div>
            <div className="card h-[920px] border border-2xl border-[#28282833] p-6 text-left">
                <figure><img className='w-[322px] h-[200px] rounded-2xl' src={recipe_img} alt="Recipes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-semibold text-xl text-[#282828]">{recipe_name.slice(0,15)}</h2>
                    <p className='font-fira text-[#878787] my-4'>{description}</p>
                    <hr />
                    <h3 className='text-left font-medium text-xl text-[#282828] mt-6 mb-4'>Ingredients: {ingredients.length}</h3>
                    <div className='text-left'>
                        {
                            ingredients.map((ingredient, idx) => <li key={idx} className='font-fira text-[#878787] ml-3'>{ingredient}</li>)
                        }
                    </div>
                    <hr className='mt-4' />
                    <div className='flex items-center justify-between font-fira my-6'>
                        <p className='flex items-center gap-2 text-[#282828CC]'><span><CiClock2 /></span> <span>{preparing_time}</span></p>
                        <p className='flex items-center gap-2 text-[#282828CC]'><span><AiOutlineFire /></span> <span>{calories}</span></p>
                    </div>
                    <div className="card-actions justify-start">
                    <button onClick={() => handleCookItem(recipe)} className="px-6 py-3 bg-green-400 hover:bg-green-500 rounded-full font-semibold text-base">Want to Cook</button>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleCookItem: PropTypes.func.isRequired
};
export default Recipe;