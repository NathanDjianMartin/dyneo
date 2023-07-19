import React from 'react';
import { Transform } from '../animations/Transform';
import { AbsoluteFill } from 'remotion';

export const InBackground: React.FC = () => {
	const startPosition = { x: 1080, y: 0 };
	const endPosition = { x: 0, y: 0 };
	return (
		<Transform
			startFrame={31}
			endFrame={38}
			startPosition={startPosition}
			endPosition={endPosition}
		>
			<AbsoluteFill
				style={{
					backgroundColor: '#112233',
				}}
			/>
		</Transform>
	);
};
