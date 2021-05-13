import React from 'react'
import Button from './Button.js'


const ButtonList = props => {
    const Buttons = props.types.map( button => {
    return <Button key={button.id} content={button.content} click={props.click}/>}
    ) 
    return Buttons
}
export default ButtonList;