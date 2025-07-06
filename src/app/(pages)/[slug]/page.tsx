import { Container } from '@mui/material';

export default function ArticlePage({ params }) {
  return (
    <Container maxWidth="lg">
      <div>
        <h1>Article Detail: {params.slug}</h1>
      </div>
    </Container>
  );
}
