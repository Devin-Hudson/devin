import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip'

function LinearProgressWithLabel(props) {
	return (
		<Box display="flex" alignItems="center">
			<Box width="100%" mr={1}>
				<LinearProgress variant="determinate" {...props} />
			</Box>
			<Box minWidth={35}>
				<Typography variant="body2" color="textSecondary">{`${Math.round(
					props.value,
				)}%`}</Typography>
			</Box>
		</Box>
	);
}

LinearProgressWithLabel.propTypes = {
	/**
	 * The value of the progress indicator for the determinate and buffer variants.
	 * Value between 0 and 100.
	 */
	value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
	root: {
		width: '100%',
	},
});

export default function ProgressBar({chips=[], percent=90, style}) {
	const classes = useStyles()
	const [progress, setProgress] = React.useState(0)

	React.useEffect(() => {
		const timer = setInterval(() => {
			setProgress((oldProgress) => {
				if (oldProgress === percent) {
					return percent;
				}
				return Math.min(oldProgress + 1, 100);
			});
		}, 50);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className={classes.root} style={style}>
			{chips.map((chip)=><Chip label={chip} color='primary' style={{margin: '0 3px 0 3px'}} />)}
			<LinearProgressWithLabel value={progress} />
		</div>
	);
}
