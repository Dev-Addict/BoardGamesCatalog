import _ from 'lodash';

import {Game} from '../../../types/game.type.ts';

export interface TableReducerState {
	column: string;
	data: any[];
	direction: 'ascending' | 'descending';
}

export type TableReducerAction =
	| {type: 'CHANGE_SORT'; column: string}
	| {type: 'GAMES_UPDATE'; data: Game[]};

export const TABLE_REDUCER_INITIAL_STATE: TableReducerState = {
	column: 'id',
	data: [],
	direction: 'ascending',
};

export function tableReducer(
	state: TableReducerState,
	action: TableReducerAction
): TableReducerState {
	switch (action.type) {
		case 'CHANGE_SORT':
			if (state.column === action.column) {
				return {
					...state,
					data: state.data.slice().reverse(),
					direction:
						state.direction === 'ascending' ? 'descending' : 'ascending',
				};
			}

			return {
				column: action.column,
				data:
					action.column === 'id'
						? _.sortBy(state.data, (item) => Number(item.id))
						: _.sortBy(state.data, [action.column]),
				direction: 'ascending',
			};
		case 'GAMES_UPDATE':
			return {
				...state,
				data:
					state.column === 'id'
						? _.sortBy(action.data, (item) => Number(item.id))
						: _.sortBy(action.data, [state.column]),
			};
		default:
			return state;
	}
}
