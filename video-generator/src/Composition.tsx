import { AbsoluteFill } from 'remotion';
import { ScaleSpring } from './animation/Scale';

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
			<ScaleSpring startFrame={0} endFrame={10}>
				<h1
					style={{
						fontSize: 100,
						fontWeight: 'bolder',
					}}
				>
					Hey {name}!
				</h1>
			</ScaleSpring>
		</AbsoluteFill>
	);
};
