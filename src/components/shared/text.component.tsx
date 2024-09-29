import {DetailedHTMLProps, forwardRef, HTMLAttributes} from 'react';
import {useTheme} from 'styled-components';

import {TypographyType} from '../../types/enums/typography-type.enum.ts';

interface Props
	extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	type: TypographyType;
	primary?: boolean;
}

export const Text = forwardRef<HTMLElement, Props>(function Text(
	{type, primary, ...props},
	ref
) {
	const {colors, typography} = useTheme();
	const {
		[type]: {element: Element, fontFamily, fontSize, fontWeight, lineHeight},
	} = typography;
	const color = (primary && colors.primary.m) || colors.foreground.m;

	return (
		<Element
			style={{fontFamily, fontSize, fontWeight, lineHeight, color}}
			ref={ref}
			{...props}
		/>
	);
});

export type TextProps = Props;
