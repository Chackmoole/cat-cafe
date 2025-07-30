import './stars-list-style.css';
import firstPic from '../../../assests/img/cat-lucky.jpg'
import { StarCard } from '../star-card/star-card';

export const StarsList = () => { 
    return <ul className='stars-list'>
        <StarCard src={ firstPic } title='Кот Лаки' text='Крайне спокойный, ласковый малыш, который медленно, но уверенно перестаёт быть робким скромнягой'/>
    </ul>
}