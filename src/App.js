import Header from "./Header/Header";
import Comparison from "./Comparison/Comparison";
import SearchBar from "./SearchBar/SearchBar";
import SideNavBar from "./SideNavBar/SideNavBar";

function App() {
  return (
    <div style = {{backgroundColor : '#f6f4f4' , height: '601px'}}>
      <Header/>
      <Comparison/>
      <SearchBar/>
      {/* <SideNavBar/> */}
    </div>
  );
}

export default App;
