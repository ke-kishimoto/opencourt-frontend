import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';

const UserItem = (props) => {

	const navigate = useNavigate();

	return (
		<Box sx={{ p: 2, m: 2 ,
			border: '1px solid grey',
			borderRadius: '5px',
			'&:hover': {
				backgroundColor: '#EEE',
				cursor: 'pointer',
			},}}
			onClick={() => {navigate('/userDetail/' + props.user.id)}}
		>
			<Grid container spacing={1}>
				<Grid item xs={1}>
					<Avatar>{props.user.name.substr(0,1)}</Avatar>
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
			
				<Grid item xs={3}>
					{props.user.email}
				</Grid>
				<Grid item xs={7}/>

				<Grid item xs={1}/>
				<Grid item xs={2}>
					ステータス：{props.user.status_name}
				</Grid>
				<Grid item xs={2}>
					権限：{props.user.role_name}
				</Grid>
			</Grid>
		</Box>		
	)
}

export default UserItem;