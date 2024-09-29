import {useContext} from 'react';

import {DataContext} from '../../contexts/data/data.context.ts';

export const useData = () => useContext(DataContext);
