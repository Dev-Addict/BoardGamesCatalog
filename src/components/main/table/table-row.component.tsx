import {Game} from '../../../types/game.type.ts';
import {TableRow as SUITableRow, TableCell} from 'semantic-ui-react';
import {GameType} from '../../../types/enums/game-type.enum.ts';

interface Props {
	game: Game;
}

export function TableRow({game}: Props) {
	return (
		<SUITableRow>
			<TableCell>{game.id}</TableCell>
			<TableCell>{game.name}</TableCell>
			<TableCell>{game.publisher || '-'}</TableCell>
			<TableCell>{game.releaseYear || '-'}</TableCell>
			<TableCell>{game.players.min || '-'}</TableCell>
			<TableCell>{game.players.max || '-'}</TableCell>
			<TableCell>{game.type}</TableCell>
			<TableCell>
				{game.type === GameType.EXPANSION
					? game.standalone
						? 'Yes'
						: 'No'
					: '-'}
			</TableCell>
		</SUITableRow>
	);
}
