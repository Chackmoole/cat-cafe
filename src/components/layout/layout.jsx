import { Header } from '../blocks/header/header'
import { Main } from '../blocks/main/main'
import { Footer } from '../blocks/footer/footer'
import './layout-style.css'

export const Layout = () => { 
    return <div className='layout'>
        <Header />
        <Main /> 
        <Footer/>
    </div>
}