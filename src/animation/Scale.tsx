import { interpolate, useCurrentFrame } from 'remotion';
import React from 'react';
import { AbsoluteFill } from 'remotion';

type ScaleProps = {
	children: React.ReactNode;
	direction: 'grow' | 'shrink';
	factor: number;
	startFrame: number;
	endFrame: number;
};

export const Scale: React.FC<ScaleProps> = ({
	children,
	direction,
	factor,
	startFrame,
	endFrame,
}) => {
	const frame = useCurrentFrame();

	const outputRangeLowerBound = direction === 'grow' ? 1 : factor;
	const outputRangeUpperBound = direction === 'grow' ? factor : 1;
	const outputRange = [outputRangeLowerBound, outputRangeUpperBound];

	return (
		<AbsoluteFill
			style={{
				scale: String(
					interpolate(frame, [startFrame, endFrame], outputRange, {
						extrapolateLeft: 'clamp',
						extrapolateRight: 'clamp',
					})
				),
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{children}
		</AbsoluteFill>
	);
};
