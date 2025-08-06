import './stars-style.css';
import { Title, TitleVariant } from '../../ui/title/title';
import { StarsList } from '../stars-list/stars-list';
import { Button } from '../../ui/button/button';

export const Stars = () => { 
    return <section className='stars'>
    <Title variant={TitleVariant.h2} className='stars__title'>Наши звезды</Title>
    <StarsList />
    <Button minWidth='353px'>Купить билет</Button>
    </section>
}