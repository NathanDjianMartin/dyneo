import { AbsoluteFill } from 'remotion';
import { Scale } from './animation/Scale';

export const MyComposition = () => {
	const name = 'Nathan';

	return (
		<AbsoluteFill
			style={{
				backgroundColor: '#FFFFFF',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Scale direction="grow" startFrame={0} endFrame={10} factor={4}>
				<h1>Hey {name}!</h1>
			</Scale>
		</AbsoluteFill>
	);
};
