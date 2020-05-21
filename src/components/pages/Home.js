import React, { Fragment } from "react";
import Search from "../business/Search";
import Businesses from "../business/Businesses";

const Home = () => {
  return (
    <Fragment>
      <Search/>
      <Businesses/>
    </Fragment>
  );
};

export default Home;
