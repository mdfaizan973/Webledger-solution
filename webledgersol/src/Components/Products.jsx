import ProductsCard from "./ProductsCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link as RouterLink } from "react-router-dom";
import Loading from "./Loading";
export default function Products() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("checken");
  const [load, setLoad] = useState(false);
  const Base_url =
    "https://api.spoonacular.com/recipes/random?number=20&apiKey=9afc3e70fb82460a9e18aa8e2cfaf9fe";
  const fetchRecipe = (search = "") => {
    setLoad(true);
    let url = `${Base_url}`;
    if (search) {
      url += `&query=${search}`;
    }
    axios
      .get(url)
      .then((res) => {
        setData(res.data.recipes);
        setLoad(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchRecipe(search);
  }, [search]);
  console.log(data);
  return (
    <div>
      <div className="bg-white-500 shadow-md p-4">
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

          <div className="relative flex items-center">
            <input
              className="border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search recipes..."
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
              <svg
                className="text-gray-600 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  className="heroicon-ui"
                  d="M10 0a10 10 0 0 1 10 10c0 5.522-4.477 10-10 10-5.522 0-10-4.478-10-10 0-5.523 4.478-10 10-10zm0 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
                ></path>
                <path
                  className="heroicon-ui"
                  d="M15.293 15.293a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414z"
                ></path>
              </svg>
            </button>
          </div>
          <button className="text-white text-sm font-semibold bg-pink-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">
            Favourite
          </button>
        </div>
      </div>
      {load ? <Loading /> : <ProductsCard recipesdata={data} />}
    </div>
  );
}
