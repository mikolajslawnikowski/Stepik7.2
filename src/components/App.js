import React, { Component } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Article from "./Article";
import Section from "./Section";
import data from "../data/data.json";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <Article />
        <Section data={data}></Section>
        <Footer />
      </div>
    );
  }
}

export default App;
