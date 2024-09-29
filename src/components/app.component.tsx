import {QueryClientProvider} from '@tanstack/react-query';
import {ThemeProvider} from 'styled-components';

import {GlobalStyle} from '../styles/global.style.ts';
import {queryClient} from '../clients/query.client.ts';
import {THEME} from '../constants/theme.constant.ts';
import {DataProvider} from '../contexts/data/data.provider.tsx';
import {Table} from './table.component.tsx';

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<DataProvider>
				<ThemeProvider theme={THEME}>
					<GlobalStyle />
					<Table />
				</ThemeProvider>
			</DataProvider>
		</QueryClientProvider>
	);
}
