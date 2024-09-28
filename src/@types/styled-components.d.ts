import 'styled-components';

import {Theme} from '../types/theme/theme.type.ts';

declare module 'styled-components' {
	export type DefaultTheme = Theme;
}
