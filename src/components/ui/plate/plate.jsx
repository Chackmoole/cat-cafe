import './plate-style.css';

export const Plate = ({ children, className ='' }) => {
    return <p className={`plate ${className}`}>{ children }</p>
};