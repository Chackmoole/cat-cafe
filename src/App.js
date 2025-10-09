import './App.css';
import { Main } from './components/blocks/main/main';
import { Layout } from './components/layout/layout';
import {Gallary} from "./components/blocks/gallary/gallery";

function App() {
	return (
		<>
			<Layout>
                <Gallary/>
				<Main />
			</Layout>
		</>
	);
}

export default App;
