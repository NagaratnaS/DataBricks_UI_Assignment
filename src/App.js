import Header from "./Header/Header";
import SideNavBar from "./SideNavBar/SideNavBar";
import ComparisonContainer from "./ComparisonContainer/ComparisonContainer";

function App() {
  return (
    <div style = {{ backgroundColor : '#f6f4f4' , minHeight: '100vh' , maxHeight: '1000vh'}}>

        <div style={{display: 'block'}}>
          <SideNavBar/>
          <Header/>
        </div>
        
        <ComparisonContainer/>
      
    </div>
  );
}

export default App;
