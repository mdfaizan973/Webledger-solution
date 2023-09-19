import { Link as RouterLink } from "react-router-dom";

export default function Favorites() {
  const storedData = localStorage.getItem("favitem");
  const localdata = JSON.parse(storedData);
  const deletedata = (index) => {
    const updatedData = [...localdata];
    updatedData.splice(index, 1);
    localStorage.setItem("favitem", JSON.stringify(updatedData));
    window.location.reload();
  };
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
          <RouterLink to="/favorites">
            <button className="text-white text-sm font-semibold bg-pink-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">
              Favourite
            </button>
          </RouterLink>
        </div>
      </div>
      {/* card */}
      <div className="grid grid-cols-5 gap-4 mt-5 justify-center">
        {localdata.map((ele, i) => (
          <div
            key={i}
            className="shadow-2xl bg-white max-w-xs rounded-lg font-mono"
          >
            <div className="rounded-2xl rounded-lg shadow-2xl m-4 mb-1">
              <img className="w-auto rounded-lg" src={ele.image} />
            </div>

            <div className="p-4 border-t-2 border-solid border-gray-200">
              <button
                onClick={() => deletedata(i)}
                className="font-mono shadow tracking-wider font-bold mx-2 uppercase bg-red-500 text-white py-1 px-3 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
