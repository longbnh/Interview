import React from "react";

const Table = ({ data, search, setUserDetail }) => {
  let users = data;
  if (search !== "") {
    users = users.map((item) => {
      if (item.name.includes(search)) {
        return item;
      }
      return null;
    });
  } else {
    users = data;
  }

  const HandleOnClick = (item) => {
    setUserDetail(item);
  };

  return (
    <div>
      <div className="flex w-11/12 mx-auto text-left py-4">
        <div className="font-bold w-2/5 ">Name</div>
        <div className="font-bold w-2/5">Username</div>
        <div className="font-bold w-1/5">Email</div>
      </div>
      {users.map((item, key) => {
        if (item !== null) {
          return (
            <div
              key={key}
              className="flex w-11/12 justify-between mx-auto text-left my-8 focus:bg-gray-400 cursor-pointer"
              onClick={() => HandleOnClick(item)}
            >
              <div className="w-2/5 flex">
                <img
                  src={item.thumbnailUrl}
                  alt=""
                  className="rounded-full h-14 my-auto ml-10"
                />
                <div className="ml-6">
                  <div className="w-full text-xl">{item.name}</div>
                  <div className="">#{item.id}</div>
                </div>
              </div>
              <div className="w-2/5 my-auto text-lg">{item.username}</div>
              <div className="w-1/5 my-auto text-lg">{item.email}</div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Table;
