import { ConditionalWrapperProps } from './conditionalWrapper.types';

export const ConditionalWrapper = ({
	children,
	condition,
	wrapper,
}: ConditionalWrapperProps) => (condition ? wrapper(children) : children);
