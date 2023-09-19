import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
export default function ProductsCard(recipesdata) {
  const data = recipesdata.recipesdata;
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favitem")) || []
  );
  const handlefav = (recipe) => {
    const isAlreadyInFavorites = favorites.some((fav) => fav.id === recipe.id);
    if (!isAlreadyInFavorites) {
      const newFavorites = [...favorites, recipe];
      setFavorites(newFavorites);
      localStorage.setItem("favitem", JSON.stringify(newFavorites));
    }
  };

  return (
    <div className="mt-10">
      <div className="min-h-screen  grid grid-cols-4 gap-4 items-center">
        {data &&
          data.map((ele, i) => (
            <div
              key={i}
              className="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
            >
              <img className="rounded-xl" src={ele.image} alt="" />
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="mt-5 text-xl font-semibold">
                    {ele.title.substring(0, 10)}...
                  </h1>
                  <p className="mt-2">{ele.pricePerServing} ₹</p>
                </div>
                <div>
                  <button
                    onClick={() => handlefav(ele)}
                    className="text-white text-sm font-semibold bg-pink-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110"
                  >
                    {favorites.some((fav) => fav.id === ele.id)
                      ? "Favorited"
                      : "Favorite"}
                  </button>
                </div>
                <div>
                  <RouterLink to={`/products/${ele.id}`}>
                    <button className="text-white text-sm font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110">
                      View
                    </button>
                  </RouterLink>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
