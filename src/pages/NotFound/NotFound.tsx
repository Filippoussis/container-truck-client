import { Link } from 'react-router-dom';
import { Button, Container, Stack, Typography } from '@mui/material';

export const NotFound = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        height: '100%',
        display: 'flex',
        paddingTop: '16px',
        paddingBottom: '16px',
      }}
    >
      <Stack component="section" sx={{ margin: 'auto' }}>
        <Typography variant="h4" component="h1" mb={3}>
          Упсс... 404
        </Typography>
        <Button variant="text">
          <Link to={'/'}>На главную</Link>
        </Button>
      </Stack>
    </Container>
  );
};
