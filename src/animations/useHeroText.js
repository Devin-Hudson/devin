import {useTrail} from 'react-spring'

export default function useHeroText(heroText) {
	return useTrail(heroText.length, {
		from: {o: 0, xyz: [0, +100, 0], height: 0},
		o: 1,
		xyz: [0, 0, 0],
		height: 80,
		delay: 2500,
	})
}
