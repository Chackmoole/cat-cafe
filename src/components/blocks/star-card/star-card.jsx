import './star-card-style.css';

export const StarCard = ({ src, title, text }) => { 
    console.log(src);
    
    return <li className='star-card'>
        <img className='star-card__pic' src={src} alt={src} width={313} height={313} />
        <p className='star-card__title'>{title}</p>
        <p className='star-card__description'>{text}</p>
    </li>
}