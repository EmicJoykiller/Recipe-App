
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Auth } from './pages/auth';
import { CreateRecipe } from './pages/create-recipe';
import { SavedRecipe } from './pages/saved-recipe';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Auth />} />
          <Route path='/' element={<CreateRecipe />} />
          <Route path='/' element={<SavedRecipe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;