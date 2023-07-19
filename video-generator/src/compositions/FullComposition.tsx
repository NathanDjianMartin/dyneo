import { Title } from '../components/title/Title';
import { InBackground } from './InBackground';
import { Music } from './Music';
import { FullCompositionProps } from './fullComposition.types';

export const FullComposition = ({ name = '{name}' }: FullCompositionProps) => {
	return (
		<>
			<Title
				text={`Hey ${name}`}
				style={{ color: '#112233' }}
				startFrame={0}
				endFrame={10}
				inDuration={5}
				outDuration={5}
			/>
			<InBackground />
			<Music />
		</>
	);
};
