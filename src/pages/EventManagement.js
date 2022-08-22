import Container from '@mui/material/Container';
import SearchForm from '../forms/SearchForm';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useAxios } from "../utils/axiosUtil";
import { useState, useEffect } from 'react';
import EventItem from '../components/EventItem';
import Grid from '@mui/material/Grid';

const EventManagement = () => {

  const axios = useAxios();
  const navigate = useNavigate();
  
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/searchEvent');
      setEvents(result.data);
    }
    fetchData();
  }, [])

  return (
    <Container maxWidth={'lg'}
    sx={{
      minHeight: 650,
    }}
    >
      <SearchForm />
      <Button
        variant="outlined"
        onClick={() => { navigate('/newEvent') }}
      >
      新規登録
      </Button>
      <Grid container spacing={5} marginTop={5}>
      {events.map(e => {
        return (
          <Grid item xs={12}
            key={e.id}
          >
          <EventItem 
            event={e}
          />
          </Grid>
        )
        })}
      </Grid>
    </Container>
  )

}

export default EventManagement;