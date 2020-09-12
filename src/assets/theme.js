import {createMuiTheme} from '@material-ui/core/styles'
import palette from './palette'
import './css/fontiran.css'
const font = 'iranyekan'

const theme = createMuiTheme({
	palette: palette,
	direction: 'rtl',
	spacing: 2.5,
	typography:{
		h1:{
			fontWeight: 700,
			fontSize: "3.2857rem",
			lineHeight: "4rem",
			fontFamily: font
		},
		h2:{
			fontWeight: 700,
			fontSize: "2.57em",
			lineHeight: "3.2857rem",
			fontFamily: font
		},
		h3:{
			fontWeight: 600,
			fontSize: "2rem",
			lineHeight: "2.7rem",
			fontFamily: font
		},
		h4:{
			fontWeight: 600,
			fontSize: "1.71rem",
			lineHeight: "2.43rem",
			fontFamily: font
		},
		h5:{
			fontWeight: 600,
			fontSize: "1.43rem",
			lineHeight: "2.14rem",
			fontFamily: font
		},
		h6:{
			fontWeight: 600,
			fontSize: "1.14rem",
			lineHeight: "1.857rem",
			fontFamily: font
		},
		subtitle1:{
			fontWeight: 400,
			fontSize: "1.25rem",
			lineHeight: "2rem",
			fontFamily: font,
			marginTop: 15
		},
		body1:{
			fontSize: 18,
			lineHeight: "1.8rem",
			fontFamily: font,
			color: "#a4acc4"
		},
		button:{
			fontWeight: 400,
			fontSize: ".9rem",
			lineHeight: 50,
			fontFamily: font,
			color: "#fff",
			letterSpacing: 2
		}
	}
})
export default theme