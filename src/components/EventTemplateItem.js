import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const EventTemplateItem = (props) => {

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        p: 2,
        border: 'solid 1px #0C9',
        borderRadius: 3,
        cursor: 'pointer',
        '&:hover': {
          bgcolor: '#0C9',
          opacity: '0.7',
        }
      }}
      onClick={() => {
        navigate(`/eventTemplate/${props.template.id}`)
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography>テンプレート名：{props.template.template_name}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>イベント名：{props.template.title}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>説明：{props.template.description}</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default EventTemplateItem;