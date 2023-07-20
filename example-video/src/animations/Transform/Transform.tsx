import { interpolate } from 'remotion';
import { useCurrentFrame } from 'remotion';
import React from 'react';
import { AbsoluteFill } from 'remotion';
import { Axis } from '../../types';
import { TransformProps } from './transform.types';

export const Transform: React.FC<TransformProps> = ({
	children,
	startFrame,
	endFrame,
	startPosition,
	endPosition,
}) => {
	const frame = useCurrentFrame();

	if (startFrame >= endFrame) {
		throw new Error(
			// TODO: factorize in a new error type
			'TransformSpring animation endFrame should be greater than startFrame'
		);
	}

	function getTranslate(axis: Axis) {
		const startCoordinate = startPosition[axis];
		const endCoordinate = endPosition[axis];
		const interpolatedCoordinate = interpolate(
			frame,
			[startFrame, endFrame],
			[startCoordinate, endCoordinate],
			{
				extrapolateRight: 'clamp',
				extrapolateLeft: 'clamp',
			}
		);
		return `translate${axis.toUpperCase()}(${interpolatedCoordinate}px)`;
	}

	interpolate;

	return (
		<AbsoluteFill
			style={{
				transform: `${getTranslate('x')} ${getTranslate('y')}`,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{children}
		</AbsoluteFill>
	);
};
