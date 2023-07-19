import { Title } from '../../components/Title/Title';
import { InBackground } from '../InBackground';
import { Music } from '../Music';
import { FullCompositionProps } from './fullComposition.types';

export const FullComposition = ({ name }: FullCompositionProps) => {
	return (
		<>
			<Title
				text={`Hey ${name}`}
				style={{ color: '#112233' }}
				startFrame={0}
				endFrame={20}
				inDuration={5}
				outDuration={5}
			/>
			<InBackground />
			<Music />
		</>
	);
};
