//Css applied to all components here using index.css

import Navbar from './Navbar.js';
import Home from './Home.js';

function App() {
  return (
    <div className="App">
      <Navbar />    {/* This can also be <Navbar></Navbar> */}
      
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
