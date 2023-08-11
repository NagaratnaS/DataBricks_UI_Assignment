import Header from "./Header/Header";
import Comparison from "./Comparison/Comparison";
import SearchBar from "./SearchBar/SearchBar";
import SideNavBar from "./SideNavBar/SideNavBar";
import MonthlyComparison from "./Content/MontlyComparison/MonthlyComparison";
import OverallComparison from "./Content/OverallComparison/OverallComparison";

function App() {
  return (
    <div style = {{backgroundColor : '#f6f4f4' , height: 'auto'}}>
      {/* <SideNavBar/> */}
      <Header/>
      <Comparison/>
      <SearchBar/>
      <MonthlyComparison/>
      <OverallComparison/>
    </div>
  );
}

export default App;
