import './button-style.css'

export const Button = ({ children, minWidth = ''}) => { 
    return <button className='primary-button' style={{ minWidth: minWidth }}>{children}</button>
}