import {useEffect, useReducer} from 'react';
import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderCell,
	TableRow as SUITableRow,
} from 'semantic-ui-react';

import {TableRow} from './table-row.component.tsx';
import {useData} from '../../../hooks/contexts/data.hook.ts';
import {TABLE_REDUCER_INITIAL_STATE, tableReducer} from './table.reducer.ts';

export function Core() {
	const {games} = useData();

	const [state, dispatch] = useReducer(
		tableReducer,
		TABLE_REDUCER_INITIAL_STATE
	);

	const onTableHeaderCellClick = (column: string) => () => {
		dispatch({type: 'CHANGE_SORT', column});
	};

	useEffect(() => {
		dispatch({type: 'GAMES_UPDATE', data: games});
	}, [games]);

	const renderGames = () =>
		state.data.map((game) => <TableRow game={game} key={game.id} />);

	return (
		<Table sortable celled structured>
			<TableHeader>
				<SUITableRow>
					<TableHeaderCell
						rowSpan="2"
						sorted={state.column === 'id' ? state.direction : undefined}
						onClick={() => dispatch({type: 'CHANGE_SORT', column: 'id'})}
					>
						ID
					</TableHeaderCell>
					<TableHeaderCell
						rowSpan="2"
						sorted={state.column === 'name' ? state.direction : undefined}
						onClick={onTableHeaderCellClick('name')}
					>
						Name
					</TableHeaderCell>
					<TableHeaderCell
						rowSpan="2"
						sorted={state.column === 'publisher' ? state.direction : undefined}
						onClick={onTableHeaderCellClick('publisher')}
					>
						Publisher
					</TableHeaderCell>
					<TableHeaderCell
						rowSpan="2"
						sorted={
							state.column === 'releaseYear' ? state.direction : undefined
						}
						onClick={onTableHeaderCellClick('releaseYear')}
					>
						ReleaseYear
					</TableHeaderCell>
					<TableHeaderCell colSpan="2">Players</TableHeaderCell>
					<TableHeaderCell rowSpan="2">Type</TableHeaderCell>
					<TableHeaderCell rowSpan="2">Standalone</TableHeaderCell>
				</SUITableRow>
				<SUITableRow>
					<TableHeaderCell
						sorted={
							state.column === 'players.min' ? state.direction : undefined
						}
						onClick={onTableHeaderCellClick('players.min')}
					>
						Min
					</TableHeaderCell>
					<TableHeaderCell
						sorted={
							state.column === 'players.max' ? state.direction : undefined
						}
						onClick={onTableHeaderCellClick('players.max')}
					>
						Max
					</TableHeaderCell>
				</SUITableRow>
			</TableHeader>
			<TableBody>{renderGames()}</TableBody>
		</Table>
	);
}
