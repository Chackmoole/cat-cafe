import { Header } from '../blocks/header/header'
import { Main } from '../blocks/main/main'
import { Footer } from '../blocks/footer/footer'
import './style.css'

export const PageWrapper = () => { 
    return <div className='page-wrapper__main'>
        <Header />
        <Main /> 
        <Footer/>
    </div>
}