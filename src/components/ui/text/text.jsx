import './text-style.css';

export const TextSize = {
    normal: 'text',
    bold: 'text text--bold',
    mini: 'text text--small'
}

export const Text = ({ children, variant = TextSize.normal , className = '' }) => { 
    return <p className={ `${variant} ${className}`}>{ children }</p>
}