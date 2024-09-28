import {Theme} from '../types/theme/theme.type.ts';
import {TypographyType} from '../types/enums/typography-type.enum.ts';

export const THEME: Theme = {
	colors: {
		primary: {
			m: '#F5842D',
			v: '#F8A363',
			c: '#FFFFFF',
			cv: '#FFFFFF',
		},
		secondary: {
			m: '#1E7698',
			v: '#2591BB',
			c: '#FFFFFF',
			cv: '#FFFFFF',
		},
		foreground: {
			a: '#000000',
			m: '#333333',
			v: '#FFFFFF',
		},
		background: {
			a: '#FFFFFF',
			m: '#FFFFFF',
			v: '#333333',
		},
	},
	typography: {
		[TypographyType.HEADING_1]: {
			element: 'h1',
			fontFamily: '"Poppins", sans-serif',
			fontSize: 36,
			fontWeight: 500,
			lineHeight: '64px',
		},
		[TypographyType.HEADING_2]: {
			element: 'h2',
			fontFamily: '"Poppins", sans-serif',
			fontSize: 30,
			fontWeight: 500,
			lineHeight: '54px',
		},
		[TypographyType.HEADING_3]: {
			element: 'h3',
			fontFamily: '"Poppins", sans-serif',
			fontSize: 24,
			fontWeight: 500,
			lineHeight: '46px',
		},
		[TypographyType.HEADING_4]: {
			element: 'h4',
			fontFamily: '"Poppins", sans-serif',
			fontSize: 20,
			fontWeight: 700,
			lineHeight: '40px',
		},
		[TypographyType.HEADING_5]: {
			element: 'h5',
			fontFamily: '"Poppins", sans-serif',
			fontSize: 18,
			fontWeight: 700,
			lineHeight: '36px',
		},
		[TypographyType.HEADING_6]: {
			element: 'h6',
			fontFamily: '"Poppins", sans-serif',
			fontSize: 16,
			fontWeight: 700,
			lineHeight: '32px',
		},
		[TypographyType.BODY_1]: {
			element: 'span',
			fontFamily: '"Roboto", sans-serif',
			fontSize: 16,
			fontWeight: 500,
		},
		[TypographyType.BODY_2]: {
			element: 'span',
			fontFamily: '"Roboto", sans-serif',
			fontSize: 14,
			fontWeight: 500,
		},
		[TypographyType.PARAGRAPH]: {
			element: 'p',
			fontFamily: '"Roboto", sans-serif',
			fontSize: 14,
			fontWeight: 500,
			lineHeight: '36px',
		},
		[TypographyType.BUTTON]: {
			element: 'button',
			fontFamily: '"Roboto", sans-serif',
			fontSize: 14,
			fontWeight: 500,
			lineHeight: '36px',
		},
		[TypographyType.CAPTION]: {
			element: 'span',
			fontFamily: '"Roboto", sans-serif',
			fontSize: 12,
			fontWeight: 500,
		},
		[TypographyType.OVERLINE]: {
			element: 'span',
			fontFamily: '"Roboto", sans-serif',
			fontSize: 10,
			fontWeight: 500,
		},
	},
};
