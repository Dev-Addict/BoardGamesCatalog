import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import {App} from './components/app.component.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
