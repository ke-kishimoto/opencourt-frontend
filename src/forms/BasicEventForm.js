import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const BasicEventForm = () => {
  return (
    <>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="イベント名"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="イベント名略称"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="開催場所"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          type="number"
          label="人数"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          multiline
          rows={4}
          label="詳細"
          variant="outlined"
        />
      </Grid>
      </>
  )
}

export default BasicEventForm;