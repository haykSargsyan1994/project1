import AppRoutes from "./appRoutes/appRoutes";
import Home from "./components/home/home";
import Header from "./header/header";


function App() {
  return (
    <div className="App">
      <Header/>
      
      <AppRoutes/>
    </div>
  );
}

export default App;
