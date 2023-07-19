import { Position } from "../../types";

export type TransformProps = {
	children: React.ReactNode;
	startFrame: number;
	endFrame: number;
	startPosition: Position;
	endPosition: Position;
};
