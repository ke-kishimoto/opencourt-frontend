import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

const UserDetailItem = () => {
  return (
    <Box>
      <Grid container spacing={3} margin={5}>
        <Grid item xs={1}>
          <Avatar>U</Avatar>
        </Grid>
        <Grid item xs={5}>
          <Typography>名前：xxxx xxxx</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>性別：xxxxxx</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>カテゴリ：xxxxxx</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>メールアドレス：xxxxxxxx@gmail.com</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>権限：xxxxxxxxxxxxxx</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>ステータス：xxxxxxx</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>自己紹介：</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default UserDetailItem;