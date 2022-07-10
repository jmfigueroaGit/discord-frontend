import { Box } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import React from 'react';

const OnlineIndicator = () => {
	return (
		<Box
			sx={{
				color: '#35855e',
				display: 'flex',
				alignItems: 'center',
				position: 'absolute',
				right: '5px',
			}}
		>
			<FiberManualRecordIcon />
		</Box>
	);
};

export default OnlineIndicator;
