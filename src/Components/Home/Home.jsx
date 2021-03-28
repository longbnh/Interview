import React, { useState } from "react";
import Content from "./Content";
import Table from "./Table";
import UserDetail from "./UserDetail";

const Home = ({ data }) => {
  const user = data;
  const [searchValue, setSearchValue] = useState("");
  const [userDetail, setUserDetail] = useState({});

  return (
    <div>
      <Content setSearchValue={setSearchValue} />
      <Table data={user} search={searchValue} setUserDetail={setUserDetail} />
      <UserDetail user={userDetail} setUserDetail={setUserDetail} />
    </div>
  );
};

export default Home;
