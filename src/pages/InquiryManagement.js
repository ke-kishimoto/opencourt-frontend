import Container from '@mui/material/Container';
import SearchForm from '../forms/SearchForm';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { useAxios } from '../utils/axiosUtil';

const InquiryManagement = () => {

  const axios = useAxios();
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/getInquiries');
      setInquiries(result.data);
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
      {inquiries.map(e => {
        return (
          <Box
            m={4}
            sx={{
              p: 1,
              border: '1px solid gray',
              borderRadius: 2,
              '&:hover': {
                backgroundColor: '#EEE',
                cursor: 'pointer',
              },
            }}
          >
            <Grid container>
              <Grid item xs={3}>
                <Typography>
                  ユーザー：{e.user.name}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography>
                  {e.event !== null ? '対象イベント：' + e.event.title : ''}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography>
                  対応状況：{e.status_name}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>件名：{e.title}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>内容：{e.content}</Typography>
              </Grid>
            </Grid>
          </Box>
        )
      })}

    </Container>
  )
}

export default InquiryManagement;