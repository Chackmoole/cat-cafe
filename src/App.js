import './App.css';
import { Main } from './components/blocks/main/main';
import { Layout } from './components/layout/layout';
import { GlobalStyle } from './styles';

function App() {
	return (
		<>
			<GlobalStyle />
			<Layout>
				<Main />
			</Layout>
		</>
	);
}

export default App;
