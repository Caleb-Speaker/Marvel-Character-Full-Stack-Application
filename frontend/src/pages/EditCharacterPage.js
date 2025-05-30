import { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterForm from '../components/CharacterForm';
import { useParams, useNavigate } from 'react-router-dom';

function EditCharacterPage() {
  const { id } = useParams();
  const [formData, setFormData] = useState({ name: '', alias: '', alignment: '', powers: '', image_url: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/characters/${id}`);
        setFormData(res.data);
      } catch {
        setError('Failed to load character');
      } finally {
        setLoading(false);
      }
    };
    fetchCharacter();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/characters/${id}`, formData);
      navigate(`/characters/${id}`);
    } catch {
      setError('Failed to update character');
    }
  };

  return (
    <CharacterForm
      formData={formData}
      setFormData={setFormData}
      onSubmit={handleSubmit}
      loading={loading}
      error={error}
    />
  );
}

export default EditCharacterPage;