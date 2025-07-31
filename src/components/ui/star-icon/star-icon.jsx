import './star-icon-style.css';
import { Text, TextSize } from '../text/text';

export const StarIcons = {
    NEW: 'new',
    SOFT: 'soft'
};

export const StarIcon = ({variant}) => { 
    let component;
    switch (variant) { 
        case 'new': component = <div className='star-icon star-icon--new'><Text TextSize={TextSize.bold}>new</Text></div>
            break;    
        case 'soft': component = <div className='star-icon star-icon--soft'><Text TextSize={TextSize.bold}>Ласковый</Text></div>
            break;    
        default: component = '';
    }
    return component
}

