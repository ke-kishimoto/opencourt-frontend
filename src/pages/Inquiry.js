import Container from '@mui/material/Container';
import ContactForm from '../forms/ContactForm';
import Grid from '@mui/material/Grid';
import RegistBtn from '../elements/RegistBtn'

const Inquiry = () => {
  return (
    <Container maxWidth={'lg'}
      sx={{
        minHeight: 650,
      }}
    >
      <Grid container spacing={5}>
        <ContactForm />
        <Grid item sx={12}>
          <RegistBtn 
          mode='new'
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Inquiry;