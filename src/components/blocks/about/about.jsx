import aboutPicture from '../../../assests/img/about.png'
import { Title, TitleSize } from '../../ui/title/title';
import { Text, TextSize } from '../../ui/text/text';
import './about-style.css';


export const About = () => { 
    return <section className='about'>
        <div >
            <Title className='about__title' variant={ TitleSize.h1 }>Первое в России котокафе</Title>
            <Text className='about__description' variant={ TextSize.normal} >Крупнейшее котокафе России, в&nbsp;котором живёт 50&nbsp;кошек и&nbsp;котов, и&nbsp;каждый из&nbsp;них ищет новый дом. Животных можно гладить, фотографировать, играть с&nbsp;ними.</Text>
            <Text  variant={ TextSize.normal }>Санкт-Петербург, набережная реки Карповки, дом&nbsp;5, литера&nbsp;П</Text>
        </div>
    <img src={aboutPicture} alt="Отдых с котом" width={446} height={446} />
</section>
}