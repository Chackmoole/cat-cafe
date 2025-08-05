import './star-icon-style.css';
import { Text, TextVariant } from '../text/text';

export const StarIcons = {
    NEW: 'new',
    SOFT: 'soft'
};

export const StarIcon = ({variant}) => { 
    let component;
    switch (variant) { 
        case 'new': component = <div className='star-icon star-icon--new'><Text variant={TextVariant.bold}>new</Text></div>
            break;    
        case 'soft': component = <div className='star-icon star-icon--soft'><Text variant={TextVariant.bold}>Ласковый</Text></div>
            break;    
        default: component = '';
    }
    return component
}

