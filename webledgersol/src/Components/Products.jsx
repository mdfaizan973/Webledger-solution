import ProductsCard from "./ProductsCard";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Products() {
  const [data, setData] = useState([]);
  // const [searchKeyword, setSearchKeyword] = useState("");
  // const [selectedDiet, setSelectedDiet] = useState("");
  const Base_url =
    "https://api.spoonacular.com/recipes/random?number=20&apiKey=5c518d49481941d4a8f204a0680f05f9";

  const fetchRecipe = (keyword = "", diet = "") => {
    let url = `${Base_url}`;

    if (keyword) {
      url += `&query=${keyword}`;
    }

    if (diet) {
      url += `&diet=${diet}`;
    }

    axios
      .get(url)
      .then((res) => setData(res.data.recipes))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchRecipe();
  }, []);
  return (
    <div>
      <ProductsCard recipesdata={data} />
    </div>
  );
}
