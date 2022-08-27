import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import RegisterBtn from '../elements/RegistBtn';
import DeleteBtn from '../elements/DeleteBtn';
import Container from '@mui/material/Container';
import { useAxios } from "../utils/axiosUtil";
import { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";
import FetchData from '../components/FetchData';

const EditEventTemplate = () => {

  const axios = useAxios();
  const [template, setTemplate] =  useState({});
  const [categories, setCategories] = useState([]);
  const inputRef = useRef(null);
  const { id } = useParams();

  useEffect(() => {
    // const fetchData = async () => {
    //   const result = await axios.get('/getTemplate/' + id);
    //   setTemplate(result.data);
    // }
    // fetchData();
    const fetchCategory = async () => {
      const result = await axios.get('/userCategory');
      setCategories(result.data.filter(e => e.category_name !== ''));
    };
    fetchCategory();
  }, [])

  const validation = () => {
    return true;
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setTemplate(
      { ...template, [name]: value }
    )
  }

	return (
		<Container maxWidth={'lg'}>
      
			<Grid container spacing={3} margin={5} >
				<Grid item xs={12}>
					<Typography>イベントテンプレート編集</Typography>
				</Grid>
				<Grid item xs={12}>
					<TextField
            id="template-name"
						fullWidth
            label="テンプレート名"
            name="template_name"
            variant="outlined"
            inputRef={inputRef}
            value={template.template_name === undefined ? '' : template.template_name}
            onChange={handleChange}
					/>
				</Grid>
        <Grid item xs={12}>
        <TextField
          id="event-title"
          fullWidth
          label="イベント名"
          name="title"
          variant="outlined"
          inputRef={inputRef}
          value={template.title === undefined ? '' : template.title}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="event-short-title"
          fullWidth
          label="イベント名略称"
          name="short_title"
          variant="outlined"
          value={template.short_title === undefined ? '' : template.short_title}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="place"
          fullWidth
          label="開催場所"
          name="place"
          variant="outlined"
          value={template.place === undefined ? '' : template.place}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="limit-number"
          fullWidth
          type="number"
          label="人数"
          name="limit_number"
          variant="outlined"
          value={template.limit_number === undefined ? '' : template.limit_number}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="description"
          fullWidth
          multiline
          rows={4}
          label="詳細"
          name="description"
          variant="outlined"
          value={template.description === undefined ? '' : template.description}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography>参加費</Typography>
      </Grid>
      {categories.map((e, index) => {
        return (
          <Grid item xs={4}
            key={e.id}
          >
            <TextField
              fullWidth
              id={'user-category' + (index + 1)}
              type="number"
              label={e.category_name}
              name={'price' + (index + 1)}
              variant="outlined"
              value={template['price' + (index + 1)] === undefined ? '' : template['price' + (index + 1)]}
              onChange={handleChange}
            />
          </Grid>
        )
      })}
				<Grid item xs={4}>
          <RegisterBtn 
            mode={'update'}
            validation={validation}
            endpoint={'/eventTemplate'}
            data={{...template, 
            }}
            forward={'/templateManagement'}
          />  
				</Grid>
        <Grid item xs={4}>
          <DeleteBtn 
            endpoint={'/eventTemplate'}
            id={template.id}
            forward={'/templateManagement'}
          />  
				</Grid>
			</Grid>
      <FetchData 
        endpoint={'/getTemplate'}
        id={id}
        setData={setTemplate}
      />
		</Container>
	)
}

export default EditEventTemplate;