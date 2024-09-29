import {ChangeEvent, SyntheticEvent, useCallback, useMemo} from 'react';
import {
	DropdownItemProps,
	DropdownProps,
	Input,
	Select,
} from 'semantic-ui-react';
import styled from 'styled-components';

import {Button} from '../../shared/button.component.tsx';
import {useData} from '../../../hooks/contexts/data.hook.ts';

const FilterContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	flex-wrap: wrap;
	gap: 8px;
`;

export function Filter() {
	const {
		refresh,
		search,
		setSearch,
		publishers,
		publisher,
		setPublisher,
		releaseYears,
		releaseYear,
		setReleaseYear,
	} = useData();

	const onRefreshClick = useCallback(() => {
		refresh();
	}, [refresh]);
	const onSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	}, []);
	const onPublisherChange = useCallback(
		(_: SyntheticEvent<HTMLElement>, {value}: DropdownProps) => {
			setPublisher(value as null | string);
		},
		[]
	);
	const onReleaseYearChange = useCallback(
		(_: SyntheticEvent<HTMLElement>, {value}: DropdownProps) => {
			setReleaseYear(value as null | number);
		},
		[]
	);

	const publisherOptions = useMemo(
		() =>
			[
				{
					key: 'all',
					text: 'All',
					value: null,
				},
				...publishers.map((publisher) => ({
					key: publisher,
					text: publisher,
					value: publisher,
				})),
			] as DropdownItemProps[],
		[publishers]
	);
	const releaseYearOptions = useMemo(
		() =>
			[
				{
					key: 'all',
					text: 'All',
					value: null,
				},
				...releaseYears.map((year) => ({
					key: year,
					text: year.toString(),
					value: year,
				})),
			] as DropdownItemProps[],
		[]
	);

	return (
		<FilterContainer>
			<Input
				placeholder="Search..."
				value={search}
				onChange={onSearchChange}
				icon="search"
			/>
			<Select
				options={publisherOptions}
				placeholder="Publisher"
				value={publisher as string | undefined}
				onChange={onPublisherChange}
			/>
			<Select
				options={releaseYearOptions}
				placeholder="Release Year"
				value={releaseYear as number | undefined}
				onChange={onReleaseYearChange}
			/>
			<Button onClick={onRefreshClick}>Refresh</Button>
		</FilterContainer>
	);
}
