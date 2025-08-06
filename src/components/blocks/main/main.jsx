import './main-style.css';
import { About } from '../about/about';
import { Stars } from '../stars/stars';

export const Main = () => { 
    return <main className='main'>
        <About />
        <Stars/>
    </main>
}