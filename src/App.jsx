import React from "react";
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header.jsx';

import Home from "./components/Pages/Home/Home.jsx";
import Destinations from "./components/Pages/Destinations/Destinations.jsx";
import Trips from "./components/Pages/Trips/Trips.jsx";
import Contacts from "./components/Pages/Contacts/Contacts.jsx";

function App() { 
  return (
    <React.Fragment>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Destinations" element={<Destinations/>}/>
      <Route path="/Trips" element={<Trips/>}/>
      <Route path="/Contacts" element={<Contacts/>}/>
      </Routes>
  </React.Fragment>
  )
  
}
export default App;