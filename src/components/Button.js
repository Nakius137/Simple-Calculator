import React from 'react'

const Button = ({ content, result, click }) => {
    return <button onClick={() => click(content,result)}>{content}</button>
}
export default Button;