import React, {Fragment, useState} from 'react'
import DrawerComponent from '../components/CustomizedDrawer'
import AppbarComponent from '../components/CustomizedAppbar'
import SectionA from '../components/SectionA'
import SectionB from '../components/SectionB'
import PersianDatePicker from '../components/PersianDatePicker'
import ReachOut from '../components/ReachOut'

export default function () {
	const [drawerState, handleDrawerState] = useState(false)
	// const [datePickerState, handleDatePicker] = useState(false)
	return (
		<Fragment>
			<AppbarComponent states={[drawerState, handleDrawerState]} />
			<SectionA/>
			<SectionB/>
			<ReachOut/>
			{/*<PersianDatePicker/>*/}
			{/*state={datepickerState} handleDatepicker={handleDatepicker}/>*/}
			<DrawerComponent states={[drawerState, handleDrawerState]}/>
		</Fragment>
	)
}
