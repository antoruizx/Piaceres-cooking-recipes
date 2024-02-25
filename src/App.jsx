import Navbar2 from './components/Navbar2';
import Carrousel from './components/Carrousel';
import Footer from './components/Footer';
import Recetas from './pages/Recetas';
import Top10 from './pages/Top10';
import Comunidad from './pages/Comunidad';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Carrousel />} />
        <Route path='/recetas' element={<Recetas />} />
        <Route path='/top10' element={<Top10 />} />
        <Route path='/comunidad' element={<Comunidad />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
