import React from "react";
// import "../../style.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

const styles = {
  heading: {
    "backgroundColor": "orange",
    "backgroundImage": "linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.7)), url(assets/images/header-background.jpg)",
    "backgroundRepeat": "repeat",
    "backgroundSize": "cover",
  },

  title: {
    "color": "black",
  },

  subTitle: {
    "fontSize": "30px",
    "color": "black",
  }


}


function Header() {
  return (
    <header className="header" style={styles.heading} >
      <h1 style={styles.title}>React Memory Game</h1>
      <h2 style={styles.subTitle}>March Madness isn't over yet. Can you remember the last team you chose? </h2>
    </header>
  );
}

export default Header;
