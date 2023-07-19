import { AbsoluteFill } from 'remotion';

import { ScaleSpring } from '../../animations/ScaleSpring';
import { fontFamily } from '../../constants';
import { TitleProps } from './title.types';
import { ConditionalWrapper } from '../conditional-wrapper/ConditionalWrapper';

export const Title = ({
	text,
	style,
	startFrame,
	endFrame,
	inDuration = 0,
	outDuration = 0,
}: TitleProps) => {
	const inStartFrame = startFrame;
	const inEndFrame = startFrame + inDuration;
	const outStartFrame = endFrame;
	const outEndFrame = endFrame + outDuration;

	const outAnimationConditionalWrapper = (children: React.ReactNode) => (
		<ScaleSpring isReverse startFrame={outStartFrame} endFrame={outEndFrame}>
			{children}
		</ScaleSpring>
	);

	const inAnimationConditionalWrapper = (children: React.ReactNode) => (
		<ScaleSpring startFrame={inStartFrame} endFrame={inEndFrame}>
			{children}
		</ScaleSpring>
	);

	return (
		<AbsoluteFill
			style={{
				backgroundColor: '#FFFFFF',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<ConditionalWrapper
				condition={outDuration > 0}
				wrapper={outAnimationConditionalWrapper}
			>
				<ConditionalWrapper
					condition={inDuration > 0}
					wrapper={inAnimationConditionalWrapper}
				>
					<h1
						style={{
							fontSize: 100,
							fontWeight: 'bolder',
							fontFamily,
							textAlign: 'center',
							...style,
						}}
					>
						{text}
					</h1>
				</ConditionalWrapper>
			</ConditionalWrapper>
		</AbsoluteFill>
	);
};
