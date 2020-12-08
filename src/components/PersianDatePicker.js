import React, {useState} from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import {Calendar} from 'react-modern-calendar-datepicker'
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core'

export default function PersianPicker({state, handleDatepicker}) {

	const [selectedDay, setSelectedDay] = useState(null)
	return (
		<Dialog open={Boolean(state)} onClose={() => handleDatepicker(!state)} aria-labelledby="date-picker"
		>
			<DialogTitle id="date-picker">مُعَّیِن</DialogTitle>
			<DialogContent>
				<DialogContentText>
					تاریخ ابلاغ
				</DialogContentText>

				<Calendar
					style={{fontFamily: 'iranyekan'}}
					value={selectedDay}
					onChange={setSelectedDay}
					shouldHighlightWeekends
					locale="fa"
				/>

			</DialogContent>
			<DialogActions style={{flexGrow: 1, flexShrink: 1}}>
				<Button onClick={() => handleDatepicker(!state)} style={{lineHeight: '2', color: 'red'}}>
					انصراف
				</Button>
				<Button onClick={() => handleDatepicker(!state)} style={{lineHeight: '2', color: 'green'}}>
					محاسبه
				</Button>
			</DialogActions>
		</Dialog>

	)
}