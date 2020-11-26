import {useSpring} from 'react-spring'

export default function useLogo() {
	return useSpring({
		from: {o: 0, xyz: [0, +100, 0]},
		o: 1,
		xyz: [0, 0, 0],
		delay: 1500,
	})
}
