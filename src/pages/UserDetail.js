import Container from '@mui/material/Container';
import UserDetailItem from '../components/UserDetailItem';
import JoinEvents from '../components/JoinEvents';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useAxios } from '../utils/axiosUtil';
import Grid from '@mui/material/Grid';
import DeleteBtn from '../elements/DeleteBtn';

const UserDetail = () => {

  const axios = useAxios();
  const { id } = useParams();
  const [user, setUser] = useState({user_category:{}});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/user/' + id);
      setUser(result.data);
    }
    fetchData();
  }, [])

	return (
    <Container maxWidth={'lg'}>
      <UserDetailItem 
        user={user}
      />
      <Grid item xs={4}>
      <DeleteBtn 
        endpoint={'/user'}
        id={id}
        forward={'/userManagement'}
      />
      </Grid>
      <JoinEvents 
        id={id}
      />
    </Container>
	)
}

export default UserDetail;