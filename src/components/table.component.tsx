import {useData} from '../hooks/contexts/data.hook.ts';

export function Table() {
	const {games} = useData();

	return <div>{games.length}</div>;
}
