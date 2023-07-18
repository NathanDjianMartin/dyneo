import { Audio, staticFile } from 'remotion';
import React from 'react';

export const Music: React.FC = () => {
	return <Audio src={staticFile('music.mp3')} />;
};
