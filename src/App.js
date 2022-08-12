import './App.css';
import Navbar from './Component/Navbar';
import Box from './Component/Box';
import Middle from './Component/Middle';
import Footer from './Component/Footer';

function App() {
  return (
    <div className='App'>
     <Navbar/> 
     <Box />
     <Middle/>
     <Footer />
    </div>
  );
}

export default App;
