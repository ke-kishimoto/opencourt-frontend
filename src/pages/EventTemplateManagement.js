import Grid from '@mui/material/Grid';
import SearchForm from '../forms/SearchForm';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useAxios } from "../utils/axiosUtil";
import { useState, useEffect } from 'react';
import EventTemplateItem from '../components/EventTemplateItem';

const EventTemplateManagement = () => {

  const axios = useAxios();
  const navigate = useNavigate();
  const [templates, setTemplate] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/getAlleventTemplate');
      setTemplate(result.data);
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
        onClick={() => { navigate('/newEventTemplate') }}
      >
      新規登録
      </Button>
      <Grid container spacing={5} marginTop={5}>
      {templates.map(e => {
        return (
          <Grid item xs={12}
            key={e.id}
          >
          <EventTemplateItem 
            template={e}
          />
          </Grid>
        )
        })}
      </Grid>
		</Container>
	)
}

export default EventTemplateManagement;