import logo from './logo.svg';
import './App.css';
import RecipeFinder from'./RecipeFinder';
import './css/style.css';
import FryingPan from './FryingPan';
import Footer from './footer'
import './css/footer.css';





function App() {
  return (
    <div className="App">
      <RecipeFinder/>
      <FryingPan/>  
      <h1>You haven't Search anything</h1>
      <Footer/>
      
    </div>
  );
}

export default App;
