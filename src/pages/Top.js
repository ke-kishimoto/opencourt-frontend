import Calendar from '../components/Calendar';
import News from '../components/News';
import Container from '@mui/material/Container';

const Top = () => {
	return (
		<Container maxWidth={'lg'}>
      <News />
			<Calendar />
		</Container>
	)
}

export default Top;