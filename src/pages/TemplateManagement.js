import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TemplateSelectBox from '../elements/TemplateSelectBox';
import BasicEventForm from '../forms/BasicEventForm';
import { useRecoilValue } from 'recoil';
import { getEventTemplate } from '../states/selectors/eventTemplateSelector';

const TemplateManagement = () => {

  const template = useRecoilValue(getEventTemplate);

	return (
		<Container maxWidth={'lg'}>
			<Grid container spacing={3} margin={5} >
				<Grid item xs={12}>
					<Typography>テンプレート管理</Typography>
				</Grid>
				<Grid item xs={12}>
          <TemplateSelectBox />
				</Grid>
				<Grid item xs={12}>
					<TextField
						fullWidth
						label="テンプレート名"
            variant="outlined"
            value={template.template_name}
					/>
				</Grid>
        <BasicEventForm />
				<Grid item xs={6}>
					<Button
						variant="outlined"
					>
						クリア
							</Button>
				</Grid>
				<Grid item xs={6}>
					<Button
						variant="contained"
					>
						登録
							</Button>
				</Grid>
			</Grid>
		</Container>
	)
}

export default TemplateManagement;