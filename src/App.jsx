import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import AddBeerPage from "./pages/AddBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import Navbar from "./components/Navbar";

function App() {

  const [beers, setBeers] = useState([])

  useEffect(() => {

    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then((results) => {
        console.log("Beers", results.data)
        setBeers(results.data)
      })
      .catch((err) => {
        console.log(err)
      })

  }, [])

  const handleAddBeer = (newBeer) => {
    setBeers([...beers, newBeer]);
  };

  return (
    <div className="App">
      <h1>LAB | React IronBeers</h1>
      <Navbar/>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeersPage beers={beers} />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<AddBeerPage handleAddBeer={handleAddBeer}/>} />
        <Route path="/beers/:beerId" element={<BeerDetailsPage beers={beers}/>} />

      </Routes>
    </div>
  );
}

export default App;
