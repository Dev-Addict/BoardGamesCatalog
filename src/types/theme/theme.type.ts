import {TypographyType} from '../enums/typography-type.enum.ts';
import {Color} from './color.type.ts';
import {Typography} from './typography.type.ts';

export interface Theme {
	colors: {
		primary: Color;
		secondary: Color;
		foreground: Color;
		background: Color;
	};
	typography: {[k in TypographyType]: Typography};
}
