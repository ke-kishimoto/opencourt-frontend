import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { useAxios } from '../utils/axiosUtil';
import { Link } from "react-router-dom";

const News = () => {

  const axios = useAxios();

  const [news, setNews] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/getNewNews');
      setNews(result.data);
    }
    fetchData();
  }, [])

	return (
    <Box
    sx={{
      p: 2,
      border: 'solid 1px #f08a24',
      borderRadius: 3,
    }}
    >
      <Typography>お知らせ</Typography>
      <Link to="/" >{news.title}</Link>
    </Box>
	)
}

export default News;