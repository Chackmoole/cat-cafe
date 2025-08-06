import { Header } from './header/header'
import { Footer } from './footer/footer'
import './layout-style.css'

export const Layout = ({ children } ) => { 
    return <div className='layout'>
        <Header />
        { children } 
        <Footer/>
    </div>
}