import { Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import HomePage from './pages/HomePage';
import CharacterListPage from './pages/CharacterListPage';
import CreateCharacterPage from './pages/CreateCharacterPage';
import EditCharacterPage from './pages/EditCharacterPage';
import CharacterDetailPage from './pages/CharacterDetailPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharacterListPage />} />
        <Route path="/characters/:id" element={<CharacterDetailPage />} />
        <Route path="/create" element={<CreateCharacterPage />} />
        <Route path="/edit/:id" element={<EditCharacterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;