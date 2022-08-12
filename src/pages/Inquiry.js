import Container from '@mui/material/Container';
import ContactForm from '../forms/ContactForm';
import Grid from '@mui/material/Grid';

const Inquiry = () => {
  return (
    <Container maxWidth={'lg'}>
      <Grid container spacing={5}>
        <ContactForm />
      </Grid>
    </Container>
  )
}

export default Inquiry;