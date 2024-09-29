import {QueryClientProvider} from '@tanstack/react-query';
import styled, {ThemeProvider} from 'styled-components';

import {GlobalStyle} from '../styles/global.style.ts';
import {queryClient} from '../clients/query.client.ts';
import {THEME} from '../constants/theme.constant.ts';
import {DataProvider} from '../contexts/data/data.provider.tsx';
import {Table} from './main/table/table.component.tsx';
import {Text} from './shared/text.component.tsx';
import {TypographyType} from '../types/enums/typography-type.enum.ts';

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	padding: 32px 64px;
	gap: 32px;
`;

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<DataProvider>
				<ThemeProvider theme={THEME}>
					<GlobalStyle />
					<Container>
						<Text type={TypographyType.HEADING_1} primary>
							Board Games Catalog
						</Text>
						<Table />
					</Container>
				</ThemeProvider>
			</DataProvider>
		</QueryClientProvider>
	);
}
