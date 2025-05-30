import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Button, Spinner, Alert } from 'react-bootstrap';

function CharacterDetailPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/characters/${id}`);
        setCharacter(res.data);
      } catch (err) {
        setError('Failed to fetch character');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/characters/${id}`);
      navigate('/characters');
    } catch (err) {
      setError('Failed to delete character');
    }
  };

  if (loading) return <div className="container mt-4"><Spinner animation="border" /></div>;
  if (error) return <div className="container mt-4"><Alert variant="danger">{error}</Alert></div>;

  return (
    <div className="container mt-4 mb-5">
      <Card>
        <Card.Img variant="top" src={character.image_url} />
        <Card.Body>
          <Card.Title>{character.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{character.alias}</Card.Subtitle>
          <Card.Text><strong>Alignment:</strong> {character.alignment}</Card.Text>
          <Card.Text><strong>Powers:</strong> {character.powers}</Card.Text>
          <Button variant="danger" onClick={handleDelete} className="me-2">Delete</Button>
          <Button variant="secondary" onClick={() => navigate(`/edit/${character.id}`)}>Edit</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CharacterDetailPage;