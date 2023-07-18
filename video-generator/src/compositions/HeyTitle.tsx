import { AbsoluteFill } from 'remotion';

import { ScaleSpring } from '../animation/Scale';
import { fontFamily } from '../constants';
import { Music } from './Music';

export const HeyTitle = () => {
	const name = 'Nathan';

	return (
		<AbsoluteFill
			style={{
				backgroundColor: '#FFFFFF',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<ScaleSpring isReverse startFrame={34} endFrame={35}>
				<ScaleSpring startFrame={0} endFrame={10}>
					<h1
						style={{
							fontSize: 100,
							fontWeight: 'bolder',
							fontFamily,
							textAlign: 'center',
						}}
					>
						Hey {name}!
					</h1>
				</ScaleSpring>
			</ScaleSpring>
		</AbsoluteFill>
	);
};
