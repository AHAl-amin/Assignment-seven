import { FaRegClock } from "react-icons/fa";
import { RiContrastDrop2Line } from "react-icons/ri";

const Recipe = ({ food ,handleRecipe}) => {

// console.log( Recipes)
    return (



        <div className="flex flex-col border-2 p-2 rounded-xl  ">
            <div>
                <img className="rounded-2xl" src={food?.recipe_image} alt="" />
            </div>

            <div className="space-y-6">
                <div className="mt-2 space-y-3">
                    <h3 className="font-bold text-2xl">{food?.recipe_name}</h3>
                    <p className="text-gray-500">{food?.short_description}</p>
                </div>
                <hr />
                <div className="space-y-2">
                    <h3 className="font-bold">Ingredients: <span>3</span></h3>
                    <ul className="text-gray-500 list-disc ml-4 ">
                        <li>{food?.ingredients[0]}</li>
                        <li>{food?.ingredients[1]}</li>
                        <li>{food?.ingredients[3]}</li>
                    </ul>
                </div>
                <hr />
                <div className="flex gap-5">
                    <div className="flex items-center gap-2 text-gray-500">
                        <FaRegClock /><p>{food?.preparing_time}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                        <RiContrastDrop2Line /><p>{food?.calories}</p>
                    </div>
                </div>
                <button onClick={(e) =>handleRecipe(food)} className="bg-green-500 p-3 rounded-full btn">Want to Cook</button>

            </div>



        </div>
    );
};

export default Recipe;