import {ThemeProvider} from 'styled-components';

import {GlobalStyle} from '../styles/global.style.ts';
import {THEME} from '../constants/theme.constant.ts';

export function App() {
	return (
		<ThemeProvider theme={THEME}>
			<GlobalStyle />
			<div>Board Games Catalog</div>
		</ThemeProvider>
	);
}
