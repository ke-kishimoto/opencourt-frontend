import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {COLOR_STATUS_PARTICIPATED, 
  COLOR_STATUS_PARTICIPATED_WAITING, 
  COLOR_STATUS_AFFORD,
  COLOR_STATUS_FEW,
  COLOR_STATUS_WAITING,
  getStatusColorCode,} from '../utils/colorUtil';

const StatusColorGuide = () => {
  return (
    <>
    <Grid item xs={1.5}>
        <Typography>参加状況</Typography>
      </Grid>
      <Grid item xs={1.5}>
        <Box
          bgcolor={getStatusColorCode(COLOR_STATUS_PARTICIPATED)}
          sx={{
            paddingLeft: 1,
            color: '#FFF',
            fontWeight: 700,
            borderRadius: 1
          }}
        >
          参加登録済み
					</Box>
      </Grid>
      <Grid item xs={2.5}>
        <Box
          bgcolor={getStatusColorCode(COLOR_STATUS_PARTICIPATED_WAITING)}
          sx={{
            paddingLeft: 1,
            color: '#FFF',
            fontWeight: 700,
            borderRadius: 1
          }}
        >登録済(キャンセル待ち)
						</Box>
      </Grid>
      <Grid item xs={1.2}>
        <Typography>空き状況</Typography>
      </Grid>
      <Grid item xs={1.5}>
        <Box
          bgcolor={getStatusColorCode(COLOR_STATUS_AFFORD)}
          sx={{
            paddingLeft: 1,
            color: '#FFF',
            fontWeight: 700,
            borderRadius: 1
          }}
        >空きあり</Box>
      </Grid>
      <Grid item xs={1.5}>
        <Box
          bgcolor={getStatusColorCode(COLOR_STATUS_FEW)}
          sx={{
            paddingLeft: 1,
            color: '#FFF',
            fontWeight: 700,
            borderRadius: 1
          }}
        >残り僅か</Box>
      </Grid>
      <Grid item xs={2}>
        <Box
          bgcolor={getStatusColorCode(COLOR_STATUS_WAITING)}
          sx={{
            paddingLeft: 1,
            color: '#FFF',
            fontWeight: 700,
            borderRadius: 1
          }}
        >キャンセル待ち</Box>
      </Grid>
    </>
  )
}

export default StatusColorGuide;