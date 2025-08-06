import './footer-style.css';
import { Logo } from '../../ui/logo/logo';
import { Copyrigth } from '../../ui/copyrigth/copyrigth';

export const Footer = () => { 
    return <footer className='footer'>
        <Logo />
        <Copyrigth/>
    </footer>
}