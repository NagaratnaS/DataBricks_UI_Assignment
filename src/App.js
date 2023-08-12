import Header from "./Header/Header";
import ComparisonContainer from "./ComparisonContainer/ComparisonContainer";

function App() {
  return (
    <div style = {{ backgroundColor : '#f6f4f4' , minHeight: '100vh' , maxHeight: '1000vh'}}>
      {/* <SideNavBar/> */}
      <Header/>
      <ComparisonContainer/>
    </div>
  );
}

export default App;
