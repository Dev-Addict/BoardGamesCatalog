import {PropsWithChildren, useEffect, useMemo, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import Fuse from 'fuse.js';

import {DataContext} from './data.context.ts';
import {Game} from '../../types/game.type.ts';
import {ResponseItem} from '../../types/response/response-item.type.ts';
import {GameType} from '../../types/enums/game-type.enum.ts';

export function DataProvider({children}: PropsWithChildren) {
	const {isLoading, isError, isFetched, data, refetch} = useQuery<
		ResponseItem[]
	>({
		queryKey: ['boardGames'],
		async queryFn() {
			const response = await fetch(
				'https://getboardgames-jxxjux7fua-ey.a.run.app/'
			);
			return response.json();
		},
	});

	const [games, setGames] = useState<Game[]>([]);
	const [search, setSearch] = useState<string>('');
	const [releaseYears, setReleaseYears] = useState<number[]>([]);
	const [releaseYear, setReleaseYear] = useState<null | number>(null);
	const [players, setPlayers] = useState<null | number>(null);
	const [publishers, setPublishers] = useState<string[]>([]);
	const [publisher, setPublisher] = useState<null | string>(null);
	const [standalone, setStandalone] = useState<boolean>(false);
	const [type, setType] = useState<null | GameType>(null);

	const filteredGames = useMemo(() => {
		let result = games;

		if (search) {
			const fuse = new Fuse(result, {
				keys: ['name', 'publisher'],
			});

			result = fuse.search(search).map((item) => item.item);
		}

		if (releaseYear) {
			result = result.filter((item) => item.releaseYear === releaseYear);
		}

		if (players) {
			result = result.filter(
				(item) =>
					item.players.min <= players &&
					(!item.players.max || item.players.max >= players)
			);
		}

		if (publisher) {
			result = result.filter((item) => item.publisher === publisher);
		}

		if (standalone) {
			result = result.filter(
				(item) => item.type === GameType.EXPANSION && item.standalone
			);
		}

		if (type) {
			result = result.filter((item) => item.type === type);
		}

		return result;
	}, [games, players, publisher, releaseYear, search, standalone, type]);

	useEffect(() => {
		if (!isFetched || !data) return;

		const games: Game[] = data.map((item) => {
			if (item.type === GameType.BASE_GAME) {
				return {
					id: item.id,
					name: item.name,
					releaseYear: item.releaseYear,
					players: item.players,
					publisher: item.publisher,
					expansions: item.expansions,
					type: item.type,
				};
			} else {
				return {
					id: item.id,
					name: item.name,
					releaseYear: item.releaseYear,
					players: item.players,
					publisher: item.publisher,
					standalone: item.standalone || false,
					baseGame: item.baseGame || '',
					type: item.type,
				};
			}
		});

		const releaseYears = new Set<number>();
		const publishers = new Set<string>();

		for (const game of games) {
			if (game.releaseYear) {
				releaseYears.add(game.releaseYear);
			}

			publishers.add(game.publisher);
		}

		setGames(games);
		setReleaseYears(Array.from(releaseYears).sort());
		setPublishers(Array.from(publishers).sort());
	}, [isFetched, data]);

	return (
		<DataContext.Provider
			value={{
				games: filteredGames,
				isLoading,
				isError,
				search,
				setSearch,
				releaseYears,
				releaseYear,
				setReleaseYear,
				players,
				setPlayers,
				publishers,
				publisher,
				setPublisher,
				standalone,
				setStandalone,
				type,
				setType,
				refresh() {
					void refetch();
				},
			}}
		>
			{children}
		</DataContext.Provider>
	);
}
