import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

const EventUserItem = (props) => {
  return (
    <Box
      sx={{
        m: 2,
        p: 2,
        border: '1px solid grey',
        borderRadius: '5px',
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
        <Grid item xs={12}>
          ユーザーステータス：{props.user.status_name}
        </Grid>
        <Grid item xs={12}>
          参加ステータス：{props.user.event_status_name}
        </Grid>
      </Grid>
    </Box>
  )
}

export default EventUserItem;