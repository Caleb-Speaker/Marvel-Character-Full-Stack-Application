import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Spinner, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CharacterListPage() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const res = await axios.get('http://localhost:5000/characters');
        setCharacters(res.data);
      } catch (err) {
        setError('Failed to fetch characters');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div className="container mt-4 mb-5">
      <h2 className="mb-4">All Characters</h2>
      {loading && <Spinner animation="border" />}
      {error && <Alert variant="danger">{error}</Alert>}
      <div className="row">
        {characters.map((char) => (
          <div key={char.id} className="col-md-4 mb-4">
            <Card>
              <Card.Img variant="top" src={char.image_url} />
              <Card.Body>
                <Card.Title>{char.name}</Card.Title>
                <Card.Text>{char.alias}</Card.Text>
                <Link to={`/characters/${char.id}`}>
                  <Button variant="primary">View Character</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharacterListPage;