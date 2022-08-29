import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DeleteBtn from '../elements/DeleteBtn';
import { useParams } from "react-router-dom";
import { useRecoilValue } from 'recoil';
import { getUser } from '../states/selectors/userSelector';

const JoinCancelForm = () => {

  const { id } = useParams();
  const user = useRecoilValue(getUser);

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
        <DeleteBtn 
          label={'キャンセル'}
          endpoint={'/eventUser'}
          id={0}
          data={{
            event_id: id,
            user_id: user.id,
          }}
        />
        </Grid>
      </Grid>
    </Box>
  )
}

export default JoinCancelForm;