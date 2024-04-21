import './App.css';
import Home from './Home/Home.jsx';
import Parents from './Pages/Parents.jsx';
import Preschooler from './Pages/Preschoolers.jsx';
import Teacher from './Pages/Teachers.jsx';
import Footer from './Footer/Footer.jsx';

function App() {
  return (
    <div>
      <Home/>
      <Parents/>
      <Preschooler/>
      <Teacher/>
      <Footer/>
    </div>
  );
}

export default App;
