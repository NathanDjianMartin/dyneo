export type Position = {
	x: number;
	y: number;
};

export type Axis = 'x' | 'y';

export type Animatable = {
	startFrame: number;
	endFrame: number;
	inDuration?: number;
	outDuration?: number;
};