import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import EventUserItem from './EventUserItem';
import DeleteBtn from '../elements/DeleteBtn';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useAxios } from '../utils/axiosUtil';
import AddUser from '../components/AddUser';

const EventUserManagement = () => {

  const axios = useAxios();
  const [users, setUsers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/getEventUser/' + id)
      setUsers(result.data);
    }
    fetchData();
  }, [])

  return (
    <Box>
      <Grid container>
        <AddUser />
        {users.map(e => {
          return (
            <>
            <Grid item xs={6}
              key={e.id}
            >
              <EventUserItem user={e} />
            </Grid>
            <Grid item xs={2}>
              <DeleteBtn
                endpoint={'/eventUser'}
                id={e.id}
                label={'参加キャンセル'}
                forward={`/eventDetail/${id}/userList/`}
              />
            </Grid>
            </>
          )
        })}
      </Grid>
    </Box>
  )
}

export default EventUserManagement;