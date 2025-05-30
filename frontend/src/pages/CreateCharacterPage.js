import { useState } from 'react';
import axios from 'axios';
import CharacterForm from '../components/CharacterForm';
import { useNavigate } from 'react-router-dom';

function CreateCharacterPage() {
  const [formData, setFormData] = useState({ name: '', alias: '', alignment: '', powers: '', image_url: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/characters', formData);
      navigate('/characters');
    } catch (err) {
      setError('Failed to create character');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <CharacterForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default CreateCharacterPage;