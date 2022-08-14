import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import JoinCancelBtn from '../elements/JoinCancelBtn';

const JoinCancelForm = () => {
  return (
    <Box>
			<Grid container spacing={5}>
				<Grid item xs={12}>
          <Typography>キャンセルフォーム</Typography>
        </Grid>
				<Grid item xs={12}>
          <TextField
            fullWidth
            label="メールアドレス"
            variant="outlined"
          />
        </Grid>
				<Grid item xs={10}/>
				<Grid item xs={2}>
        <JoinCancelBtn />
        </Grid>
      </Grid>
    </Box>
  )
}

export default JoinCancelForm;