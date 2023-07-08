import React from "react";
import NavigationBar from "./NavigationBar";
import ImageCard from "./ImageCard";
import TextBlock from "./TextBlock";

function Homepage() {

  const hometext = "this is the page where you are going to do all your shopping from now onwards"

  return (
    <div className="homepage">
      <NavigationBar />
      <h1>Home Page</h1>
      <ImageCard content="https://cdn-icons-png.flaticon.com/512/825/825575.png" altText="Buy items"/>
      <TextBlock text={hometext} />
    </div>
  );
}

export default Homepage;
