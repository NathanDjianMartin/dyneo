import { spring } from 'remotion';
import { useCurrentFrame, useVideoConfig } from 'remotion';
import React from 'react';
import { AbsoluteFill } from 'remotion';
import { ScaleSpringProps } from './scaleSpring.types';

export const ScaleSpring: React.FC<ScaleSpringProps> = ({
	children,
	startFrame,
	endFrame,
	stiffness = 100,
	isReverse = false,
}) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

	if (startFrame >= endFrame) {
		throw new Error(
			'ScaleSpring animation endFrame should be greater than startFrame'
		);
	}

	const start = frame - startFrame;
	const duration = endFrame - startFrame;

	return (
		<AbsoluteFill
			style={{
				scale: String(
					spring({
						frame: start,
						fps,
						config: {
							stiffness,
						},
						reverse: isReverse,
						durationInFrames: duration,
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
