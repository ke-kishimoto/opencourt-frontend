import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const ContactForm = () => {

  return (
    <>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="タイトル"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          multiline
          rows={5}
          label="内容"
          variant="outlined"
        />
      </Grid>
    </>
  )


}

export default ContactForm;