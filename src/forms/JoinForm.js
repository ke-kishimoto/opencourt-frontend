import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from "react";
import BasicUserForm from './BasicUserForm';
import { useRecoilValue } from 'recoil';
import { getUser } from '../states/selectors/userSelector';
import RegiterBtn from '../elements/RegistBtn';
import { useParams } from "react-router-dom";

const JoinForm = () => {

  const { id } = useParams();
  const [companions, setCompanions] = useState([]);
  const [remark, setRemark] = useState('');
  const user = useRecoilValue(getUser);
  const companion = {
    name: '', gender: '', category: '',
  };

  const validation = () => {
    return true;
  }

  return (
    <Box>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography>参加フォーム</Typography>
        </Grid>
        <BasicUserForm 
         user={user}
         disabled={true}
        />
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="メールアドレス"
            variant="outlined"
            disabled={true}
            value={user.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="備考"
            variant="outlined"
            onChange={(e) => {setRemark(e.target.value)}}
          />
        </Grid>
        {companions.map(e => {
          return (
            <BasicUserForm 
              disabled={false}
              user={{}}
            />
          )
        })}
        <Grid item xs={2}>
          <Button
            variant="outlined"
            onClick={() => {setCompanions(companions.concat(companion))}}
          >
            同伴者追加
						</Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="outlined"
            color="error"
            onClick={() => {setCompanions(companions.slice(0,-1))}}
          >
            同伴者削除
						</Button>
        </Grid>
        <Grid item xs={12}>
          <RegiterBtn 
            mode={'new'}
            endpoint={'/eventUser'}
            validation={validation}
            data={{
              event_id: id,
              user_id: user.id,
              remark: remark,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default JoinForm;