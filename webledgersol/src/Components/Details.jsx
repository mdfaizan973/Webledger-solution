import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";
import { Link as RouterLink } from "react-router-dom";
export default function Details() {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();

  const Base_url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=9afc3e70fb82460a9e18aa8e2cfaf9fe`;

  useEffect(() => {
    axios
      .get(Base_url)
      .then((res) => setRecipe(res.data)) // Set the fetched recipe data to the state
      .catch((err) => console.error(err));
  }, [id, Base_url]);
  console.log(recipe);
  return (
    <div>
      <div className="bg-white-500 shadow-md  p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold flex items-center ">
            <RouterLink to="/">
              <img
                src="https://webledger.in/wp-content/uploads/2023/01/logo.png"
                alt="Logo"
                className="h-8 w-50 mr-2"
              />
            </RouterLink>
          </div>

          <button className="text-white text-sm font-semibold bg-pink-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">
            Favourite
          </button>
        </div>
      </div>
      <DetailsCard recipeDetails={recipe} />
    </div>
  );
}
