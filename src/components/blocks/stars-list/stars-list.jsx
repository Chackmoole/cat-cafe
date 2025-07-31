import './stars-list-style.css';
import { StarCard } from '../star-card/star-card';
import { catsList } from '../../../mocks/cats-list';

export const StarsList = () => {  
    // console.log(catsList[1].feature);
    
    return <ul className='stars-list'>
        {catsList.map((item) => <StarCard key={item.id} src={item.image} title={item.name} text={item.about} feature={item.feature} icon={ item.feature}></StarCard>)}
    </ul>
}