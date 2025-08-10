import { Provider } from 'react-redux';
import { store } from '../store';
import { Dashboard } from './home';

export default function Index() {
	return (
		<Provider store={store}>
			<Dashboard />
		</Provider>
	);
}