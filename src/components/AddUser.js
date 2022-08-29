import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import RegisterBtn from '../elements/RegistBtn';
import { useAxios } from '../utils/axiosUtil';
import { useParams } from "react-router-dom";

const AddUser = () => {

  const axios = useAxios();
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState('');

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/getUserList');
      setUsers(result.data);
    }
    fetchData();
  }, [])

  return (
    <Grid item xs={12}>
      <FormControl sx={{
        width: 200,
      }}>
        <InputLabel>ユーザー</InputLabel>
        <Select
          required
          name={'user'}
          label="ユーザー"
          onChange={(e) => {
            setUserId(e.target.value)
          }}
        >
         {users.map(e => {
          return (
            <MenuItem
              value={e.id}
              key={e.id}
            >
              {e.name}
            </MenuItem>
          );
        })}
        </Select>
      </FormControl>

      <RegisterBtn 
        endpoint={'/eventUser'}
        mode={'new'}
        validation={() => true}
        data={{
          user_id: userId,
          event_id: id,
          companions: [],
        }}
      />

    </Grid>
  )
}

export default AddUser;