
import React from "react";
import Background from "./components/Bg";
import Projects from "./components/Projects";




const Home: React.FC = () => {


  return (
    <>
      <Background children={<Projects />} />


    </>
  );
};

export default Home;
