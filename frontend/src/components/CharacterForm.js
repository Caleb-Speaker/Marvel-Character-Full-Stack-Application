import { Form, Button, Alert, Spinner } from 'react-bootstrap';

function CharacterForm({ formData, setFormData, onSubmit, loading, error }) {
  return (
    <Form onSubmit={onSubmit}>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Alias</Form.Label>
        <Form.Control required value={formData.alias} onChange={e => setFormData({ ...formData, alias: e.target.value })} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Alignment</Form.Label>
        <Form.Control required value={formData.alignment} onChange={e => setFormData({ ...formData, alignment: e.target.value })} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Powers</Form.Label>
        <Form.Control required value={formData.powers} onChange={e => setFormData({ ...formData, powers: e.target.value })} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Image URL</Form.Label>
        <Form.Control required value={formData.image_url} onChange={e => setFormData({ ...formData, image_url: e.target.value })} />
      </Form.Group>
      <Button type="submit" disabled={loading}>
        {loading ? <Spinner animation="border" size="sm" /> : 'Submit'}
      </Button>
    </Form>
  );
}

export default CharacterForm;