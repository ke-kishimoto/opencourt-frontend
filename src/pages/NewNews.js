import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Register from '../elements/RegistBtn';
import { useState } from 'react';

const NewNews = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const validation = () => {
    return true;
  }

  return (
    <Container maxWidth={'lg'}
      sx={{
        minHeight: 650,
      }}
    >
      <Grid container spacing={2} margin={5}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="タイトル"
            name="title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={5}
            label="内容"
            name="content"
            variant="outlined"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Register
            mode={'new'}
            endpoint={'news'}
            data={{
              title: title,
              content: content,
            }}
            validation={validation}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default NewNews;