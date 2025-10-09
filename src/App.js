import './App.css';
import { Main } from './components/blocks/main/main';
import { Layout } from './components/layout/layout';
import {Gallery} from "./components/blocks/gallary/gallery";

function App() {
	return (
		<>
			<Layout>
                <Gallery/>
				<Main />
			</Layout>
		</>
	);
}

export default App;
