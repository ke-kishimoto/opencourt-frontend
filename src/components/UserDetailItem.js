import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useAxios } from '../utils/axiosUtil';

const UserDetailItem = () => {

  const axios = useAxios();
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchDate = async () => {
      const result = await axios.get('/user/' + id);
      setUser(result.data);
    }
    fetchDate();
  }, [])
  return (
    <Box>
      <Grid container spacing={3} margin={5}>
        <Grid item xs={1}>
          <Avatar>U</Avatar>
        </Grid>
        <Grid item xs={5}>
  <Typography>名前：{user.name}</Typography>
        </Grid>
        <Grid item xs={3}>
  <Typography>性別：{user.gender_name}</Typography>
        </Grid>
        <Grid item xs={3}>
  <Typography>カテゴリ：{user.user_category.category_name}</Typography>
        </Grid>
        <Grid item xs={12}>
  <Typography>メールアドレス：{user.email}</Typography>
        </Grid>
        <Grid item xs={6}>
  <Typography>権限：{user.role_name}</Typography>
        </Grid>
        <Grid item xs={6}>
  <Typography>ステータス：{user.status_name}</Typography>
        </Grid>
        <Grid item xs={12}>
  <Typography>自己紹介：{user.description}</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default UserDetailItem;