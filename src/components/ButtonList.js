import React from 'react'
import Button from './Button.js'


const ButtonList = (props) => {
    debugger
    const Buttons = props.types.map( button => {
    return <Button key={button.id} type={button.content}/>}
    ) 
    return Buttons
}
export default ButtonList;