import {createMuiTheme} from '@material-ui/core/styles'
import palette from './palette'
import './css/fontiran.css'
import './css/otherFonts.css'
import './css/englishFonts.css'
//entry point in index.js
const direction = localStorage.getItem('currentLang')==='en' ? 'ltr' : 'rtl'
const defaultFont = localStorage.getItem('currentLang')==='en' ? 'AlegreyaSansSC' : 'iranyekan'
const logoFont = localStorage.getItem('currentLang')==='en' ? 'Monoton' : 'iranyekan'
const theme = createMuiTheme({
	palette: palette,
	direction: direction,
	spacing: 2.5,
	typography:{
		h1:{
			fontWeight: 700,
			fontSize: "3.2857rem",
			lineHeight: "4rem",
			fontFamily: defaultFont
		},
		h2:{
			fontWeight: 700,
			fontSize: "2.57em",
			lineHeight: "3.2857rem",
			fontFamily: defaultFont
		},
		h3:{
			fontWeight: 600,
			fontSize: "2rem",
			lineHeight: "2.7rem",
			fontFamily: defaultFont
		},
		h4:{
			fontWeight: 600,
			fontSize: "1.71rem",
			lineHeight: "2.43rem",
			fontFamily: defaultFont
		},
		h5:{
			fontWeight: 600,
			fontSize: "1.43rem",
			lineHeight: "2.14rem",
			fontFamily: defaultFont
		},
		h6:{
			fontWeight: 600,
			fontSize: "1.14rem",
			lineHeight: "1.857rem",
			fontFamily: defaultFont
		},
		subtitle1:{
			fontWeight: 400,
			fontSize: "1.25rem",
			lineHeight: "2rem",
			fontFamily: defaultFont,
			marginTop: 15
		},
		body1:{
			fontSize: 18,
			lineHeight: "1.8rem",
			fontFamily: defaultFont,
			color: "#a4acc4"
		},
		button:{
			fontWeight: 400,
			fontSize: ".9rem",
			lineHeight: 50,
			fontFamily: defaultFont,
			color: "#fff",
			letterSpacing: 2
		},
		logo:{
			fontWeight: 600,
			fontSize: '3rem',
			fontFamily: logoFont,
			color: '#fff',
			letterSpacing: 2
		}
	}
})
export default theme