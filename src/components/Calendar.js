import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

// カレンダーの2次元配列を作成
const createCalendar = (year, month) => {
	const start = new Date(year, month, 1);     // 月初
	const last = new Date(year, month + 1, 0);  // 月末
	const startDate = start.getDate();          // 月初
	const lastDate = last.getDate();            // 月末
	const startDay = start.getDay();            // 月初の曜日
	const lastDay = last.getDay();
	
	const days = [];
	let weekDay = [];
	let dayCount = 0; // 曜日カウント用

	for (let i = startDate; i <= lastDate; i++) {
			if (i === startDate) {
					for (let j = 0; j < startDay; j++) {
							weekDay.push('');
							dayCount++;
					}
			}
			weekDay.push(i);
			dayCount++;
			if (dayCount === 7) {
					days.push(weekDay);
					dayCount = 0;
					weekDay = [];
			}
	}
	for (let i = lastDay; i < 6; i++) {
			weekDay.push('');
	}
	days.push(weekDay);

	console.log(days)

	return days;

}

const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
`

const Th = styled.th`
	height: 36px;
	border: 1px solid #CCC;
`

const Td = styled.td`
	height: 80px;
	border: 1px solid #CCC;
	padding: 5px;
	vertical-align: initial;
`


const Calendar = () => {

	const [year, setYear] = useState(new Date().getFullYear());
	const [month, setMonth] = useState(new Date().getMonth());
	const [days, setDays] = useState([]);

	useEffect(() => {

		setDays(createCalendar(year, month));
	}, [year, month])

	return (
		<Container maxWidth={'lg'}>
			<Grid container spacing={5} margin={1}>
				<Grid item xs={1}>
					<ArrowBackIosIcon 
						onClick={() => {
							setYear(month === 0 ? year - 1 : year);
              setMonth(month === 0 ? 11 : month - 1);
						}}
					/>
				</Grid>
				<Grid item xs={1}>
					<ArrowForwardIosIcon 
						onClick={() => {
							setYear(month === 11 ? year + 1 : year);
              setMonth(month === 11 ? 0 : month + 1);
						}}
					/>
				</Grid>
				<Grid item xs={4}>
					<Typography textAlign={'right'}>{year}年</Typography>
				</Grid>
				<Grid item xs={4}>
					<Typography textAlign={'left'}>{month + 1}月</Typography>
				</Grid>
				<Grid item xs={1}>
					月
			</Grid>
				<Grid item xs={1}>
					週
				</Grid>
				<Grid item xs={12}>
					<Table>
						<thead>
							<tr>
								<Th>日</Th>
								<Th>月</Th>
								<Th>火</Th>
								<Th>水</Th>
								<Th>木</Th>
								<Th>金</Th>
								<Th>土</Th>
							</tr>
						</thead>

						<tbody>
							{days.map(week => {
								return (
									<tr>
										{week.map(day => {
											return (
												<Td>
													{day}
												</Td>
											)
										})}
									</tr>
								)
							})}
						</tbody>
    			</Table >
				</Grid >
			</Grid >
		</Container >
	)

}

export default Calendar;