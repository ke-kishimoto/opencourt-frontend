import Container from '@mui/material/Container';
import UserDetailItem from '../components/UserDetailItem';
import JoinEvents from '../components/JoinEvents';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useAxios } from '../utils/axiosUtil';

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
      <JoinEvents />
    </Container>
	)
}

export default UserDetail;