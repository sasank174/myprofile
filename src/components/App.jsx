import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import Contact from "./Contact";
import Logos from "./Logos";
// import Loader from "./Loader";

function App() {

  return (
    <div>
      {/* <Loader /> */}
      <h1 className="bname">SASANK</h1>
      <Header />
      <Home />
      <About />
      <Profile />
      <Contact />
      <Logos />
      <Footer /> 
    </div>
  );
}

export default App;
