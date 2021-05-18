import React from 'react'

const Button = props => {
    const { content, result, click} = props
    return <button onClick={() => click(content,result)}>{content}</button>
}
export default Button;