import React, {Fragment, useState} from 'react'
import DrawerComponent from '../components/drawer'
import AppbarComponent from '../components/appbar'
import SectionA from '../components/SectionA'
import SectionB from '../components/SectionB'
// import PersianDatePicker from '../components/persianDatePicker'

export default function () {
	const [drawerState, handleDrawerState] = useState(false)
	const [datepickerState, handleDatepicker] = useState(false)
	const [expanded, setExpanded] = useState(false)
	return (
		<Fragment>
			<AppbarComponent handleDrawerState={handleDrawerState} handleDatepicker={handleDatepicker}/>
			<SectionA/>
			<SectionB/>
			{/*<PersianDatePicker state={datepickerState} handleDatepicker={handleDatepicker}/>*/}
			<DrawerComponent state={drawerState} handleDrawerState={handleDrawerState}/>
		</Fragment>
	)
}
