import {ElementType} from 'react';

export interface Typography {
	element: ElementType;
	fontFamily: string;
	fontSize: number | string;
	fontWeight: number | string;
	lineHeight?: number | string;
}
