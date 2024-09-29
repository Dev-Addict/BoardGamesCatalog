import {GameType} from '../enums/game-type.enum.ts';

export interface ResponseItem {
	id: string;
	name: string;
	releaseYear?: number;
	players: {
		min: number;
		max?: number;
	};
	publisher: string;
	expansions?: string[];
	standalone?: boolean;
	baseGame?: string;
	type: GameType;
}
