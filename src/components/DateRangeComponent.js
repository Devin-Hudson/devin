import React from 'react'
import {DateRange} from '@material-ui/icons'
import {IconButton} from '@material-ui/core'
// import DatePickerState from '../global_states/DatePickerGlobalState'

export default function DateRangeComponent(props) {
	// const [datePickerState,handleDatePicker] = props.datePicker
	return(
		<IconButton
			edge="start"
			color="inherit"
			aria-label="open drawer"
			/*{onClick={(datePickerState)=>handleDatePicker(!datePickerState)}*/
		>
			<DateRange/>
		</IconButton>
	)
}