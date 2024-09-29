import {useCallback} from 'react';
import styled from 'styled-components';

import {Core} from './core.component.tsx';
import {Filter} from './filter.component.tsx';
import {Button} from '../../shared/button.component.tsx';
import {Text} from '../../shared/text.component.tsx';
import {useData} from '../../../hooks/contexts/data.hook.ts';
import {TypographyType} from '../../../types/enums/typography-type.enum.ts';
import error from '../../../assets/error.svg';
import loading from '../../../assets/loading.svg';
import nothing from '../../../assets/nothing.svg';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 32px 0;
`;

const MessageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 16px;
	flex: 1;
`;

const MessageImage = styled.img`
	width: 300px;
	height: 300px;
`;

export function Table() {
	const {games, isError, isLoading, refresh} = useData();

	const onRefreshClick = useCallback(() => {
		refresh();
	}, [refresh]);

	if (isError) {
		return (
			<MessageContainer>
				<MessageImage src={error} alt="Error" />
				<Text type={TypographyType.HEADING_5}>Something went wrong</Text>
				<Button onClick={onRefreshClick}>Try Again</Button>
			</MessageContainer>
		);
	}

	if (isLoading) {
		return (
			<MessageContainer>
				<MessageImage src={loading} alt="Loading" />
				<Text type={TypographyType.HEADING_5}>Loading...</Text>
			</MessageContainer>
		);
	}

	if (games.length === 0) {
		return (
			<MessageContainer>
				<MessageImage src={nothing} alt="Nothing" />
				<Text type={TypographyType.HEADING_5}>No board games found</Text>
			</MessageContainer>
		);
	}

	return (
		<Container>
			<Filter />
			<Core />
		</Container>
	);
}
