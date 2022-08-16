import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

const EventUserItem = () => {
  return (
    <Box
      sx={{
        maxHeight:'50%',
      }}
    >
      <Grid container>
        <Grid item xs={1}>
          <Avatar>{props.user.name.substring(0,1)}</Avatar>
        </Grid>
        <Grid item xs={2}>
          {props.user.name}
        </Grid>
        <Grid item xs={2}>
          {props.user.gender_name}
        </Grid>
        <Grid item xs={2}>
          {props.user.user_category.category_name}
        </Grid>
        <Grid item xs={5}/>
        <Grid item xs={1}/>
        <Grid item xs={2}>
          ユーザーステータス：{props.user.status_name}
        </Grid>
        <Grid item xs={2}>
          参加ステータス：{props.user.event_status_name}
        </Grid>
      </Grid>
    </Box>
  )
}

export default EventUserItem;