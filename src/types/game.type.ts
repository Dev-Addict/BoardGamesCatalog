import {GameType} from './enums/game-type.enum.ts';

export interface ExpansionGame {
	id: string;
	name: string;
	releaseYear?: number;
	players: {
		min: number;
		max?: number;
	};
	publisher: string;
	standalone: boolean;
	baseGame: string;
	type: GameType.EXPANSION;
}

export interface BaseGame {
	id: string;
	name: string;
	releaseYear?: number;
	players: {
		min: number;
		max?: number;
	};
	publisher: string;
	expansions?: string[];
	type: GameType.BASE_GAME;
}

export type Game = BaseGame | ExpansionGame;
