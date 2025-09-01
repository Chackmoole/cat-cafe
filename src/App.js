import { Layout } from './components/layout/layout';
import { Main } from './components/blocks/main/main';
import './App.css';
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
