import React from "react";
import NavigationBar from "./NavigationBar";
import ImageCard from "./ImageCard";

function Homepage() {


  
  const hometext = "this is the page where you are going to do all your shopping from now onwards"

  const size = { width: '400px', height:'400px'}

  

  return (
    <div className="homepage">
      <NavigationBar inStore={false} />
      <h1>Home Page</h1>
      <ImageCard content="https://cdn-icons-png.flaticon.com/512/825/825575.png" altText="Buy items" size={size}/>
      <p> {hometext} </p> 
    </div>
  );
}

export default Homepage;
