import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";




const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [recipe, setRecipe] = useState([]);
    const [cooking, setCooking] = useState([]);

    useEffect(() => {
        fetch('./Foods.json')
            .then(res => res.json())

            .then(data => setRecipes(data))
        // .then(data =>console.log(data))
    }), [];
    const handleRecipe = (F) => {
        console.log(F);
        const isExist = recipe.find(item => item.recipe_id == F.recipe_id);
        if (!isExist) {
            setRecipe([...recipe, F]);

        }
        else {

            toast("Already exit!")

        }


    };
    // handle 02
    const handleDelete = (recipe_id, item) => {

        const newRecipe = recipe.filter(item => item.recipe_id != recipe_id);
        setRecipe(newRecipe);
        setCooking([...cooking, item]);

    }


    return (

        <div className="my-10 mx-6 lg:mx-0">
            <ToastContainer />
            <div className="my-10 flex flex-col lg:flex-row gap-5">
                <div className="w-full lg:w-2/3 grid  grid-cols-1 lg:grid-cols-2 gap-6 ">
                    {
                        recipes.map((food) => (<Recipe handleRecipe={handleRecipe} food={food}></Recipe>))

                    }

                </div>


                {/* want part */}
                <div className="w-full lg:w-1/3 ">
                    <div className="space-y-5 border-2 rounded-xl p-5">
                        <div>
                            <h2 className="text-2xl text-center mt-2">Want to cook: <span>{recipe.length}</span></h2>
                            <hr />
                        </div>
                        <div>
                            <div className="flex w-3/4 mt-2 text-gray-500 justify-between">
                                <p>Name</p>
                                <p>Time</p>
                                <p>Calories</p>
                            </div>
                            <div>
                                {
                                    recipe.map((item, index) => (

                                        <div className="flex w-full mt-2 text-[15px] text-green-500 justify-between ">
                                            <div className='flex gap-2 items-center'>
                                                <p className="">{index + 1}</p>
                                                <p className="mr-4 w-10">{item.recipe_name}</p>
                                            </div>
                                            <p className="mr-3w-8">{item.preparing_time}</p>
                                            <p className="w-8 ml-3">{item.calories}</p>
                                            <button onClick={() => handleDelete(item.recipe_id, item)} className=" text-black bg-green-500 w-1/4 p-2 rounded-full ml-5">Preparing</button>
                                        </div>


                                    ))
                                }
                            </div>
                        </div>
                        <div>
                            <div>
                                <h2 className="text-2xl text-center mt-2">Currently cooking: <span>{cooking.length}</span></h2>
                                <hr />
                            </div>
                            <div className="flex w-full mt-2 text-gray-500 justify-between">
                                <p>Name</p>
                                <p>Time</p>
                                <p>Calories</p>
                            </div>
                            <div>
                                {cooking.map((item, index) => (
                                    <div className="flex w-full mt-2 text-[13px] text-green-500 justify-between ">
                                        <div className='flex gap-2 items-center'>
                                            <p className="">{index + 1}</p>
                                            <p className="mr-4 w-10">{item.recipe_name}</p>
                                        </div>

                                        <p className="mr-3w-8">{item.preparing_time}</p>
                                        <p className="w-8">{item.calories}</p>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Recipes;