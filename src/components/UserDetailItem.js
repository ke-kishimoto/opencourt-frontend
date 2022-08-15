import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

const UserDetailItem = (props) => {

  return (
    <Box>
      <Grid container spacing={3} margin={5}>
        <Grid item xs={1}>
          <Avatar>U</Avatar>
        </Grid>
        <Grid item xs={5}>
          <Typography>名前：{props.user.name}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>性別：{props.user.gender_name}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>カテゴリ：{props.user.user_category.category_name}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>メールアドレス：{props.user.email}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>権限：{props.user.role_name}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>ステータス：{props.user.status_name}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>自己紹介：{props.user.description}</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default UserDetailItem;