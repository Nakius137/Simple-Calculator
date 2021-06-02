import React from 'react'
import "../styles.css"

const Button = ({ content, result, click }) => {
    return <button 
    onClick={() => click(content,result)} 
    className="Button">
    {content}
    </button>
}
export default Button;