import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Recette from './pages/Recette'; // <-- AJOUT ICI
import RecetteDetails from './components/RecetteDetails';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/recette" element={<Recette />} /> {/* <-- AJOUT ICI */}
          <Route path="/recette/:id" element={<RecetteDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
