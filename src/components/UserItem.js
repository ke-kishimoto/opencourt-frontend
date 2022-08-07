import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

const UserItem = () => {
	return (
		<Box sx={{ p: 2, m: 2 ,
			border: '1px solid grey',
			width: '50%',
			borderRadius: '5px',
			'&:hover': {
				backgroundColor: '#EEE',
				cursor: 'pointer',
      },
		}}>
			<Grid container>
				<Grid item xs={1}>
					<Avatar>U</Avatar>
				</Grid>
				<Grid item xs={2}>
					名前
				</Grid>
				<Grid item xs={2}>
					男性
				</Grid>
				<Grid item xs={2}>
					社会人
				</Grid>
				<Grid item xs={5}/>
			
				<Grid item xs={1}>
					xxxxx@gmail.com
				</Grid>
				<Grid item xs={9}/>

				<Grid item xs={1}/>
				<Grid item xs={2}>
					ステータス：有効
				</Grid>
				<Grid item xs={2}>
					権限：一般ユーザー
				</Grid>
			</Grid>
		</Box>		
	)
}

export default UserItem;