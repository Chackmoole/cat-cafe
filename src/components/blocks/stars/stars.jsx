import './stars-style.css';
import { Title, TitleSize } from '../../ui/title/title';
import { StarsList } from '../stars-list/stars-list';
import { Button } from '../../ui/button/button';

export const Stars = () => { 
    return <section className='stars'>
    <Title variant={TitleSize.h2} className='stars__title'>Наши звезды</Title>
    <StarsList />
    <Button minWidth='353px'>Купить билет</Button>
    </section>
}