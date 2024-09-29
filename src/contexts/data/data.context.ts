import {Game} from '../../types/game.type.ts';
import {createContext, Dispatch, SetStateAction} from 'react';
import {GameType} from '../../types/enums/game-type.enum.ts';

export interface DataContextType {
	games: Game[];
	isLoading: boolean;
	isError: boolean;
	search: string;
	setSearch: Dispatch<SetStateAction<string>>;
	releaseYears: number[];
	releaseYear: null | number;
	setReleaseYear: Dispatch<SetStateAction<null | number>>;
	players: null | number;
	setPlayers: Dispatch<SetStateAction<null | number>>;
	publishers: string[];
	publisher: null | string;
	setPublisher: Dispatch<SetStateAction<null | string>>;
	standalone: boolean;
	setStandalone: Dispatch<SetStateAction<boolean>>;
	type: null | GameType;
	setType: Dispatch<SetStateAction<null | GameType>>;

	refresh(): void | Promise<void>;
}

export const DataContext = createContext<DataContextType>({
	games: [],
	isLoading: false,
	isError: false,
	search: '',
	setSearch() {},
	releaseYears: [],
	releaseYear: null,
	setReleaseYear() {},
	players: null,
	setPlayers() {},
	publishers: [],
	publisher: null,
	setPublisher() {},
	standalone: false,
	setStandalone() {},
	type: null,
	setType() {},
	refresh() {},
});
