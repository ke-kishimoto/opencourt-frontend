import Container from '@mui/material/Container';
import UserDetailItem from '../components/UserDetailItem';
import JoinEvents from '../components/JoinEvents';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useAxios } from '../utils/axiosUtil';
import Grid from '@mui/material/Grid';
import DeleteBtn from '../elements/DeleteBtn';
import ChangeRole from '../components/ChangeRole';
import FetchData from '../components/FetchData';

const UserDetail = () => {

  const { id } = useParams();
  const [user, setUser] = useState({user_category:{}});

	return (
    <Container maxWidth={'lg'}>
      <FetchData 
        setData={setUser}
        endpoint={'/user'}
        id={id}
      />
      <UserDetailItem 
        user={user}
      />
      <Grid container>
        <ChangeRole 
          role={user.role_level}
          id={user.id}
        />
        <Grid item xs={4}>
          <DeleteBtn 
            endpoint={'/user'}
            id={id}
            forward={'/userManagement'}
          />
        </Grid>
      </Grid>
      <JoinEvents 
        id={id}
      />
    </Container>
	)
}

export default UserDetail;