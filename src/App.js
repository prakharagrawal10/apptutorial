//Css applied to all components here using index.css
import './Navbar.js';
import Navbar from './Navbar.js';
import Content from './Content.js';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      {/* This can also be <Navbar></Navbar> */}
      <div className="content">
        <Content />
      </div>
    </div>
  );
}

export default App;
