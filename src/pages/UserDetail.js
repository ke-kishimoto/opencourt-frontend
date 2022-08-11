import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Container from '@mui/material/Container';

const UserDetail = () => {
	return (
    <Container maxWidth={'lg'}>
      <Grid container spacing={3} margin={5}>
        <Grid item xs={12}>
          <Avatar>U</Avatar>
        </Grid>
        <Grid item xs={12}>
          <Typography>名前：xxxx xxxx</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>メールアドレス：xxxxxxxx@gmail.com</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>性別：xxxxxx</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>カテゴリ：xxxxxx</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>自己紹介：</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>ステータス：xxxxxxx</Typography>
        </Grid>
      
        <Grid item xs={12}>
          <Typography>権限：xxxxxxxxxxxxxx</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>参加イベント数：xxx</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>参加予定イベントリスト</Typography>
        </Grid>
      </Grid>
    </Container>
	)
}

export default UserDetail;