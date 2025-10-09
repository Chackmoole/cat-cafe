import './App.css';
import { Main } from './components/blocks/main/main';
import { Layout } from './components/layout/layout';
import {Promo} from "./components/blocks/promo/promo";

function App() {
	return (
		<>
			<Layout>
                <Promo/>
				<Main />
			</Layout>
		</>
	);
}

export default App;
