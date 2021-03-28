import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "../Components/Home/Home";

const Homepage = () => {
  const [data, setData] = useState([]);
  let user = [];
  useEffect(() => {
    function getUser() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          user = response.data;
        })
        .then(
          axios
            .get(" https://jsonplaceholder.typicode.com/albums/1/photos")
            .then((response) => {
              let album = response.data;
              let fullData = user.map((item) => {
                let pic = album.find((pic) => pic.id === item.id);
                if (pic) {
                  return { ...pic, ...item };
                }
              });
              setData(fullData);
            })
        )
        .catch((error) => console.log(error));
    }
    getUser();
  }, []);
  return (
    <div>
      <Home data={data} />
    </div>
  );
};

export default Homepage;
