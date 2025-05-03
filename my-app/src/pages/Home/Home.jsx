import React from "react";
import "./home.scss";
import Navbar from "../../companent/navbar/Navbar";
import Featured from "../../companent/featured/Featured";
import List from "../../companent/list/List";

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <Featured type="movie" />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
