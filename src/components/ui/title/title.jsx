import './title-style.css'

export const TitleVariant = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3'
}

export const Title = ({ children, variant, className = '' }) => { 
    let component;
    switch (variant) { 
        case 'h1': component = <h1 className={`title title--${variant} ${className}`}>{children}</h1>
        break;
        case 'h2': component = <h2 className={`title title--${variant} ${className}`}>{children}</h2>
        break;
        case 'h3': component = <h3 className={`title title--${variant} ${className}`}>{children}</h3>
        break;
        default: component = <h1 className={`title title--${variant} ${className}`}>{children}</h1>
        break;
    }
    return component; 
}