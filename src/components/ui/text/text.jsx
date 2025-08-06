import './text-style.css';

export const TextVariant = {
    normal: 'text',
    bold: 'text text--bold',
    mini: 'text text--small'
}

export const Text = ({ children, variant = TextVariant.normal , className = '' }) => { 
    return <p className={ `${variant} ${className}`}>{ children }</p>
}