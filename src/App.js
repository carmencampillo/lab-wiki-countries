import "./App.css";
import NavBar from "./components/Navbar";
import CountryDetails from "./components/CountryDetails";
import CountriesList from "./components/CountriesList";
import { Route,Routes } from 'react-router-dom'

function App() {
  return <div className="App">
    <NavBar/>
<Routes>
  <Route path= "/Country-details" element= {<CountryDetails/>}/>
</Routes>
    <CountriesList/>

  </div>;
}


export default App;