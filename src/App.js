import './App.css';
import TableOfProducts from './components/TableOfProducts';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
    </div>
    <div><TableOfProducts/></div>
    </>
  );
}

export default App;
