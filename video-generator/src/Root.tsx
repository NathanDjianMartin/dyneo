import { Composition } from 'remotion';

import { FullComposition } from './compositions/FullComposition';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="FullComposition"
				component={FullComposition}
				durationInFrames={417}
				fps={30}
				width={1080}
				height={1920}
			/>
		</>
	);
};
