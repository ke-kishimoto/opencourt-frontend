import Container from '@mui/material/Container';
import SearchForm from '../forms/SearchForm';
import UserItem from '../components/UserItem';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { useAxios } from '../utils/axiosUtil';

const UserManagement = () => {
  
  const axios = useAxios();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchDate = async () => {
      const result = await axios.get('/getUserList');
      setUsers(result.data);
    }
    fetchDate();
  }, [])

  return (
    <Container maxWidth={'lg'} sx={{minHeight: 650}}>
      <SearchForm />
      <Button
        variant="outlined"
      >
      新規登録
      </Button>
      {users.map(e => {
      return (
        <UserItem 
          key={e.id}
          user={e} 
        />
      )
    })}
    </Container>
  )
}
export default UserManagement;