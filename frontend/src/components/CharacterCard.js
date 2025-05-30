import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function CharacterCard({ character, onDelete }) {
  const navigate = useNavigate();

  return (
    <Card>
      <Card.Img variant="top" src={character.image_url} />
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Text>{character.alias}</Card.Text>
        <Button variant="primary" onClick={() => navigate(`/characters/${character.id}`)}>View</Button>{' '}
        <Button variant="warning" onClick={() => navigate(`/edit/${character.id}`)}>Edit</Button>{' '}
        <Button variant="danger" onClick={() => onDelete(character.id)}>Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default CharacterCard;