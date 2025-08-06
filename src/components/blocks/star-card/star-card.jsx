import './star-card-style.css';
import { StarIcon, StarIcons } from '../../ui/star-icon/star-icon';

export const StarCard = ({ src, title, text, icon }) => {     
    return <li className='star-card'>
        <img className='star-card__pic' src={src} alt={src} width={313} height={313} />
        <p className='star-card__title'>{title}</p>
        <p className='star-card__description'>{text}</p>
        {icon !== 'empty' ? <StarIcon variant={StarIcons[icon.toUpperCase()]}/>: ''}
    </li>
}