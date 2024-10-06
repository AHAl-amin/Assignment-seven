import { IoIosPersonAdd } from "react-icons/io";
import './Header.css'

import RecipesHeader from "../RecipesHeader/RecipesHeader";
import Recipes from "../Recipes/Recipes";
import Recipe from "../Recipe/Recipe";

const Header = () => {
    return (

        <div>
            {/* navbar part */}
               <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>

                            <li><a>Search</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>

                            <li><a>Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                <div className="form-control mr-2 invisible lg:visible">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <a className="btn bg-green-600 rounded-full"><IoIosPersonAdd size={20}  /></a>
                </div>
            </div>

            {/* hero part */}


            <div className="hero min-h-screen rounded-2xl header-img " >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content ">
                    <div className="w-full lg:w-2/3">
                        <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-5">Food is one of the basic necessities of life. Food contains nutrients—substances essential for the growth, repair!</p>
                        <div className="space-x-2">
                            <button className="btn bg-green-500 rounded-full">Explore Now</button>

                            <button className="btn bg-green-500 rounded-full">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <RecipesHeader></RecipesHeader>
            <Recipes></Recipes>
            <Recipe></Recipe>

        </div>


    );
};

export default Header;