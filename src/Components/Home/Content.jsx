import React from "react";

const Content = (param) => {
  const HandleOnClick = () => {
    let search = document.getElementById("q").value;
    param.setSearchValue(search);
  };

  return (
    <div className="h-28 border-gray-300 bg-gray-300 flex w-11/12 mx-auto rounded-lg mt-10">
      <div className="h-12 my-auto flex justify-between w-full rounded-lg relative">
        <input
          id="q"
          type="text"
          placeholder="Search"
          className="outline-none ml-4 w-5/6 rounded-lg pl-10"
        />
        <i className="fa fa-search absolute left-6 top-4 opacity-50"></i>
        <button
          className="focus:outline-none bg-gray-400 rounded-lg mr-5 w-40"
          onClick={HandleOnClick}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Content;
