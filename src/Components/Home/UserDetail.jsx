import React from "react";

const UserDetail = ({ user, setUserDetail }) => {
  const HandleOnclick = () => {
    setUserDetail({});
  };
  if (Object.getOwnPropertyNames(user).length !== 0) {
    return (
      <div className="w-full h-full fixed z-10 block top-0 left-0 bg-white">
        <div className="flex font-bold text-xl pl-28 pt-10 relative ">
          <i
            class="fa fa-arrow-left absolute top-11 cursor-pointer"
            onClick={HandleOnclick}
          ></i>
          <div className="pl-10">Back</div>
        </div>
        <div className="m-10 pl-28 pt-10">
          <div className="w-2/5 flex">
            <img
              src={user.thumbnailUrl}
              alt=""
              className="rounded-full h-16 my-auto "
            />
            <div className="ml-10 my-auto">
              <div className="w-full text-2xl font-bold">{user.name}</div>
            </div>
          </div>
          <div className="mt-10 mb-5 text-xl font-bold text-left">
            General Information
          </div>
          <div className="flex text-left my-8">
            <div className="w-1/2">
              <div className="font-normal text-gray-400">
                Cardholder Customer ID
              </div>
              <div className="font-bold">#{user.id}</div>
            </div>
            <div className="w-1/2">
              <div className="font-normal text-gray-400">Cardholder Code</div>
              <div className="font-bold">{user.address.zipcode}</div>
            </div>
          </div>
          <div className="flex text-left">
            <div className="w-1/2">
              <div className="font-normal text-gray-400">
                Cardholder Address
              </div>
              <div className="font-bold">
                {user.address.suite +
                  ", " +
                  user.address.street +
                  " Street, " +
                  user.address.city}
              </div>
            </div>
            <div className="w-1/2">
              <div className="font-normal text-gray-400">
                Cardholder Date Of Birth
              </div>
              <div className="font-bold">4/3/1992</div>
              {/* Do không có date of birth trong api nên em set cứng */}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="hidden"></div>;
  }
};

export default UserDetail;
