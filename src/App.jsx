import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Recette from './pages/Recette'; // <-- AJOUT ICI
import RecetteDetails from './components/RecetteDetails';
import Home from './pages/Home';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
  <Navbar />
  <main className="flex-grow">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recette" element={<Recette />} />
      <Route path="/recette/:id" element={<RecetteDetails />} />
    </Routes>
  </main>
  <Footer />
</div>

  );
}

export default App;
